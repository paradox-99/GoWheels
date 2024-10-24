import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import BasicHeading from "../../components/BasicHeading";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Helmet } from "react-helmet-async";



const ManageModaretors = () => {

    const axiosPublic = useAxiosPublic();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [open, setOpen] = useState(false);
    
    const openCloser = () => {
        setOpen(!open);
    };

    const { data: allModerators = [] } = useQuery({
        queryKey: ["/usersRoute/moderators"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/usersRoute/moderators`);
            return res.data;
        },
    });

    const openModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    // console.log(allModerators)

    // if (!isModalOpen || !selectedUser) return null;

    return (
        <div className="mt-10 px-10">
            <Helmet>
                <title>Moderators Information</title>
            </Helmet>
            <BasicHeading
                title="Users Information"
                heading={"All Agencies are here"}
            />
            <div className="relative  flex flex-col w-full  mx-auto h-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <div className="relative  max-h-[600px] overflow-auto">
                    <div className="min-w-ful">
                        <table className="table w-full py-5 whitespace-nowrap">
                            <thead className="bg-slate-50">
                                <tr className="sticky top-0 z-10 bg-slate-50 text-gray-700">
                                    <th className="py-2">No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Show Details</th>
                                </tr>
                            </thead>
                            <tbody className="text-center text-gray-700 w-full">
                                {allModerators.map((moderator, index) => (
                                    <tr className="border" key={moderator._id}>
                                        <th>
                                            <label>{index + 1}.</label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="text-center w-full">
                                                    <h3 className="text-gray-700">
                                                        {moderator.firstName} {moderator.lastName}
                                                    </h3>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td>
                                            <p className={`${moderator.userRole === 'admin'
                                                ? 'text-red-500'
                                                : moderator.userRole === 'agency'
                                                    ? 'text-blue-500'
                                                    : moderator.userRole === 'moderator'
                                                        ? 'text-yellow-500'
                                                        : 'text-green-500'
                                                } font-semibold`}>
                                                {moderator.userRole}
                                                {user && user.email === moderator.userEmail ? ' (you)' : ''}
                                            </p>
                                        </td> */}
                                        <td>
                                            <p>{moderator.userEmail}</p>
                                        </td>
                                        <td>
                                            <p>{moderator.phone}</p>
                                        </td>
                                        <th className="py-4">
                                            <Link
                                                onClick={() => openModal(moderator)}
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

            {/******************Modal*************** */}
            {isModalOpen && selectedUser && (
                <div className="fixed inset-0 z-50 flex p-4 items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
                        <button
                            className="absolute  w-10 h-10 rounded-full bg-black bg-opacity-20  lg:-top-6 lg:-right-9 -top-6  -right-6 text-white"
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <h2 className="text-xl font-semibold mb-4">User Details</h2>
                        <img
                            src={selectedUser.image}
                            alt="User Profile"
                            className="rounded-lg h-24 w-36 mx-auto mb-4"
                        />
                        <p><strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
                        <p><strong>Email:</strong> {selectedUser.userEmail}</p>
                        <p><strong>Phone:</strong> {selectedUser.phone}</p>
                        <p><strong>Role:</strong> {selectedUser.userRole}</p>
                        <p><strong>Account Status:</strong> {selectedUser.accountStatus}</p>
                        <p><strong>Gender:</strong> {selectedUser.gender}</p>
                        <p><strong>DateOfBirth:</strong> {selectedUser.dateOfBirth}</p>

                        {/* Role Update Section */}
                        {/* <div className="mt-4">
                            <label htmlFor="role" className="font-semibold">Change Role:</label>
                            <select
                                id="role"
                                value={newRole}
                                onChange={handleRoleChange}
                                className="ml-2 border p-2 rounded"
                                disabled={isUpdating} 
                            >
                                <option value="admin">Admin</option>
                                <option value="moderator">Moderator</option>
                                <option value="user">user</option>
                               
                            </select>
                            {isUpdating && <p className="text-blue-500">Updating role...</p>}
                        </div> */}

                        {/* Collapsible Section */}
                        <div
                            onClick={openCloser} // Toggle on click
                            className="cursor-pointer mt-4 font-semibold"
                        >
                            <p className="flex items-center ">User Address {open ? <FiChevronUp /> : <FiChevronDown />}</p>
                        </div>

                        <div className="">
                            <div className="">
                                <div>
                                    {open && (
                                        <div className="mt-2 border-t border-gray-300 pt-2">
                                            <p><strong>Division:</strong> {selectedUser.userAddress.division}</p>
                                            <p><strong>District:</strong> {selectedUser.userAddress.district}</p>
                                            <p><strong>Upazilla:</strong> {selectedUser.userAddress.upazilla}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* <div className="flex justify-between">
                                <button></button>
                                <button onClick={() => deleteUser(user?._id)} className="border border-primary p-2 rounded text-xs font-semibold">Delete this user</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageModaretors;