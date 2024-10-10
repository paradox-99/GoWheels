import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BasicHeading from "../../components/BasicHeading";
import { useState } from "react";
import UserDetailsModal from "./UserDetailsModal";


const ManageUsers = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const axiosPublic = useAxiosPublic();

    const { data: allUsers = [] , refetch } = useQuery({
        queryKey: ["/usersRoute/users"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/usersRoute/users`);
            return res.data;
        },
    });

    console.log(allUsers);
    const openModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(6); 
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(allUsers.length / usersPerPage);
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
     // pagination


    return (
        <div>
            {/* <section>
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <button className="flex items-center gap-x-3 focus:outline-none">
                                    <span>Name</span>
                                </button>
                            </th>

                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                Email
                            </th>

                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                Role
                            </th>

                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Status</th>

                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">License use</th>

                            <th scope="col" className="relative py-3.5 px-4">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                </table>
            </section> */}

            <div className="max-w-6xl mx-auto mt-5 lg:mt-32 px-6">
                <BasicHeading
                    title="Users Information"
                    heading={"All users are here"}
                    desc="Below is a list of all registered users in the system.Here you can find a summary of user accounts along with their roles and activity status.Click on a user card and see details"
                ></BasicHeading>{" "}
                <div className="max-w-screen-xl mx-auto lg:p-16">
                    <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
                        {
                            currentUsers.map((user) => (
                               
                                // eslint-disable-next-line react/jsx-key
                                <div  onClick={() => openModal(user)} className="hover:bg-[#fb664f] hover:text-white transition duration-300 max-w-sm rounded-3xl overflow-hidden shadow-lg">
                                    <div className="p-8">
                                        <div className="flex items-center justify-between">

                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={user.image}
                                                    className="rounded-full h-12 w-12 mb-4"
                                                    alt="Profile"
                                                />
                                                <h1 className="font-bold">{user.firstName} {user.lastName}</h1>
                                            </div>
                                        </div>
                                        <p>Email: {user.userEmail}</p>
                                        <p className="my-2 text-sm">
                                            Phone: {user.phone}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {renderPagination()}
                    {/* Modal for displaying user details */}
                    <UserDetailsModal
                        isOpen={isModalOpen}
                        closeModal={closeModal}
                        user={selectedUser}
                        refetch= {refetch}
                    />

                </div>
            </div>
        </div>
    );
};

export default ManageUsers;