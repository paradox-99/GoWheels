import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Availabledriver = ({ driver, isSelected, onSelect, handleConfirm }) => {
    const { firstName, lastName, image, gender, userEmail, dateOfBirth, phone, userAddress } = driver || {};

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

    return (
        <div className={`p-8 sm:space-x-6 dark:text-gray-800 cursor-pointer transition-colors duration-300 ${isSelected ? 'bg-orange-200' : 'dark:bg-gray-200'}`}
            onClick={onSelect} // Handle card click to toggle background color
        >
            <div className="p-4 sm:flex sm:space-x-6 dark:bg-gray-200 dark:text-gray-800">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img
                        src={image}
                        alt=""
                        className="object-cover object-center w-full h-full rounded dark:bg-gray-500 transition-transform duration-400 ease-in-out transform hover:scale-110"
                    />
                </div>
                <div className="flex relative flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{firstName} {lastName}</h2>
                        <span className="text-sm dark:text-gray-600">Gender: {gender}</span>
                        <span className="dark:text-gray-600">Age: {age}</span>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            {/* Email Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            <span className="dark:text-gray-600">Email: {userEmail}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            {/* Phone Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phone number" className="w-4 h-4">
                                <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                            </svg>
                            <span className="dark:text-gray-600">Phone: {phone}</span>
                        </span>
                    </div>
                </div>
            </div>
            <p className="text-end">{userAddress.division}, {userAddress.district}, {userAddress.upazilla}</p>

            {/* Confirm Button: Only show when this driver is selected */}
            {isSelected && (
                <button
                    onClick={handleConfirm}  // Navigate to booking page on confirm
                    className="mt-3 px-4 py-2 bg-primary text-white rounded"
                >
                    Confirm
                </button>
            )}
        </div>
    );
};

export default Availabledriver;
