import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAgencyInfo from "../../hooks/useAgencyInfo";

const ActiveBooking = () => {
  const axiosSecure = useAxiosSecure();
  const { agencyData } = useAgencyInfo();
  const agencyId = agencyData?.agency_id;
  const queryClient = useQueryClient();

  // Fetch user data from AuthContext
  const { user } = useContext(AuthContext);

  // ---- QUERY TO FETCH PENDING VEHICLES ----
  const {
    data: activeVehicles = [], // Renaming for clarity
    isLoading,
    error,
  } = useQuery({
    queryKey: ["activeVehicles", user?.email], 
    enabled: !!agencyId && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `bookings/bookings/activeVehicles/${user?.email}`
      );
      console.log(data);
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching booking history: {error.message}</div>;
  return (
    <div className=" mx-auto">
      <Helmet>
        <title>Active Bookings</title>
      </Helmet>
      <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
        <a
          target="_blank"
          href=""
          className="block w-full px-4 py-2 text-center text-slate-700 transition-all "
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
        <div className="ml-3">
          <div className="w-full relative">
            <div className="relative">
              <input
                className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Search"
              />
              <button
                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-slate-600"
                >
                  <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-black-500">
                  Name
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-black-500">
                  Booking Date
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-black-500">
                  Pickup Date
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-black-500">
                  Drop off Date
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-black-500">
                  Pickup Location
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-black-500">
                  Drop off Location
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-black-500">
                  Price
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {activeVehicles.map((activeVehicle, index) => (
              <tr
                key={index}
                className="hover:bg-slate-50 border-b border-slate-200"
              >
                <td className="p-4 py-5">
                  {new Date(activeVehicle.name).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>

                <td className="p-4 py-5">
                  <p className="text-sm text-black-500">
                    {new Date(activeVehicle.bookingDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                  <p className="text-sm text-black-500">
                    {new Date(activeVehicle.bookingDate).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }
                    )}
                  </p>
                </td>
                <td className="p-4 py-5">
                  {new Date(activeVehicle.pickupDate).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td className="p-4 py-5">
                  {new Date(activeVehicle.dropoffDate).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-black-500">
                    {activeVehicle.pickupLocation}
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-black-500">
                    {activeVehicle.dropoffLocation}
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-black-500">
                    {activeVehicle.price}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-sm text-black-500">
            Showing <b>1-5</b> of 45
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              Prev
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
              1
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              2
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              3
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveBooking;
