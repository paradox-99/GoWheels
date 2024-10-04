import { useState, useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify"; // Ensure you have toast installed
import { AuthContext } from "../../provider/AuthProvider";

const AddVehicleInfo = () => {
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext); // Access user context
  const axiosSecure = useAxiosSecure();
  
  // State for vehicle data
  const [vehicleData, setVehicleData] = useState({
    licenseNumber: '',
    avatar: null,
    seat: '',
    mileage: '',
    gear: '',
    fuel: '',
    rentalPrice: '',
    transmission: '',
    brand: '',
    model: '',
    buildYear: '',
    expireDate: '',
    fitnessCertificate: '',
    issuingAuthority: '',
    insuranceNumber: '',
    insurancePeriod: '',
    insuranceDetails: '',
    ownerId: user?.id || '', // Assuming you have user ID
  });

  // TANSTACK QUERY FOR POST THE DATA
  const { mutateAsync } = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosSecure.post('/agencyRoute/agency/addVehicle', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    },
    onSuccess: () => {
      console.log("Vehicle added successfully");
      alert("Vehicle added successfully"); // Notify the user
      queryClient.invalidateQueries(['vehicles']); // Invalidate and refetch the vehicles query
    },
    onError: (error) => {
      console.error("Error adding vehicle:", error);
      toast.error("Failed to add vehicle"); // Notify the user of error
    },
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };

  // Handle file input change for avatar
  const handleFileChange = (e) => {
    setVehicleData({ ...vehicleData, avatar: e.target.files[0] });
  };

  // HANDLE FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('licenseNumber', vehicleData.licenseNumber);
    formData.append('avatar', vehicleData.avatar); // If using a file upload
    formData.append('seat', vehicleData.seat);
    formData.append('mileage', vehicleData.mileage);
    // Append other fields similarly...

    try {
        await mutateAsync(formData); 
    } catch (error) {
        console.error("Error while adding vehicle:", error);
    }
};



    return (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-[black] mb-6">Add Vehicle Information</h1>
  
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="p-2">
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              placeholder="License Number"

              value={vehicleData.licenseNumber}  // Bind value to state
            onChange={handleInputChange} 
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: '#f6f6f6' }   } 
            />
          </div>
  
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
  
          <div>
            <label className="w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50">
              <div className="text-center">
                <div className="mb-2">
                  <button
                    type="button"
                    className="bg-[#ff4c30] hover:bg-[#161616] text-white rounded-full py-2 px-4"
                  >
                    Select your car photo from the computer
                  </button>
                </div>
                <p className="text-gray-500">or drag photo here</p>
                <p className="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
              </div>
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleFileChange}
              />
            </label>
          </div>
          </div>
  
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="seat"
                name="seat"
                placeholder="Seat"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
  
            <div>
              <input
                type="text"
                id="mileage"
                name="mileage"
                placeholder="Mileage"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
          </div>

          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="gear"
                name="gear"
                placeholder="Gear"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
  
            <div>
              <input
                type="text"
                id="fuel"
                name="fuel"
                placeholder="Fuel"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
          </div>

          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="rentalPrice"
                name="rentalPrice"
                placeholder="Rental Price"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
  
            <div>
              <input
                type="text"
                id="transmission"
                name="transmission"
                placeholder="Transmission"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
          </div>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
  
            <div>
              <input
                type="text"
                id="model"
                name="model"
                placeholder="Model"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
          </div>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="buildYear"
                name="buildYear"
                placeholder="Build Year"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
  
            <div>
              <input
                type="text"
                id="expireDate"
                name="expireDate"
                placeholder="Expire Date"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
          </div>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="fitnessCertificate"
                name="fitnessCertificate"
                placeholder="Fitness Certificate"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
  
            <div>
              <input
                type="text"
                id="issuingAuthority"
                name="issuingAuthority"
                placeholder="Issuing Authority"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
          </div>


          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="insuranceNumber"
                name="insuranceNumber"
                placeholder="Insurance Number"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
  
            <div>
              <input
                type="text"
                id="insurancePeriod"
                name="insurancePeriod"
                placeholder="Insurance Period"
                onChange={handleInputChange}

                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
          </div>
  
          
  
      
  
          <div>
            <textarea
              id="insuranceDetails"
              name="insuranceDetails"
              rows="3"
              placeholder="Insurance Details"
              onChange={handleInputChange}

              className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: '#f6f6f6' }} // Corrected
            ></textarea>
          </div>
  
          <div className="col-span-full mt-6 p-2">
            <button
              type="submit"
              className="block w-full bg-[#ff4c30] hover:bg-[#161616] text-white font-bold py-3 px-4 rounded-full"
            >
              Add Your Vehicle Information
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddVehicleInfo;