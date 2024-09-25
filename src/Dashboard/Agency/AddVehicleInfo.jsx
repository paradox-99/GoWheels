
const AddVehicleInfo = () => {
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-[black] mb-6">Add Vehicle Information</h1>
  
        <form className="grid grid-cols-1 gap-6">
          <div className="p-2">
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Username"
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
                      Select from the computer
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
                id="firstName"
                name="firstName"
                placeholder="First name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
  
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
          </div>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="Contact"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
  
            <div>
              <input
                type="text"
                id="identification"
                name="identification"
                placeholder="Identification"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
          </div>
  
          <div className="p-2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: '#f6f6f6' }} 
            />
          </div>
  
          <div className="p-2">
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              placeholder="Current password"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: '#f6f6f6' }} 
            />
          </div>
  
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="New password"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
  
            <div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirmation password"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: '#f6f6f6' }} 
              />
            </div>
          </div>
  
          <div className="col-span-full mt-6 p-2">
            <button
              type="submit"
              className="block w-full bg-[#ff4c30] hover:bg-[#161616] text-white font-bold py-3 px-4 rounded-full"
            >
              Update Owner Information
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddVehicleInfo;