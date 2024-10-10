import { Link, useLocation, useNavigate } from "react-router-dom";
import { locationData } from "../../../public/locationData";
import { useState } from "react";
import background from '../../../public/asset/background.jpg'
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const AgencyInfo = () => {
    const [agencyId, setAgencyId] = useState(1); 

    const [selectedDivision, setSelectedDivision] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [districts, setDistricts] = useState([]);
    const [upazillas, setUpazillas] = useState([]);
    const location = useLocation()
    const agencyEmail = location.state?.email;
    // console.log(agencyEmail)
    const navigate = useNavigate();

    const handleDivisionChange = (e) => {
        const division = e.target.value;
        setSelectedDivision(division);
        setSelectedDistrict(''); 
        setUpazillas([]); 
        setDistricts(Object.keys(locationData[division] || {}));
    };

    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        setUpazillas(locationData[selectedDivision][district] || []);
    };


   
    
    // let agencyId = 1;
    const handleAgency = async (e) => {
        e.preventDefault()
        const form = e.target;
        const agencyName = form.name.value;
        const transportLicenseNumber = form.transportNumber.value;
        const insuranceLicenseNumber = form.insuranceLicenceNumber.value; 
        const numberOfVehicles = parseInt(form.numberOfVehicles.value);
        const division = form.division.value;
        const district = form.district.value;
        const upazilla = form.upazilla.value;
        const area = form.localAddress.value;
        const businessRegNumber= form.regNumber.value;
        const taxIdentificationNumber = form.identificationNumber.value;
        const agency_id = `AG${agencyId}`;
        setAgencyId(agencyId + 1);
        
        const agencyAddress = {
            division,
            district,
            upazilla,
            area
        }



        const info = { 
            agencyName, agencyEmail, agencyAddress, businessRegNumber, 
            taxIdentificationNumber, 
            transportLicenseNumber,
            insuranceLicenseNumber,
            numberOfVehicles, agency_id };

        console.log(info)
        try {
            await mutateAsync(info)
           

        }
        catch (err) {
            console.log(err)
        }


    }


    const { mutateAsync } = useMutation({
        mutationFn: async (agencyData) => {
            const { data } = await axios.post(`https://go-wheels-server.vercel.app/api/agencyRoute/agencyInfo`, agencyData)
            return data
        },
        onSuccess: () => {
            console.log('data saved successfully')
            navigate('/join/addCarInfo' ,{ state: { agencyEmail } });
            // toast.success(' data added successfully')
            

        }

    })




    return (
        <div>
            <div style={{ backgroundImage: `url(${background})` }} className="h-[89vh] bg-center bg-cover bg-no-repeat pt-10">
                <div className='lg:w-[40vw] bg-transparent lg:bg-[#84dede33] mx-auto px-10 rounded-lg'>
                    <div className='text-center mx-auto pt-5'>
                        <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather mb-10'>GoWheels</h1>
                    </div>
                    <div className='text-center mx-auto pt-5' >
                        <h1 className="text-3xl lg:text-3xl font-bold text-white font-merriweather mb-10">Agency Information</h1>
                    </div>
                    <section className='mt-3'>
                        <form
                            onSubmit={handleAgency}
                            className='font-nunito'>
                            <div className='flex gap-5'>
                                <input
                                    type="text"
                                    name="name"
                                    id="firstName"
                                    className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                                    placeholder='Agency Name'
                                    required />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    readOnly
                                    className='outline-none placeholder-gray-900  w-full rounded py-1 lg:py-2 px-2 text-red-600'
                                    placeholder={agencyEmail}
                                    required />

                                <input
                                    type="text"
                                    name="transportNumber"
                                    id="transportNumber"
                                    className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                                    placeholder='Transport Lincence Number'
                                    onInput={(e) => e.target.value = e.target.value.toUpperCase()}
                                    required />

                            </div>

                            <div className='mt-3 relative space-y-3'>

                                <div className='flex gap-10'>
                                    <input
                                        type="text"
                                        name="insuranceLicenceNumber"
                                        id="insuranceLicenceNumber"
                                        className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                                        placeholder='Insurance Licence Number'
                                        required />
                                    <input
                                        type="text"
                                        name="regNumber"
                                        id="regNumber"
                                        className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                                        placeholder='Business Reg Number'
                                        required />
                                </div>
                                <input
                                    type="text"
                                    name="identificationNumber"
                                    id="identificationNumber"
                                    className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                                    placeholder='Tax Identification Number'
                                    required />
                                <input
                                    type="number"
                                    name="numberOfVehicles"
                                    id="numberOfVehicles"
                                    className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                                    placeholder='Number of vehicles'
                                    required />
                                <h3 className='text-lg font-semibold text-white'>Address:</h3>
                                <div className='flex justify-between'>
                                    <select name="division" onChange={handleDivisionChange}
                                        id="division"
                                        className='outline-none w-[30%] rounded py-1 lg:py-2 px-2 text-secondary'
                                        required>
                                        <option defaultChecked className='text-gray-400'>Division</option>
                                        {Object.keys(locationData).map((division) => (
                                            <option key={division} value={division}>
                                                {division}
                                            </option>
                                        ))}
                                    </select>
                                    {districts && (<select name="district" onChange={handleDistrictChange}
                                        id="district"
                                        className='outline-none w-[33%] rounded py-1 lg:py-2 px-2 text-secondary'
                                        required>
                                        <option defaultChecked className='text-gray-400'>District</option>
                                        {districts.map((district) => (
                                            <option key={district}>{district}</option>
                                        ))}
                                    </select>
                                    )}
                                    {upazillas && (
                                        <select
                                            name='upazilla'
                                            id='upazilla'
                                            className='outline-none w-[33%] rounded py-1 lg:py-2 px-2 text-secondary'
                                            required>
                                            <option value="">Upazilla</option>
                                            {upazillas.map((upazilla) => (
                                                <option
                                                    key={upazilla}
                                                    value={upazilla}>
                                                    {upazilla}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="localAddress"
                                        id="localAddress"
                                        className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                                        placeholder='Enter House/road no'
                                        required />
                                </div>
                            </div>
                            <div className='pb-10 mt-5 flex justify-between'>
                                <Link
                                    to={'/join/agencyRegister'}
                                    className='bg-primary text-white rounded py-1 px-2 lg:px-4 font-semibold text-lg lg:text-xl'>Back</Link>
                                <button className='bg-primary text-white rounded py-1 px-2 lg:px-4 font-semibold text-lg lg:text-xl'>Next</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AgencyInfo;