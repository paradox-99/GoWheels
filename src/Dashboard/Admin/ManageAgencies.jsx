import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import BasicHeading from "../../components/BasicHeading";
import { useState } from "react";
import ManageAgencyDetails from "./ManageAgencyDetails";
import { Helmet } from "react-helmet-async";

const ManageAgencies = () => {
    const axiosSecure = useAxiosSecure();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const { data: allAgency = [], refetch } = useQuery({
        queryKey: ["agencyRoute/agency"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/agencyRoute/agency`);
            return res.data;
        },
    });

    const openModal = (agency) => {
        setSelectedUser(agency);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = allAgency.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(allAgency.length / usersPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPagination = () => {
        return (
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-[#fb664f] text-white' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className="p-10">
            <Helmet>
                <title>Agencies Information</title>
            </Helmet>
            <BasicHeading
                title="Users Information"
                heading={"All Agencies are here"}
            />
            <div className="mt-10 relative flex flex-col w-full mx-auto h-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg">
                <div className="relative max-h-[600px] overflow-auto">
                    <div className="min-w-full">
                        <table className="table w-full py-5 whitespace-nowrap">
                            <thead className="bg-slate-50">
                                <tr className="sticky top-0 z-10 bg-slate-50 text-gray-700">
                                    <th className="py-2">No.</th>
                                    <th>Agency Name</th>
                                    <th>Number Of Vehicles</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-center text-gray-700 w-full">
                                {currentUsers.map((agency, index) => (
                                    <tr className="border" key={agency._id}>
                                        <th>
                                            <label>{index + 1}.</label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="text-center w-full">
                                                    <h3>{agency.agencyName}</h3>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{agency.numberOfVehicles}</p>
                                        </td>
                                        <td>
                                            <p>{agency.agencyAddress.division}</p>
                                        </td>
                                        <td className="p-2">
                                            <button
                                                onClick={() => openModal(agency)}
                                                className="border-primary border p-3 text-xs rounded-lg"
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {renderPagination()}

            {/* Modal for Agency Details */}
            {isModalOpen && (
                <ManageAgencyDetails
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    agency={selectedUser}
                    refetch={refetch}
                />
            )}
        </div>
    );
};

export default ManageAgencies;
