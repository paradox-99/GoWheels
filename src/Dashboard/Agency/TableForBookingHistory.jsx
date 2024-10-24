
const TableForBookingHistory = ({ dataToDisplay }) => {
  if (!dataToDisplay || dataToDisplay.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex flex-col w-full h-full overflow-scroll shadow-md rounded-lg">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            {[
              "Car Name",
              "Booking Date",
              "Pickup Date",
              "Dropoff Date",
              "Pickup Location",
              "Dropoff Location",
              "Price",
            ].map((header) => (
              <th
                key={header}
                className="p-4 border-b border-slate-200 bg-slate-50"
              >
                <p className="text-sm font-normal leading-none text-slate-500">
                  {header}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((booking) => (
            <tr
              key={booking._id}
              className="hover:bg-slate-50 border-b border-slate-200"
            >
              <td className="p-4 py-5">
                <p className="block font-semibold text-sm text-slate-800">
                  {booking.name}
                </p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">
                  {new Date(booking.bookingDate).toLocaleDateString()}
                </p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">
                  {new Date(booking.pickupDate).toLocaleDateString()}
                </p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">
                  {new Date(booking.dropoffDate).toLocaleDateString()}
                </p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">
                  {booking.pickupLocation}
                </p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">
                  {booking.dropoffLocation}
                </p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{booking.price}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TableForBookingHistory;