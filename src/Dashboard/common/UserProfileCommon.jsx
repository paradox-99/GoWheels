import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import loaderImage from "../../../public/logo.gif";
import { locationData } from "../../../public/locationData.js";

// import { FiUpload } from "react-icons/fi";
import { imageUpload } from "../../api/utilities/index.js";
import { Helmet } from "react-helmet-async";

const UserProfileCommon = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  // State variables for division, district, and dropdown data
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [upazillas, setUpazillas] = useState([]);
  //  -------------------------image upload
  const [imageText, setImageText] = useState("image name.png");
  const [imagePreview, setImagePreview] = useState(null);
  const inputRef = useRef();
  const [dragActive, setDragActive] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  console.log(imagePreview);

  // ------------------------------------

  // Function to handle division change
  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setSelectedDistrict("");
    setUpazillas([]);

    if (locationData[division]) {
      setDistricts(Object.keys(locationData[division]));
    } else {
      setDistricts([]);
    }
  };

  // Function to handle district change
  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);

    // Populate upazillas for the selected district
    if (
      locationData[selectedDivision] &&
      locationData[selectedDivision][district]
    ) {
      setUpazillas(locationData[selectedDivision][district]);
    } else {
      setUpazillas([]);
    }
  };

  // --------------------------------------
  // Fetch users information from the backend
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/agencyRoute/agency/owner/${user?.email}`
      );
      return data;
    },
    enabled: !!user?.email,
  });

  // Pre-select division and district from fetched user data (if available)
  useEffect(() => {
    if (users?.userAddress?.division) {
      setSelectedDivision(users.userAddress.division);
      setDistricts(Object.keys(locationData[users.userAddress.division] || {}));
    }

    if (users?.userAddress?.district) {
      setSelectedDistrict(users.userAddress.district);
      setUpazillas(
        locationData[users.userAddress.division]?.[
        users.userAddress.district
        ] || []
      );
    }
  }, [users?.userAddress, locationData]);

  // Update agency user info mutation
  const { mutateAsync } = useMutation({
    mutationFn: async (updateUserInfo) => {
      const { data } = await axiosSecure.patch(
        `/agencyRoute/updateUserInfo/${user?.email}`,
        updateUserInfo
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users", user?.email]);
      alert("User information updated successfully!");
    },
    onError: (error) => {
      alert(`Failed to update user information: ${error.message}`);
    },
  });

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div>
          <img src={loaderImage} alt="Loading..." className="w-[150px]" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  //   ------------------------image
  const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name);
    setImageFile(image);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    setImageText(droppedFile.name);
    setImagePreview(URL.createObjectURL(droppedFile));
    setImageFile(droppedFile);
  };

  // ------------------------------

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const image = imageFile;

    // if (!image) {
    //   alert("Please select an image.");
    //   return;
    // }

    try {
      const uploadedImage = await imageUpload(image);
      console.log(uploadedImage);
      //   const imageUrl = uploadedImage.url;

      // Append image URL to form data
      formData.append("image", uploadedImage);

      // Send the updated user data to the backend
      const updatedUserData = Object.fromEntries(formData.entries());
      await mutateAsync(updatedUserData);
      console.log(updatedUserData);

      alert("User updated successfully!");
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Failed to update user information: " + error.message);
    }
  };

  if (!user) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div>
          <img src={loaderImage} alt="Loading..." className="w-[150px]" />
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>{users?.firstName} {users?.lastName} || Profile</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-black mb-6">
        Update users Information
      </h1>

      <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* IMAGE--------------------- */}
          <div>
            <label
              className="w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragLeave={handleDragLeave}
              style={{
                backgroundImage: `url(${imagePreview})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center">
                <div className="mb-2">
                  <button
                    type="button"
                    onClick={() => inputRef.current.click()}
                    className="bg-[#ff4c30] hover:bg-[#161616] text-white rounded-full py-2 px-4"
                  >
                    Select from the computer
                  </button>
                </div>
                <p className="text-gray-500">
                  {imagePreview ? "" : "Drag and Drop"}
                  or drag photo here
                </p>
                <p className="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
              </div>

              {imagePreview && (
                <div className="mt-2">
                  <h1>
                    {imageText.length > 15
                      ? imageText.split(".")[0].slice(0, 15) +
                      "..." +
                      imageText.split(".")[1]
                      : imageText}
                  </h1>
                </div>
              )}
            </label>

            <input
              onChange={(e) => handleImage(e.target.files[0])}
              type="file"
              name="image"
              id="image"
              hidden
              accept="image/*"
              ref={inputRef}
            />
          </div>
          {/* -------------------- */}


        </div>

        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              defaultValue={users?.firstName}
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
              defaultValue={users?.lastName}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>
        </div>

        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="phone"
              defaultValue={users?.phone || ""}
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
              defaultValue={users?.nid || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>
        </div>

        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="Date Of Birth"
              defaultValue={users?.dateOfBirth || ""}
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
              defaultValue={users?.accountStatus || ""}
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
            defaultValue={users?.userEmail}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
            style={{ backgroundColor: "#f6f6f6" }}
          />
        </div>

        {/* --------------------------- */}
        {/* Address fields */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="font-bold" htmlFor="division">
              Division
            </label>
            <select
              name="division"
              onChange={handleDivisionChange}
              id="division"
              className="outline-none w-[30%] rounded py-1 lg:py-2 px-2 text-secondary"
              value={selectedDivision}
              required
            >
              <option className="text-gray-400">Division</option>
              {Object.keys(locationData).map((division) => (
                <option key={division} value={division}>
                  {division}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold" htmlFor="district">
              District
            </label>
            {districts && (
              <select
                name="district"
                onChange={handleDistrictChange}
                id="district"
                className="outline-none w-[33%] rounded py-1 lg:py-2 px-2 text-secondary"
                value={selectedDistrict} // Use 'value' instead of 'defaultValue'
                required
              >
                <option className="text-gray-400">District</option>
                {districts.map((district) => (
                  <option key={district}>{district}</option>
                ))}
              </select>
            )}
          </div>

          <div>
            <label className="font-bold" htmlFor="upazilla">
              Upazilla
            </label>
            {upazillas && (
              <select
                name="upazilla"
                id="upazilla"
                className="outline-none w-[33%] rounded py-1 lg:py-2 px-2 text-secondary"
                value={users?.userAddress?.upazilla || ""}
                required
              >
                <option value="" disabled>
                  Upazilla
                </option>
                {upazillas.map((upazilla) => (
                  <option key={upazilla} value={upazilla}>
                    {upazilla}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* ---------------------------------------------------- */}

        {/* password */}
        {/* <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div> */}

        {/* agency information----------- */}

        <div className="col-span-full mt-6 p-2">
          <button
            type="submit"
            className="block w-full bg-[#ff4c30] hover:bg-[#161616] text-white font-bold py-3 px-4 rounded-full"
          >
            Update User Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileCommon;
