import { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Availabledriver from "./Availabledriver";

const DriverList = () => {
    const [searchDistrict, setSearchDistrict] = useState('');
    const [selectedDriver, setSelectedDriver] = useState(null);  // Store selected driver object
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();  // Initialize useNavigate
    const dateOfBirth = (selectedDriver?.dateOfBirth)

    const { data: driverData = [], isLoading } = useQuery({
        queryKey: ['driverData', searchDistrict],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/driverRoute/drivers`, {
                params: { district: searchDistrict }
            });
            return data;
        },
        enabled: true,
    });

    const handleSearchChange = (e) => {
        setSearchDistrict(e.target.value);
    };

    const handleDriverSelect = (driver) => {
        setSelectedDriver(driver);  // Store full driver object
    };


    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    const age = dateOfBirth ? calculateAge(dateOfBirth) : 'N/A';
    const cost = 500;

    // Function to navigate to booking page with selected driver data
    const handleConfirm = () => {
        if (selectedDriver) {
            navigate('/bookingInfo', { state: { driverInfo: selectedDriver, age, cost} });  // Navigate to booking page
        }
    };






    //  pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(6);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = driverData.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(driverData.length / usersPerPage);
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
            <div className=" mt-10 text-center">
                <h1 className="text-3xl">Choose a driver which you want to</h1>
                <p className='text-xl '>Click on the card select the driver</p>
            </div>

            {/* Search Input */}
            <div className='text-center'>
                <input
                    type="text"
                    placeholder="Search by district"
                    value={searchDistrict}
                    onChange={handleSearchChange}
                    className="border w-96 my-10 p-2 rounded mb-5"
                />
                <button className='border border-primary p-2 rounded-lg'>Search</button>
            </div>

            <div className="space-y-3 grid lg:grid-cols-2 mt-10 gap-10">
                {
                    isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        currentUsers.map((driver) => (
                            <Availabledriver
                                key={driver._id}
                                driver={driver}
                                isSelected={selectedDriver?._id === driver._id} // Check if the driver is selected
                                onSelect={() => handleDriverSelect(driver)} // Pass the full driver object to be selected
                                handleConfirm={handleConfirm}
                                selectedDriver={selectedDriver}
                            />
                        ))
                    )
                }
            </div>

            {/* Confirm Button: Only show when a driver is selected */}
            {/* {selectedDriver && (
                <button
                    onClick={handleConfirm}  // Navigate to booking page on confirm
                    className="mt-3 px-4 py-2 bg-primary text-white rounded"
                >
                    Confirm
                </button>
            )} */}

            {renderPagination()}
        </div>
    );
};

export default DriverList;
