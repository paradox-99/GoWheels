import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BasicHeading from "../../components/BasicHeading";
import { useState } from "react";
import UserDetailsModal from "./UserDetailsModal";
import UseAuth from "../../hooks/UseAuth";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const ManageUsers = () => {
    const { user } = UseAuth();
    // console.log(user.email)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const axiosPublic = useAxiosPublic();
    const [searchTerm, setSearchTerm] = useState("");

    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ["/usersRoute/users"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/usersRoute/users`, {
                params: { search: searchTerm }
            });
            return res.data;
        },
    });

    // console.log(allUsers);
    const openModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        refetch(); // Refetch the data whenever the search term changes
    };

    // pagination
    // const [currentPage, setCurrentPage] = useState(1);
    // const [usersPerPage] = useState(6);
    // const indexOfLastUser = currentPage * usersPerPage;
    // const indexOfFirstUser = indexOfLastUser - usersPerPage;
    // const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);
    // const totalPages = Math.ceil(allUsers.length / usersPerPage);
    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };
    // const renderPagination = () => {
    //     return (
    //         <div className="flex justify-center mt-4">
    //             {Array.from({ length: totalPages }, (_, index) => (
    //                 <button
    //                     key={index + 1}
    //                     onClick={() => handlePageChange(index + 1)}
    //                     className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-[#fb664f] text-white' : ''}`}
    //                 >
    //                     {index + 1}
    //                 </button>
    //             ))}
    //         </div>
    //     );
    // };
    // pagination


    return (
        <div>
            <Helmet>
                <title>Users Information</title>
            </Helmet>
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

            <div className=" mt-5  px-6">
                <BasicHeading
                    title="Users Information"
                    heading={"All users are here"}
                ></BasicHeading>{" "}

                <div className="mt-4 relative text-center flex justify-center items-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search by users name"
                        className="shadow shadow-slate-600 py-4 w-[40%] px-4 rounded"

                    />
                    <div className="px-8 py-3 absolute ml-[33%] rounded-lg  bg-primary text-white">
                        <FaSearch className=""></FaSearch>
                    </div>
                </div>
                <div className=" text-gray-700 mt-16">
                    <div className="relative flex flex-col w-full  mx-auto h-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                        <div className="relative max-h-[600px] overflow-auto">
                            <div className="min-w-ful">
                                <table className="table w-full py-5 whitespace-nowrap">
                                    <thead className="bg-slate-50">
                                        <tr className="sticky top-0 z-10 bg-slate-50 text-gray-700">
                                            <th className="py-2">No.</th>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Email</th>
                                            <th>Show Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center text-gray-700 w-full">
                                        {allUsers.map((userData, index) => (
                                            <tr className="border" key={userData._id}>
                                                <th>
                                                    <label>{index + 1}.</label>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="text-center w-full">
                                                            <h3 className="text-gray-700">
                                                                {userData.firstName} {userData.lastName}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className={`${userData.userRole === 'admin'
                                                        ? 'text-red-500'
                                                        : userData.userRole === 'agency'
                                                            ? 'text-blue-500'
                                                            : userData.userRole === 'moderator'
                                                                ? 'text-yellow-500'
                                                                : 'text-green-500'
                                                        } font-semibold`}>
                                                        {userData.userRole}
                                                        {user && user.email === userData.userEmail ? ' (you)' : ''}
                                                    </p>
                                                </td>
                                                <td>
                                                    <p>{userData.userEmail}</p>
                                                </td>
                                                <th className="py-4">
                                                    <Link
                                                        onClick={() => openModal(userData)}
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
                    {/* {renderPagination()} */}
                    {/* Modal for displaying user details */}
                    <UserDetailsModal
                        isOpen={isModalOpen}
                        closeModal={closeModal}
                        user={selectedUser}
                        refetch={refetch}
                    />
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;