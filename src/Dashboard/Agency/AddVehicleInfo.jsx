import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const postDataToDB = async (newData) => {
  const response = await axios.post('/api/your-endpoint', newData);
  return response.data;
};

const AddVehicleInfo = () => {
  const queryClient = useQueryClient();

  // Define the mutation for posting data
  const mutation = useMutation(postDataToDB, {
    onSuccess: (data) => {
      // Invalidate and refetch queries that may be affected by this mutation
      queryClient.invalidateQueries(['vehicleData']); // Assuming you have a query for vehicle data
      console.log('Vehicle information posted successfully:', data);
    },
    onError: (error) => {
      console.error('Error posting vehicle information:', error);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newData = {
      licenseNumber: formData.get('licenseNumber'),
      avatar: formData.get('avatar'), // file upload
      seat: formData.get('seat'),
      mileage: formData.get('mileage'),
      gear: formData.get('gear'),
      fuel: formData.get('fuel'),
      rentalPrice: formData.get('rentalPrice'),
      transmission: formData.get('transmission'),
      brand: formData.get('brand'),
      model: formData.get('model'),
      buildYear: formData.get('buildYear'),
      expireDate: formData.get('expireDate'),
      fitnessCertificate: formData.get('fitnessCertificate'),
      issuingAuthority: formData.get('issuingAuthority'),
      insuranceNumber: formData.get('insuranceNumber'),
      insurancePeriod: formData.get('insurancePeriod'),
      insuranceDetails: formData.get('insuranceDetails'),
    };

    // Trigger the mutation to post data
    mutation.mutate(newData);
  };

    return (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-[black] mb-6">Add Vehicle Information</h1>
  
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="p-2">
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              placeholder="License Number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: '#f6f6f6' }} 
            />
          </div>
  
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
  
            <div>
              <label className=" w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50">
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
              </label>
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                className="sr-only"
              />
            </div>
          </div>
  
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="seat"
                name="seat"
                placeholder="Seat"
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