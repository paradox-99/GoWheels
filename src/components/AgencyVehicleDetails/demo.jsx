import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import loaderImage from "../../../public/logo.gif";

const AgencyVehicleDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // ---- QUERY TO FETCH DATA ----
  const { data: vehicles = [] } = useQuery({
    queryKey: ["vehicles", user?.userEmail],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/agencyRoute/agency/vehicleInfo/${user?.userEmail}`
      );
      console.log(data);
      return data; // Return the data to be used for pagination
    },
  });

  //   HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      // Send the updated user data to the backend
      const updatedVehicleData = Object.fromEntries(formData.entries());
      //   await mutateAsync(updatedVehicleData);
      console.log(updatedVehicleData);

      alert("Vehicle updated successfully!");
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Failed to update vehicle information: " + error.message);
    }
  };
  if (!vehicles) {
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
      {/* IMAGE */}
      {/* <section className="bg-zinc-50  px-[6rem] lf:w-2/5 overflow-hidden">
        <div className=" mx-auto h-svh flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto">
            <a href="#_">
              <img
                src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&h=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-48 w-48 object-cover hover:scale-150 transform origin-bottom" // Adjusted size
                alt="#_"
              />
            </a>
          </div>
        </div>
      </section> */}
      {/* ------------ */}

      {/* INFORMATION */}
      <section className="w-full my-auto dark:bg-gray-900">
        <div className="lg:w-[100%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div className="">
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                Update Vehicle Info
              </h1>

              {/* FORM--------------------------------- */}

              {vehicles.map((vehicle, index) => (
                <form key={vehicle.licenseNumber} onSubmit={handleSubmit}>
                  <div className="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                    <div className="mx-auto flex justify-center h-[20rem]  bg-no-repeat"></div>
                    <div className="flex justify-end">
                      <input
                        type="file"
                        name="profile"
                        id={`upload_cover_${index}`}
                        hidden
                        required
                      />

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
                  {/* <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
   <div className="w-full  mb-4 mt-6">
     <label className="mb-2 dark:text-gray-300">
       Seat Name
     </label>
     <input
       type="text"
       id="licenseNumber"
       name="licenseNumber"
       placeholder="License Number"
       className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
       placeholder="First Name"
     />
   </div>
   <div className="w-full  mb-4 lg:mt-6">
     <label className=" dark:text-gray-300">Last Name</label>
     <input
       type="text"
       className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
       placeholder="Last Name"
     />
   </div>
 </div>

 <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
   <div className="w-full">
     <h3 className="dark:text-gray-300 mb-2">Sex</h3>
     <select className="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800">
       <option disabled value="">
         Select Sex
       </option>
       <option value="Male">Male</option>
       <option value="Female">Female</option>
     </select>
   </div>
   <div className="w-full">
     <h3 className="dark:text-gray-300 mb-2">Date Of Birth</h3>
     <input
       type="date"
       className="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
     />
   </div>
 </div> */}

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
                  {/* --------- */}
                  {/* [[[[[[[[[[[[[]]]]]]]]]]]]] */}
                  <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                    <button type="submit" className="w-full p-4">
                      Submit
                    </button>
                  </div>
                </form>
              ))}

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
