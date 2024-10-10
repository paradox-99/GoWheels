import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AgencyApprove = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allAgency = [] } = useQuery({
    queryKey: ["agencyRoute/agency"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agencyRoute/agency`);
      return res.data;
    },
  });

  console.log(allAgency);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[black] mb-6">Agency Approve</h1>
      <div className="overflow-x-auto">
        <table className="table w-full min-w-full bg-secondary text-background">
          <thead className="bg-primary text-background text-xl">
            <tr className="">
              <th className="py-1">No.</th>
              <th>Agency Name</th>
              <th>Agency Address</th>
              <th>Agency Identity</th>
            </tr>
          </thead>
          <tbody className="text-center w-full">
            {/* row 1 */}
            {allAgency.map((agency, index) => (
              <tr key={agency._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="text-center w-full">
                      <h3 className="font-bold">{agency.agencyName}</h3>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{agency.agencyAddress.division}, {agency.agencyAddress.district}, <br /> {agency.agencyAddress.upazilla}</p>
                </td>

                <th className="py-4">
                  <Link
                    to={`/dashboard/approve-agency/agencyDetails/${agency._id}`}
                    className="hover:bg-transparent hover:border-2 border-primary  hover:bg-primary hover:text-white duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-4 py-2 text-background rounded-lg font-nunito font-semibold"
                  >
                    Details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgencyApprove;
