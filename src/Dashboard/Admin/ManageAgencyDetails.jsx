import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageAgencyDetails = ({ isOpen, closeModal, agency, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    // const { data: allAgency = [], refetch } = useQuery({
    //     queryKey: ["agencyRoute/agency"],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/agencyRoute/agency`);
    //         return res.data;
    //     },
    // });

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
                Swal.fire('Deleted!', 'The agency has been deleted.', 'success');
                closeModal()
                navigate('/dashboard/manage-agencies');

            } catch (error) {
                Swal.fire('Error!', 'There was a problem deleting the agency.', error);
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
            Swal.fire('Error!', 'Failed to block the agency. Please try again.', error);
        }
    };

    if (!isOpen || !agency) return null;

    return (
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <Helmet>
                <title>{agency?.agencyName} || Details</title>
            </Helmet>
            <div className="lg:max-w-[50%] rounded-md p-10 w-full bg-white" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between relative">
                    <h1 className="text-xl font-bold text-black mb-6">Agency Details</h1>

                    <button className="modal-close-btn text-white w-10 h-10 absolute rounded-full  bg-black bg-opacity-20  lg:-top-16  lg:-right-16 -top-6  -right-6" onClick={closeModal}>X</button>
                </div>

                <table className="min-w-full table-auto border-collapse border border-secondary">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-secondary px-4 py-2 text-left">Field</th>
                            <th className="border border-secondary px-4 py-2 text-left">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-secondary font-bold px-4 py-2">Agency Name</td>
                            <td className="border border-secondary px-4 py-2">{agency?.agencyName}</td>
                        </tr>
                        <tr>
                            <td className="border border-secondary font-bold px-4 py-2">Business Registration No</td>
                            <td className="border border-secondary px-4 py-2">{agency?.businessRegNumber}</td>
                        </tr>
                        <tr>
                            <td className="border border-secondary font-bold px-4 py-2">Insurance License No</td>
                            <td className="border border-secondary px-4 py-2">{agency?.insuranceLicenseNumber}</td>
                        </tr>
                        <tr>
                            <td className="border border-secondary font-bold px-4 py-2">Tax Identification No</td>
                            <td className="border border-secondary px-4 py-2">{agency?.taxIdentificationNumber}</td>
                        </tr>
                        <tr>
                            <td className="border border-secondary font-bold px-4 py-2">Transport License No</td>
                            <td className="border border-secondary px-4 py-2">{agency?.transportLicenseNumber}</td>
                        </tr>
                        <tr>
                            <td className="border border-secondary font-bold px-4 py-2">Number of Vehicles</td>
                            <td className="border border-secondary px-4 py-2">{agency?.numberOfVehicles}</td>
                        </tr>
                        <tr>
                            <td className="border border-secondary font-bold px-4 py-2">Agency Address</td>
                            <td className="border border-secondary px-4 py-2">{`Division: ${agency?.agencyAddress.division}, District: ${agency?.agencyAddress.district}, Upazilla: ${agency?.agencyAddress.upazilla}, Area: ${agency?.agencyAddress.area}, Street: ${agency?.agencyAddress.street}`}</td>
                        </tr>
                        <tr>
                            <td className="border border-secondary font-bold px-4 py-2">Status</td>
                            <td className="border border-secondary px-4 py-2 font-bold">{agency?.status}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-between mt-5">

                    <div className="flex gap-4 font-bold">
                        <button onClick={() => blockAgency(agency?._id)} className="border hover:bg-primary hover:text-white hover:shadow-lg px-3 py-1 mt-2 rounded-md border-primary">Block</button>
                        <button onClick={() => deleteAgency(agency?._id)} className="border hover:bg-primary hover:text-white hover:shadow-lg px-3 py-1 mt-2 rounded-md border-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAgencyDetails;
