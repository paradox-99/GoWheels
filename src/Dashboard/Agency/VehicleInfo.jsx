import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure"; // Assuming you have this hook
import { AuthContext } from "../../provider/AuthProvider";
import Table from "./Table.jsx";

const VehicleInfo = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // ---- QUERY TO FETCH DATA ----
  const {
    data: vehicles = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["vehicles", user?.userEmail],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/agencyRoute/agency/vehicleInfo/${user?.userEmail}`
      );
      console.log(data);
      return data;
    },
  });

  // ---- PAGINATION ----
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const TOTAL_VALUES_PER_PAGE = 3;

  useEffect(() => {
    const start = (currentPageNumber - 1) * TOTAL_VALUES_PER_PAGE;
    const end = start + TOTAL_VALUES_PER_PAGE; // Fix the slicing logic
    setDataToDisplay(vehicles.slice(start, end));
  }, [currentPageNumber, vehicles]);

  const goOnPrevPage = () => {
    if (currentPageNumber > 1) {
      setCurrentPageNumber((prev) => prev - 1);
    }
  };

  const goOnNextPage = () => {
    if (
      currentPageNumber < Math.ceil(vehicles.length / TOTAL_VALUES_PER_PAGE)
    ) {
      // Use total pages for comparison
      setCurrentPageNumber((prev) => prev + 1);
    }
  };

  const handleSelectChange = (e) => {
    setCurrentPageNumber(Number(e.target.value)); // Convert to number for accurate comparison
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong: {error.message}</div>;

  return (
    <div className="mx-auto p-8">
      <h3 className="text-lg flex justify-center items-center text-center font-semibold text-slate-800">
        Your All Vehicle Information
      </h3>
      {/*PAGINATION ----------------------- */}
      <div id="container" className="">
        <div id="page-no-dropdown" className="m-8">
          <label className="font-bold">Page </label>
          <select
            name="page-number"
            onChange={handleSelectChange}
            value={currentPageNumber}
          >
            {Array.from(
              { length: Math.ceil(vehicles.length / TOTAL_VALUES_PER_PAGE) },
              (_, i) => i + 1
            ).map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <Table dataToDisplay={dataToDisplay} />
        <div
          id="btn-container"
          className="font-bold text-lg flex justify-end gap-8 items-center  mr-10"
        >
          <button
            className=""
            onClick={goOnPrevPage}
            disabled={currentPageNumber === 1}
          >
            Prev
          </button>
          <button
            onClick={goOnNextPage}
            disabled={
              currentPageNumber >=
              Math.ceil(vehicles.length / TOTAL_VALUES_PER_PAGE)
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
