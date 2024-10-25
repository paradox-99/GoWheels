import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import TableForBookingHistory from "./TableForBookingHistory";
import useAgencyInfo from "../../hooks/useAgencyInfo";

const BookingHistoryForAgency = () => {
  const axiosSecure = useAxiosSecure();
  const { agencyData } = useAgencyInfo();
  const agencyId = agencyData?.agency_id;
  console.log(agencyId);

  // ---- QUERY TO FETCH BOOKING DATA BY AGENCY_ID ----
  const {
    data: bookings = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", agencyId],
    enabled: !!agencyId, // Only run query when agencyId is available
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/bookings/bookings/${agencyId}`);
      console.log(data);

      return data;
    },
  });

  // PAGINATION STARTS----------------------

  // ---- PAGINATION ----
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const TOTAL_VALUES_PER_PAGE = 3;

  useEffect(() => {
    const start = (currentPageNumber - 1) * TOTAL_VALUES_PER_PAGE;
    const end = start + TOTAL_VALUES_PER_PAGE; // Fix the slicing logic
    setDataToDisplay(bookings.slice(start, end));
  }, [currentPageNumber, bookings]);

  const goOnPrevPage = () => {
    if (currentPageNumber > 1) {
      setCurrentPageNumber((prev) => prev - 1);
    }
  };

  const goOnNextPage = () => {
    if (
      currentPageNumber < Math.ceil(bookings.length / TOTAL_VALUES_PER_PAGE)
    ) {
      // Use total pages for comparison
      setCurrentPageNumber((prev) => prev + 1);
    }
  };

  const handleSelectChange = (e) => {
    setCurrentPageNumber(Number(e.target.value)); // Convert to number for accurate comparison
  };

  // PAGINATION ENDS -------------------------

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching booking history: {error.message}</div>;

  return (
    <div className="mx-auto p-8">
      <h3 className="text-lg flex justify-center items-center text-center font-semibold text-slate-800">
        Overview of the Booking Cars History for {agencyData?.agencyName}
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
              { length: Math.ceil(bookings.length / TOTAL_VALUES_PER_PAGE) },
              (_, i) => i + 1
            ).map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <TableForBookingHistory dataToDisplay={dataToDisplay} />
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
              Math.ceil(bookings.length / TOTAL_VALUES_PER_PAGE)
            }
          >
            Next
          </button>
        </div>
      </div>

      {/* ------------------------ */}
    </div>
  );
};

export default BookingHistoryForAgency;
