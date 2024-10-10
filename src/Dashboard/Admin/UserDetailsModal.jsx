/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UserDetailsModal = ({ isOpen, closeModal, user, refetch }) => {
    const [open, setOpen] = useState(false);
    const [newRole, setNewRole] = useState(user?.userRole || '');
    const [isUpdating, setIsUpdating] = useState(false);
    const axiosPublic = useAxiosPublic();

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
                setIsUpdating(true); // Show loading state

                // Send request to update role
                await axiosPublic.patch(`/usersRoute/users/role/${user._id}`, {
                    userId: user._id,
                    newRole: selectedRole
                });

                // After success
                refetch(); // Update the user list
                user.userRole = selectedRole; // Update UI instantly

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

if (!isOpen || !user) return null;

return (
    <div>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
                <button
                    className="absolute text-2xl font-bold top-2 right-2 text-[#fb664f]"
                    onClick={closeModal}
                >
                    X
                </button>
                <h2 className="text-xl font-semibold mb-4">User Details</h2>
                <img
                    src={user.image}
                    alt="User Profile"
                    className="rounded-lg h-24 w-36 mx-auto mb-4"
                />
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
                {open && (
                    <div className="mt-2 border-t border-gray-300 pt-2">
                        <p><strong>Division:</strong> {user.userAddress.division}</p>
                        <p><strong>District:</strong> {user.userAddress.district}</p>
                        <p><strong>Upazilla:</strong> {user.userAddress.upazilla}</p>
                    </div>
                )}
            </div>
        </div>
    </div>
);
};

export default UserDetailsModal;
