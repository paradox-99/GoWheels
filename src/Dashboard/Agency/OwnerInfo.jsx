// import { useParams } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useDesignation from "../../hooks/useDesignation";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const OwnerInfo = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    
    // Fetch user info
    const { userInfo } = useDesignation();

    const email = userInfo ? userInfo.userEmail : null;

    // Update agency owner info
    const mutation = useMutation({
        mutationFn: async (updateAgencyOwnerInfo) => {
            const { data } = await axiosSecure.put(`/agencyRoute/agency/owner/updateAgencyOwnerInfo/${email}`, updateAgencyOwnerInfo);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['owner', email]);
            alert('Owner information updated successfully!');
        },
        onError: (error) => {
            alert(`Failed to update owner information: ${error.message}`);
        },
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target); // Collect form data
        const updatedOwnerData = Object.fromEntries(formData.entries());

        mutation.mutate(updatedOwnerData); // Trigger the mutation with updated data
    };

    if (!userInfo) {
        return <div>Loading the data...</div>; // Show loading state until userInfo is available
    }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-black mb-6">
        Update Owner Information
      </h1>

      <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50">
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
              defaultValue={userInfo.firstName}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              defaultValue={userInfo.lastName}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
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
              defaultValue={userInfo.phone || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>

          <div>
            <input
              type="text"
              id="nid"
              name="nid"
              placeholder="Nid"
              defaultValue={userInfo.nid || ""} // Use nid directly
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>
        </div>

        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              id="dob"
              name="dob"
              placeholder="Date Of Birth"
              defaultValue={userInfo.dateOfBirth || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>

          <div>
            <input
              type="text"
              id="accountStatus"
              name="accountStatus"
              placeholder="Account status"
              defaultValue={userInfo.accountStatus || ""} // Use nid directly
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
              disabled
            />
          </div>
        </div>

        <div className="p-2">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            defaultValue={userInfo.userEmail}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
            style={{ backgroundColor: "#f6f6f6" }}
          />
        </div>

        {/* address */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="font-bold" htmlFor="">
              District
            </label>

            <input
              type="text"
              id="district"
              name="district"
              placeholder="district"
              defaultValue={userInfo?.userAddress?.district || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>

          <div>
            <label className="font-bold" htmlFor="">
              Division
            </label>
            <input
              type="text"
              id="division"
              name="division"
              placeholder="division"
              defaultValue={userInfo?.userAddress?.division || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>
          <div>
            <label className="font-bold" htmlFor="">
              Upazilla
            </label>

            <input
              type="text"
              id="upazilla"
              name="upazilla"
              placeholder="upazilla"
              defaultValue={userInfo?.userAddress?.upazilla || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>
        </div>

        {/* password */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="New password"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>

          <div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>
        </div>

        {/* agency information----------- */}

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

export default OwnerInfo;
