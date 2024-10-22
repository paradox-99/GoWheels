import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure"; 
import useAgencyData from "../../hooks/UseAgencyData";

const BookingHistoryForAgency = () => {
  const axiosSecure = useAxiosSecure();
  const { agencyData } = useAgencyData();
  const agencyId = agencyData?.agency_id;
  console.log(agencyId);


  
  // ---- QUERY TO FETCH BOOKING DATA BY AGENCY_ID ----
  const { data: bookings = [], isLoading, error } = useQuery({
    queryKey: ['bookings', agencyId],
    enabled: !!agencyId,  // Only run query when agencyId is available
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/bookings/bookings/${agencyId}`);
      console.log(data);
      
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching booking history: {error.message}</div>;

  return (
    <div className="mx-auto">
      {/* UI code */}
      <h3 className="text-lg font-semibold text-slate-800">
        Overview of the Booking Cars History for {agencyData?.agencyName}
      </h3>
      {/* Render bookings data */}
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            {["Car Name", "Booking Date", "Pickup Date", "Dropoff Date", "Pickup Location", "Dropoff Location", "Price"].map((header) => (
              <th key={header} className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-slate-500">{header}</p>
              </th>
            ))}
          </tr>
        </thead>
        {/* <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id} className="hover:bg-slate-50 border-b border-slate-200">
              <td className="p-4 py-5">
                <p className="block font-semibold text-sm text-slate-800">{booking.name}</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{new Date(booking.bookingDate.$date).toLocaleDateString()}</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{new Date(booking.pickupDate.$date).toLocaleDateString()}</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{new Date(booking.dropoffDate.$date).toLocaleDateString()}</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{booking.pickupLocation}</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{booking.dropoffLocation}</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{booking.totalPrice.$numberInt}</p>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default BookingHistoryForAgency;
