import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {locationData} from '../../../public/locationData.js'
// zipcode



const SignupPartTwo = () => {

    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [districts, setDistricts] = useState([]);
    const [upazillas, setUpazillas] = useState([]);
    const navigate = useNavigate();

    const handleDivisionChange = (e) => {
        const division = e.target.value;
        setSelectedDivision(division);
        setSelectedDistrict(''); // Reset district on division change
        setUpazillas([]); // Reset upazillas on division change
        setDistricts(Object.keys(locationData[division] || {}));
    };

    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        setUpazillas(locationData[selectedDivision][district] || []);
    };

    const handleJoin = (e) => {
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const gender = form.gender.value;
        const division = form.division.value;
        const district = form.district.value;
        const upazilla = form.upazilla.value;
        const localAddress = form.localAddress.value;
        const dateOfBirth = e.target.birthDay.value;

        
        const info = { firstName, lastName, email, phone, gender, division, district, upazilla, localAddress, dateOfBirth };
        console.log(info)
        navigate('/join/signUpPartThree', { state: { info } });
    }

    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg'>
            <div className='text-center mx-auto pt-5'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather mb-10'>GoWheels</h1>
            </div>
            <section className='mt-3'>
                <form
                    onSubmit={handleJoin}
                    className='font-nunito'>
                    <div className='flex gap-10'>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='First Name'
                            required />
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='Last Name'
                            required />
                    </div>

                    <div className='mt-3 relative space-y-3'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='Email'
                            required />
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='Phone number'
                            required />
                        <div className='flex justify-between items-center'>
                            <select
                                name="gender"
                                id="gender"
                                className='outline-none w-[45%] rounded py-1 lg:py-2 px-2 text-secondary'
                                required>
                                <option defaultChecked className='text-gray-400'>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                            <input
                                type="date"
                                name="birthDay"
                                id="birthDay"
                                placeholder='Birth date'
                                className='w-[45%] outline-none rounded py-1 lg:py-2 px-2 text-secondary' />
                        </div>
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
                            to={'/join/register-new'}
                            className='bg-primary text-white rounded py-1 px-2 lg:px-4 font-semibold text-lg lg:text-xl'>Back</Link>
                        <button className='bg-primary text-white rounded py-1 px-2 lg:px-4 font-semibold text-lg lg:text-xl'>Next</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SignupPartTwo;