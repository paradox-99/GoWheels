import { useMutation } from "@tanstack/react-query";
import useDesignation from "../../hooks/useDesignation";
import useAxiosSecure from "../../hooks/useAxiosSecure";


// image
import { imageUpload } from "../../api/utilities/index.js";
import { useRef, useState } from "react";
import toast from "react-hot-toast";


const AddVehicleInfo = () => {
  const { userInfo } = useDesignation();
  const axiosSecure = useAxiosSecure();


  //  -------------------------image upload
  const [imageText, setImageText] = useState("image name.png");
  const [imagePreview, setImagePreview] = useState(null);
  const inputRef = useRef();
  const [dragActive, setDragActive] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  console.log(imagePreview);
  // --------------------

  // TANSTACK QUERY FOR SAVING THE DATA TO DB
  const { mutateAsync } = useMutation({
    mutationFn: async (addVehicle) => {
      const { data } = await axiosSecure.post(
        "/agencyRoute/agency/addVehicle",
        addVehicle
      );
      return data;
    },
    onSuccess: () => {
      console.log("Vehicle data saved");
      // alert("Vehicle created successfully");
      // toast('Vehicle added successfully');
    },
  });


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

  // HANDLE FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = e.target;
    const licenseNumber = form.licenseNumber.value;
    const image = imageFile;
    const seat = form.seat.value;
    const mileage = form.mileage.value;
    const gear = form.gear.value;
    const fuel = form.fuel.value;
    const rentalPrice = form.rentalPrice.value;
    const brand = form.brand.value;
    const model = form.model.value;
    const buildYear = form.buildYear.value;
    const expireDate = form.expireDate.value;
    const fitnessCertificate = form.fitnessCertificate.value;
    const insuranceNumber = form.insuranceNumber.value;
    const insurancePeriod = form.insurancePeriod.value;
    const insuranceDetails = form.insuranceDetails.value;
    const airConditioning = form.airConditioning.value;
    const gps = form.gps.value;
    const bluetooth = form.bluetooth.value;
  
    try {
      const uploadedImage = await imageUpload(image);
  
      const addVehicleData = {
        licenseNumber,
        image: uploadedImage, 
        seat,
        mileage,
        gear,
        fuel,
        rentalPrice,
        brand,
        model,
        buildYear,
        expireDate,
        fitnessCertificate,
        insuranceNumber,
        insurancePeriod,
        insuranceDetails,
        additionalInfo: {
          airConditioning,
          gps,
          bluetooth,
        },
        agencyInfo: {
          email: userInfo?.userEmail,
          agencyId: userInfo?.agency_id,
        },
      };
  
      await mutateAsync(addVehicleData); 
      toast("Vehicle created successfully!");
  
    } catch (error) {
      console.error("Image upload failed:", error);
      toast("Failed to upload image or add vehicle: " + error.message);
    }
  };
  
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-[black] mb-6">
        Add Vehicle Information
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div className="p-2">
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            placeholder="License Number"
            className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
            style={{ backgroundColor: "#f6f6f6" }}
          />
        </div>

        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>

        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              id="seat"
              name="seat"
              placeholder="Seat"
              className="text-lg font-bold block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }}
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
            style={{ backgroundColor: "#f6f6f6" }} // Corrected
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
