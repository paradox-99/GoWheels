import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageAgencyDetails = () => {
    const [agency, setAgency] = useState([]);
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()

    const { data: allAgency = [], refetch } = useQuery({
        queryKey: ["agencyRoute/agency"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/agencyRoute/agency`);
            return res.data;
        },


    });
    useEffect(() => {
        setAgency(allAgency.filter((agent) => agent._id === id));
    }, [allAgency, id]);

    console.log(agency[0]?._id)

    const deleteAgency = async (agencyId) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to delete this agency? This action cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
            try {
                await axiosSecure.delete(`/agencyRoute/agencies/${agencyId}`);
                refetch();
                Swal.fire(
                    'Deleted!',
                    'The agency has been deleted.',
                    'success'
                );

                navigate('/dashboard/manage-agencies')

            } catch (error) {
                console.error('Error deleting agency:', error);
                Swal.fire(
                    'Error!',
                    'There was a problem deleting the agency.',
                    'error'
                );
            }
        }
    };

    const blockAgency = async (id) => {
        try {
            await axiosSecure.patch(`/agencyRoute/agencyBlock/${id}`);
            Swal.fire({
                title: 'Success!',
                text: 'This Agency is blocked now',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } catch (error) {
            console.error('Error blocking agency:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to block the agency. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };


    return (
        <div className="p-10">
            <div>
                <h1 className="text-3xl font-bold text-[black] mb-6   pb-4">
                    Agency Details
                </h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-secondary">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-secondary px-4 py-2 text-left">
                                    Field
                                </th>
                                <th className="border border-secondary px-4 py-2 text-left">
                                    Value
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr >
                                <td className="border border-secondary font-bold px-4 py-2">Agency Name</td>
                                <td className="border border-secondary px-4 py-2">
                                    {agency[0]?.agencyName}
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-secondary font-bold px-4 py-2">
                                    Business Registration No
                                </td>
                                <td className="border border-secondary px-4 py-2">
                                    {agency[0]?.businessRegNumber}
                                </td>
                            </tr>
                            <tr>
                                <td className="border font-bold border-secondary px-4 py-2">
                                    Insurance License No
                                </td>
                                <td className="border  border-secondary px-4 py-2">
                                    {agency[0]?.insuranceLicenseNumber}
                                </td>
                            </tr>
                            <tr>
                                <td className="border font-bold border-secondary px-4 py-2">
                                    Tax Identification No
                                </td>
                                <td className="border border-secondary px-4 py-2">
                                    {agency[0]?.taxIdentificationNumber}
                                </td>
                            </tr>
                            <tr>
                                <td className="border font-bold border-secondary px-4 py-2">
                                    Transport License No
                                </td>
                                <td className="border border-secondary px-4 py-2">
                                    {agency[0]?.transportLicenseNumber}
                                </td>
                            </tr>
                            <tr>
                                <td className="border font-bold border-secondary px-4 py-2">
                                    Number of Vehicles
                                </td>
                                <td className="border border-secondary px-4 py-2">
                                    {agency[0]?.numberOfVehicles}
                                </td>
                            </tr>
                            <tr>
                                <td className="border font-bold border-secondary px-4 py-2">
                                    Agency Address
                                </td>
                                <td className="border border-secondary px-4 py-2">
                                    {`Division: ${agency[0]?.agencyAddress.division}, District: ${agency[0]?.agencyAddress.district}, Upazilla: ${agency[0]?.agencyAddress.upazilla}, Area: ${agency[0]?.agencyAddress.area}, Street: ${agency[0]?.agencyAddress.street}`}
                                </td>

                            </tr>
                            <tr>
                                <td className="border border-secondary px-4 py-2">Status</td>
                                <td className="border border-secondary px-4 py-2 font-bold">
                                    {agency[0]?.status}
                                </td>
                            </tr>
                            {/* <tr>
              <td className="border border-secondary px-4 py-2">Status</td>
              <td className="border border-secondary px-4 py-2 font-bold">
                {agency[0]?.status}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-2">Role</td>
              <td className="border border-secondary px-4 py-2">
                {agency[0]?.userRole}
              </td>
            </tr> */}
                        </tbody>
                    </table>
                </div>

                <div className="flex mt-5 justify-between">
                    <Link to={'/dashboard/manage-agencies'}> <button className="border px-3 py-1 mt-2 rounded-md border-primary">Go Back</button></Link>

                    <div className="flex gap-4 font-bold">
                        <button onClick={() => blockAgency(agency[0]?._id)} className="border hover:bg-primary hover:text-white hover:shadow-lg px-3 py-1 mt-2 rounded-md border-primary">Blocked</button>
                        <button onClick={() => deleteAgency(agency[0]?._id)} className="border hover:bg-primary hover:text-white hover:shadow-lg px-3 py-1 mt-2 rounded-md border-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAgencyDetails;