import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import loaderImage from "../../../public/logo.gif";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
// image
import { imageUpload } from "../../api/utilities/index.js";
import toast from "react-hot-toast";

const AgencyVehicleDetails = () => {
  const axiosSecure = useAxiosSecure();
  //   const { user } = useContext(AuthContext);
  const { id } = useParams();
  const queryClient = useQueryClient();

  //  -------------------------image upload
  const [imageText, setImageText] = useState("image name.png");
  const [imagePreview, setImagePreview] = useState(null);
  const inputRef = useRef();
  const [dragActive, setDragActive] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  // ---- QUERY TO FETCH DATA ----
  const {
    data: vehicle,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["vehicle", id], // Use id in the queryKey
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/agencyRoute/agency/vehicle-details/${id}`
      );

      return data; // Return the vehicle data
    },
  });

  // Update vehicle info mutation
  const { mutateAsync } = useMutation({
    mutationFn: async (updateVehicleInfo) => {
      const { data } = await axiosSecure.patch(
        `/agencyRoute/agency/updateOneVehicleInfo/${id}`,
        updateVehicleInfo
      );
      return data;
    },
    onSuccess: () => {
      // Invalidate the correct query key to refetch vehicle data after update
      queryClient.invalidateQueries(["vehicles", id]);
      toast("Vehicle information updated successfully!");
    },
    onError: (error) => {
      toast(`Failed to update vehicle information: ${error.message}`);
    },
  });

  // Handle loading state
  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src={loaderImage} alt="Loading..." className="w-[150px]" />
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Error fetching vehicle details: {error.message}</p>
      </div>
    );
  }

  // Check if vehicle data is available
  if (!vehicle) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>No vehicle data available.</p>
      </div>
    );
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

  //   HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updatedVehicleData = Object.fromEntries(formData.entries());

    try {
      await mutateAsync(updatedVehicleData);
    //   toast("Vehicle updated successfully!");
    } catch (error) {
      toast("Failed to update vehicle information: " + error.message);
    }
  };

  if (!vehicle) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div>
          <img src={loaderImage} alt="Loading..." className="w-[150px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:flex border">
      {/* INFORMATION */}
      <section className="w-full my-auto dark:bg-gray-900">
        <div className="lg:w-[100%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div className="">
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                Update Vehicle Info
              </h1>

              {/* FORM--------------------------------- */}

              <form key={vehicle.licenseNumber} onSubmit={handleSubmit}>
                <div
                  className="w-full rounded-sm  bg-cover bg-center bg-no-repeat items-center"
                  style={{
                    backgroundImage: `url(${
                      vehicle.image || "https://fallback-image-url.com"
                    })`,
                  }}
                >
                  <div className="mx-auto flex justify-center h-[20rem]  bg-no-repeat"></div>
                  <div className="flex justify-end">
                    {/* <input
                      type="file"
                      name="profile"
                      id="upload_cover"
                      hidden
                      required
                    /> */}

                    <div className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                      <label className="inline-flex items-center gap-1 cursor-pointer">
                        <svg
                          data-slot="icon"
                          className="w-12 h-12 text-blue-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path>
                          <path d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path>
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>
                <h2 className="text-center mt-1 font-semibold dark:text-gray-300">
                  Upload Vehicle Image
                </h2>

                {/* previous----------- */}
                {/* -------------------------update */}
                <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id="seat"
                      name="seat"
                      placeholder="Seat"
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.seat}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="mileage"
                      name="mileage"
                      placeholder="Mileage"
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.mileage}
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
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.gear}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="fuel"
                      name="fuel"
                      placeholder="Fuel"
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.fuel}
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
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.rentalPrice}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="transmission"
                      name="transmission"
                      placeholder="Transmission"
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.transmission}
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
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.brand}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      placeholder="Model"
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.model}
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
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.buildYear}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="expireDate"
                      name="expireDate"
                      placeholder="Expire Date"
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.expireDate}
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
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.fitnessCertificate}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="issuingAuthority"
                      name="issuingAuthority"
                      placeholder="Issuing Authority"
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.issuingAuthority}
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
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.insuranceNumber}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="insurancePeriod"
                      name="insurancePeriod"
                      placeholder="Insurance Period"
                      className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                      style={{ backgroundColor: "#f6f6f6" }}
                      defaultValue={vehicle.insurancePeriod}
                    />
                  </div>
                </div>

                <div>
                  {/* ---------------------------additional info------------ */}

                  <div className="relative mb-8 rounded-lg border pt-8 mx-auto mt-2">
                    <div className=" absolute px-2 top-0 -left-[0.5] bg-[#ff4c30] rounded-tl-lg rounded-br-lg">
                      <h2 className="text-md font-semibold text-white p-2">
                        Additional Information
                      </h2>
                    </div>
                    <div className="p-2 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          id="airConditioning"
                          name="airConditioning"
                          placeholder="Air Conditioning"
                          className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                          style={{ backgroundColor: "#f6f6f6" }}
                          defaultValue={vehicle.additionalInfo.airConditioning}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          id="gps"
                          name="gps"
                          placeholder="Gps"
                          className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                          style={{ backgroundColor: "#f6f6f6" }}
                          defaultValue={vehicle.additionalInfo.gps}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          id="bluetooth"
                          name="bluetooth"
                          placeholder="Bluetooth"
                          className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
                          style={{ backgroundColor: "#f6f6f6" }}
                          defaultValue={vehicle.additionalInfo.bluetooth}
                        />
                      </div>
                    </div>
                  </div>
                  {/* ------------------------------------ */}
                  <textarea
                    id="insuranceDetails"
                    name="insuranceDetails"
                    rows="3"
                    placeholder="Insurance Details"
                    className="text-lg font-bold block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                    style={{ backgroundColor: "#f6f6f6" }}
                    defaultValue={vehicle.insuranceDetails}
                  ></textarea>
                </div>
                {/* --------- */}
                {/* [[[[[[[[[[[[[]]]]]]]]]]]]] */}
                <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                  <button type="submit" className="w-full p-4">
                    Update Vehicle Information
                  </button>
                </div>
              </form>

              {/* --------------------------- */}
            </div>
          </div>
        </div>
      </section>

      {/* -------------- */}
    </div>
  );
};

export default AgencyVehicleDetails;
