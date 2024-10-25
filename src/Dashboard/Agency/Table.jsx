import { NavLink } from "react-router-dom";

const Table = ({ dataToDisplay }) => {
  if (!dataToDisplay || dataToDisplay.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex flex-col w-full h-full overflow-scroll shadow-md rounded-lg">
      
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-slate-200 bg-slate-50">
              <p className="text-[#ff4c30] font-extrabold">License Number</p>
            </th>
            <th className="p-4 border-b border-slate-200 bg-slate-50">
              <p className="text-[#ff4c30] font-extrabold">Brand</p>
            </th>
            <th className="p-4 border-b border-slate-200 bg-slate-50">
              <p className="text-[#ff4c30] font-extrabold">Rental Price</p>
            </th>
            <th className="p-4 border-b border-slate-200 bg-slate-50">
              <p className="text-[#ff4c30] font-extrabold">Model</p>
            </th>
            <th className="p-4 border-b border-slate-200 bg-slate-50">
              <p className="text-[#ff4c30] font-extrabold">Build Year</p>
            </th>
            <th className="p-4 border-b border-slate-200 bg-slate-50">
              <p className="text-[#ff4c30] font-extrabold">Details</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((vehicle) => (
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
                <NavLink to={`/dashboard/agency/vehicle-details/${vehicle._id}`}>
                  <button className="text-slate-500">View Details</button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
