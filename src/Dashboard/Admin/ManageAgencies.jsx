import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ManageAgencies = () => {

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
            <div className="p-10">
                <h1 className="text-3xl font-bold text-[black] mb-6">Manage Agency here</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full min-w-full  ">
                        <thead className="bg-primary  text-xl">
                            <tr className="text-white">
                                <th className="py-1">No.</th>
                                <th>Agency Name</th>
                                <th>Number Of Vehicles</th>
                                <th>Agency Address</th>
                                <th>Agency Identity</th>
                            </tr>
                        </thead>
                        <tbody className="text-center w-full">
                            {/* row 1 */}
                            {allAgency.map((agency, index) => (
                                <tr className="border shadow-lg " key={agency._id}>
                                    <th>
                                        <label>{index + 1}.</label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="text-center w-full">
                                                <h3 className="font-bold">{agency.agencyName}</h3>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{agency.numberOfVehicles}</p>
                                    </td>
                                    <td>
                                        <p>{agency.agencyAddress.division}</p>
                                    </td>

                                    <th className="py-4">
                                        <Link
                                            to={`/dashboard/manage-agencies/agencyDetails/${agency._id}`}
                                            className="border-primary border p-3 text-xs rounded-lg"
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
        </div>
    );
};

export default ManageAgencies;