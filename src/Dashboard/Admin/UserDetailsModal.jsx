/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UserDetailsModal = ({ isOpen, closeModal, user, refetch }) => {
    const [open, setOpen] = useState(false);
    const [newRole, setNewRole] = useState(user?.userRole || '');
    const [isUpdating, setIsUpdating] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const openModal = () => {
        setOpen(!open);
    };

    // Function to handle role change
    const handleRoleChange = async (event) => {
        const selectedRole = event.target.value;
        setNewRole(selectedRole);

        try {
            // Show confirmation before updating
            const result = await Swal.fire({
                title: "Are you sure?",
                text: `You are about to change the user's role to ${selectedRole}`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, change it!"
            });

            if (result.isConfirmed) {
                setIsUpdating(true); 
                await axiosPublic.patch(`/usersRoute/users/role/${user._id}`, {
                    userId: user._id,
                    newRole: selectedRole
                });
                refetch(); 
                user.userRole = selectedRole; 

                setIsUpdating(false);

                Swal.fire({
                    title: "Success!",
                    text: `User role updated to ${selectedRole}`,
                    icon: "success",
                    confirmButtonColor: "#3085d6"
                });
            }
        } catch (error) {
            console.error("Error updating role:", error);
            setIsUpdating(false);
            Swal.fire({
                title: "Error!",
                text: "Failed to update role.",
                icon: "error",
                confirmButtonColor: "#d33"
            });
        }
    };

    const deleteUser = async (id) => {
        console.log(id)
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
                await axiosPublic.delete(`/usersRoute/deleteUser/${id}`);
                refetch();
                Swal.fire(
                    'Deleted!',
                    'The agency has been deleted.',
                    'success'
                );

                navigate('/dashboard/manage-users')

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


    if (!isOpen || !user) return null;

    return (
        <div>
            <Helmet>
                <title>Details || {user.firstName} {user.lastName}</title>
            </Helmet>
            <div className="fixed inset-0 z-50 flex p-4 items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
                    <button className="absolute  w-10 h-10 rounded-full bg-black bg-opacity-20  lg:-top-6 lg:-right-9 -top-6  -right-6 text-white" onClick={closeModal}>X</button>
                    <h2 className="text-xl font-semibold mb-4">User Details</h2>
                    <img src={user.image} alt="User Profile" className="rounded-lg h-24 w-36 mx-auto mb-4"/>
                    <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                    <p><strong>Email:</strong> {user.userEmail}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Role:</strong> {user.userRole}</p>
                    <p><strong>Account Status:</strong> {user.accountStatus}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>DateOfBirth:</strong> {user.dateOfBirth}</p>

                    {/* Role Update Section */}
                    <div className="mt-4">
                        <label htmlFor="role" className="font-semibold">Change Role:</label>
                        <select
                            id="role"
                            value={newRole}
                            onChange={handleRoleChange}
                            className="ml-2 border p-2 rounded"
                            disabled={isUpdating} // Disable while updating
                        >
                            <option value="admin">Admin</option>
                            <option value="moderator">Moderator</option>
                            <option value="user">user</option>
                            {/* Add other roles as needed */}
                        </select>
                        {isUpdating && <p className="text-blue-500">Updating role...</p>}
                    </div>

                    {/* Collapsible Section */}
                    <div
                        onClick={openModal} // Toggle on click
                        className="cursor-pointer mt-4 font-semibold"
                    >
                        <p className="flex items-center ">User Address {open ? <FiChevronUp /> : <FiChevronDown />}</p>
                    </div>

                    <div className="">
                        <div className="">
                            <div>
                                {open && (
                                    <div className="mt-2 border-t border-gray-300 pt-2">
                                        <p><strong>Division:</strong> {user.userAddress.division}</p>
                                        <p><strong>District:</strong> {user.userAddress.district}</p>
                                        <p><strong>Upazilla:</strong> {user.userAddress.upazilla}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button></button>
                            <button onClick={() => deleteUser(user?._id)} className="border border-primary p-2 rounded text-xs font-semibold">Delete this user</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsModal;
