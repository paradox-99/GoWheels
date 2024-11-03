import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";


const CarInfo = () => {
    const [formCount, setFormCount] = useState(0);  
    const [formData, setFormData] = useState([]);
    const navigate = useNavigate()
    const location = useLocation()
    const agencyEmail = location.state?.agencyEmail;
    const [additionalInfo, setAdditionalInfo] = useState({
        air_conditioning: true,
        gps: true,
        bluetooth: true,
    });

    const handleDropdownChange = (e) => {
        const selectedValue = parseInt(e.target.value);
        setFormCount(selectedValue);
        setFormData(Array.from({ length: selectedValue}, () => ({})));
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newData = [...formData];
        newData[index] = { ...newData[index], [name]: value };
        setFormData(newData);
    };



    const handleAdditionalInfoChange = (event) => {
        const { name, value } = event.target;
        setAdditionalInfo((prev) => ({
            ...prev,
            [name]: value === "true", // Convert string "true"/"false" to boolean
        }));
    };



    const handleImageUpload = async (e, index) => {
        const file = e.target.files[0];
        const imageFormData = new FormData();
        imageFormData.append("image", file);

        try {
            const response = await fetch(
                `https://api.imgbb.com/1/upload?key=0873ad3ca7a49d847f0ce5628d0e79ee`,
                {
                    method: "POST",
                    body: imageFormData,
                }
            );

            const result = await response.json();
            const imageUrl = result.data.url;

            // Update formData with the uploaded image URL
            const newData = [...formData];
            newData[index] = { ...newData[index], photo: imageUrl }; // Store photo URL in 'photo' field
            setFormData(newData);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };



    const { mutateAsync } = useMutation({
        mutationFn: async (carData) => {
            const { data } = await axios.post(`https://go-wheels-server.vercel.app/api/carsRoute/vehilesInfo`, carData)
            return data
        },
        onSuccess: () => {
            console.log('data saved successfully')
            // toast.success(' data added successfully')
            navigate('/dashboard/agency-home');


        }


    })


    const handleSubmit = async (e) => {
        e.preventDefault();



        const vehicle_info = formData.map(car => {
            const startDate = car['insurance-coverage-start'];
            const endDate = car['insurance-coverage-end'];
            if (startDate && endDate) {
                car.insuranceCoveragePeriod = `${startDate} to ${endDate}`;
            }
            return {
                ...car,
                insurance_details: {
                    insurance_provider: e.target.insurance_details_provider.value,
                    coverage_type: e.target.insurance_details_coverage_type.value,
                    deductible: e.target.insurance_details_deductible.value,
                },
            };
        });



        const allVehilesInfo = {
            agencyEmail,
            vehicle_info,
            aditional_info: additionalInfo,
            agency_id: true,
            bookingStatus: true

        }

        console.log(allVehilesInfo)
        // console.log("Submitted Data:", data,adetional_info, {agency_id:'AG1'} , {bookingStatus:true});

        try {
            await mutateAsync(allVehilesInfo)

        } catch (error) {
            console.log('error here', error)
        }


        // setFormCount(0);     
        // setFormData('');
        // setSelectedValue("0")
    };
    return (
        <div>
            <Helmet>
                <title>Register || Agency</title>
            </Helmet>
            <div className='lg:w-[60vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg'>
                <form onSubmit={handleSubmit} className="p-5">
                    <div className='text-center mx-auto pt-5' >
                        <h1 className="text-3xl lg:text-3xl font-bold  font-merriweather mb-10">Add your Car Information</h1>
                    </div>
                    <div className="text-center">
                        <select
                            id="form-selector"
                            className="border border-primary rounded-md p-2 mb-5"
                            onChange={handleDropdownChange}
                            defaultValue="0"
                        >
                            <option value="0">Select your number of vehicle</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="">
                        <img
                            src="https://i.ibb.co.com/M9LSpjz/Spinny-Max-BMW-5-Series.webp"
                            className=" m-auto"
                        />
                    </div>

                    {/* Dynamically render the forms */}
                    {Array.from({ length: formCount }).map((_, index) => (
                        <div key={index} className=" mb-4 ">
                            <h3 className=" py-4 text-2xl text-center">Add Your Car -{index + 1}</h3>
                            {/* *** */}
                            <div className=" flex gap-10 mb-3">
                                <input
                                    type="text"
                                    name="brand"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border capitalize p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Brand Name"
                                />
                                <input
                                    type="text"
                                    name="modal"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 capitalize w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Model Name"
                                />
                            </div>
                            {/* **** */}
                            {/* *** */}
                            <div className=" flex gap-10 mb-3">
                                <input
                                    type="text"
                                    name="seat"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Seat"
                                />
                                <input
                                    type="text"
                                    name="mileage"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Mileage"
                                />
                            </div>
                            {/* **** */}
                            {/* *** */}
                            <div className=" flex gap-10 mb-3">
                                <input
                                    type="text"
                                    name="gear"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Gear"
                                />
                                <input
                                    type="text"
                                    name="fuel"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Fuel"
                                />
                            </div>
                            {/* **** */}

                            <div className="space-y-3">
                                <input
                                    type="text"
                                    name="price"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Rental Price"
                                />
                                <input
                                    type="text"
                                    name="transmission_type"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Transmission type"
                                />
                                <input
                                    type="text"
                                    name="build_year"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Build Year"
                                />
                            </div>
                            {/* **** */}
                            {/* *** */}
                            <div className=" flex mt-3 gap-10 mb-3">
                                <input
                                    type="text"
                                    name="license_number"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="License Number"
                                />
                                <input
                                    type="text"
                                    name="expire_date"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Expire Date"
                                />
                            </div>
                            {/* **** */}
                            {/* *** */}
                            <div className=" flex mt-3 gap-10 mb-3">
                                <input
                                    type="text"
                                    name="issue_authority"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Issuing Authority"
                                />
                                <input
                                    type="text"
                                    name="insurance_number"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                    placeholder="Insurance Number"
                                />
                            </div>
                            {/* **** */}
                            {/* *** */}
                            <div className=" flex justify-center mt-3 gap-10 mb-3">
                                <div className="w-full">
                                    <label>Insurance coverage start date</label>
                                    <input
                                        type="date"
                                        name="insurance_coverage_start"
                                        onChange={(e) => handleInputChange(index, e)}
                                        className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                        placeholder="Insurance coverage start date"
                                    />
                                </div>
                                <div className="w-full">
                                    <label>Insurance coverage end date</label>
                                    <input
                                        type="date"
                                        name="insurance_coverage_end"
                                        onChange={(e) => handleInputChange(index, e)}
                                        className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                        placeholder="Insurance coverage end date"
                                    />
                                </div>
                            </div>

                            <input
                                type="text"
                                name="fitness_certicate"

                                onChange={(e) => handleInputChange(index, e)}
                                className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                placeholder="Fitness certificate"
                            />
                            {/* **** */}

                            <div className="flex gap-10 mb-3 mt-4">
                                <select
                                    name="air_conditioning"
                                    value={additionalInfo.air_conditioning}
                                    onChange={handleAdditionalInfoChange}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                >
                                    <option value="true">Air Conditioning: Yes</option>
                                    <option value="false">Air Conditioning: No</option>
                                </select>

                                <select
                                    name="gps"
                                    value={additionalInfo.gps}
                                    onChange={handleAdditionalInfoChange}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                >
                                    <option value="true">GPS: Yes</option>
                                    <option value="false">GPS: No</option>
                                </select>

                                <select
                                    name="bluetooth"
                                    value={additionalInfo.bluetooth}
                                    onChange={handleAdditionalInfoChange}
                                    className="border p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                >
                                    <option value="true">Bluetooth: Yes</option>
                                    <option value="false">Bluetooth: No</option>
                                </select>
                            </div>

                            {/* &&&&&&&&&&&&&&&& */}


                            <div className="mb-4">
                                <h4 className="text-lg mb-2">Insurance Details</h4>

                                <input
                                    type="text"
                                    name="insurance_details_provider"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded mb-2"
                                    placeholder="Insurance Provider"
                                />

                                <input
                                    type="text"
                                    name="insurance_details_coverage_type"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded mb-2"
                                    placeholder="Coverage Type"
                                />

                                <input
                                    type="number"
                                    name="insurance_details_deductible"

                                    onChange={(e) => handleInputChange(index, e)}
                                    className="border p-2 w-full outline-none rounded mb-2"
                                    placeholder="Deductible"
                                />
                            </div>
                            {/* **&&&&&&&&&&&&&&&&&&&&&&&&&&&&* */}
                            <div className=" flex mt-3 gap-10 mb-3">

                                <input
                                    type="file"
                                    name="photo"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, index)}
                                    className="border-2 border-dashed border-primary p-2 w-full outline-none rounded py-1 lg:py-2 px-2 text-secondary"
                                />
                            </div>
                            {/* **** */}
                        </div>
                    ))}

                    <div className='pb-10 mt-5 flex justify-between'>
                        <Link
                            to={'/join/agencyRegister'}
                            className='bg-primary text-white rounded py-1 px-2 lg:px-4 font-semibold text-lg lg:text-xl'>Back</Link>
                        <button className='bg-primary text-white rounded py-1 px-2 lg:px-4 font-semibold text-lg lg:text-xl'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CarInfo;