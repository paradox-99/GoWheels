import  { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEdit } from 'react-icons/fa';

// Mock user data
const mockUserData = {
    name: "John Doe",
    email: "john.doe@example.com",
    zilla: "Dhaka",
    upozilla: "Dhanmondi",
    district: "Dhaka",
    profileImage: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=", // Placeholder image URL
};

const UserProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedField, setSelectedField] = useState('');
    const [editValue, setEditValue] = useState('');

    const handleEditClick = (field, currentValue) => {
        setSelectedField(field);
        setEditValue(currentValue);
        setIsModalOpen(true);
    };

    const handleSave = () => {
        console.log(`Updated ${selectedField}: ${editValue}`);
        setIsModalOpen(false);
    };

    return (
        <div style={{ boxShadow: '0 10px 50px 50px #FEF2F2' }} className="p-12 max-w-4xl mx-auto">
            <Helmet>
                <title>{mockUserData.name} Profile</title>
            </Helmet>
            <div>
                <h1 className='text-4xl font-semibold'>Profile </h1>
            </div>
            <br />
            <hr />
            <div className="flex pt-10 pb-4 items-center space-x-6 mb-8">
                <img
                    src={mockUserData.profileImage}
                    alt="User"
                    className="w-40 h-40 rounded-full object-cover"
                />
                <div className="flex items-center space-x-4">
                    <h1 className="text-4xl font-bold">{mockUserData.name}</h1>
                    <FaEdit
                        className="text-primary cursor-pointer"
                        onClick={() => handleEditClick('name', mockUserData.name)}
                    />
                </div>
            </div>

            <div className="space-y-4 ">
                <div className="flex gap-12 py-4 border-y items-center">
                    <div>
                        <span className="block text-sm text-primary font-medium ">Email</span>
                        <span className="text-lg ">{mockUserData.email}</span>
                    </div>
                    <FaEdit
                        className="text-primary cursor-pointer"
                        onClick={() => handleEditClick('email', mockUserData.email)}
                    />
                </div>

                <div className="flex gap-12  pt-2 pb-4 border-b  items-center">
                    <div>
                        <span className="block text-sm text-primary font-medium ">Zilla</span>
                        <span className="text-lg ">{mockUserData.zilla}</span>
                    </div>
                    <FaEdit
                        className="text-primary cursor-pointer"
                        onClick={() => handleEditClick('zilla', mockUserData.zilla)}
                    />
                </div>

                <div className="flex gap-12  pb-4 pt-2 border-b  items-center">
                    <div>
                        <span className="block text-sm text-primary font-medium ">Upozilla</span>
                        <span className="text-lg ">{mockUserData.upozilla}</span>
                    </div>
                    <FaEdit
                        className="text-primary  cursor-pointer"
                        onClick={() => handleEditClick('upozilla', mockUserData.upozilla)}
                    />
                </div>

                <div className="flex gap-12 pt-2 pb-4 border-b  items-center">
                    <div>
                        <span className="block text-sm text-primary font-medium ">District</span>
                        <span className="text-lg ">{mockUserData.district}</span>
                    </div>
                    <FaEdit
                        className="text-primary cursor-pointer"
                        onClick={() => handleEditClick('district', mockUserData.district)}
                    />
                </div>
            </div>

            {/* Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Edit {selectedField}</h2>
                        <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                        />
                        <div className="flex justify-end space-x-4 mt-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-primary text-white px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
