import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const VehicleInfo = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: vehicles, refetch, isLoading, error } = useQuery({
    queryKey: ["vehicles", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/agencyRoute/agency/vehicleInfo/${user?.email}`
      );
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="mx-auto">
      <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
        <a
          target="_blank"
          href=""
          className="block w-full px-4 py-2 text-center"
        >
          Manage Your All <b>Rental Cars</b>.
        </a>
      </div>

      <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Overview of the Booking Cars
          </h3>
        </div>
      </div>

      <div className=" flex flex-col w-full h-full overflow-scroll shadow-md rounded-lg">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className=" text-[#ff4c30] font-extrabold">License Number</p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className=" text-[#ff4c30] font-extrabold">Brand</p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-[#ff4c30] font-extrabold">
                Rental Price
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className=" text-[#ff4c30] font-extrabold">
                Model                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className=" text-[#ff4c30] font-extrabold">Build Year </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className=" text-[#ff4c30] font-extrabold">Details</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {vehicles?.map((vehicle, index) => (
              <tr
                key={vehicle.licenseNumber}
                className="hover:bg-slate-50 border-b border-slate-200 bg-transparent"
              >
                <td className="p-4 py-5">
                  <p className="block font-semibold text-slate-800">
                    {vehicle.licenseNumber}
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-slate-500">{vehicle.brand}</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-slate-500">{vehicle.rentalPrice}</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-slate-500">{vehicle.model}</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-slate-500">{vehicle.buildYear}</p>
                </td>
                <td className="p-4 py-5">
                  <button className="text-slate-500">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center px-4 py-3">
          <div>
            Showing <b>1-5</b> of {vehicles?.length}
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 min-w-9 min-h-9 font-normal bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              Prev
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
              1
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 font-normal bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              2
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 font-normal bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              3
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 font-normal bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
