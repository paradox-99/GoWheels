import { useMutation } from "@tanstack/react-query";
// import loaderEliment from '../../../public/logo.gif';
import { useState } from "react";
// import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { IoEye, IoEyeOff } from "react-icons/io5";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import backgroundImage from '../../../public/asset/drive.avif'
import { imageUpload } from "../../api/utilities";
import { Helmet } from "react-helmet-async";

const DriverInfo = () => {
    // const {loader,} = UseAuth();
    // const [photoURL, setPhotoURL] = useState(null);
    const location = useLocation()
    const axiosPublic = useAxiosPublic()
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = UseAuth() || {}
    const {
        firstName, lastName, userEmail, phone, gender, photo, dateOfBirth, nid, district, division, upazilla, localAddress
    } = location.state?.info || {};

    console.log(photo)


    const handleDriver = async (e) => {
        e.preventDefault()
        const form = e.target;
        const driverEmail = form.email.value;
        const password = form.password.value;
        const drivingLicenceNumber = form.drivingLicenceNumber.value;
        const licenceExpireDate = form.expireDate.value;
        const yearOfExperience = parseInt(form.experience.value);

        const driverData = { driverEmail, drivingLicenceNumber, licenceExpireDate, yearOfExperience };

        const userAddress = { district, division, upazilla }
        const userInfo = {
            firstName,
            lastName,
            userEmail,
            phone,
            nid,
            gender,
            dateOfBirth,
            userAddress,
            localAddress,
            
        }
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        setErrorMessage('');

        if (password.length < 6) {
            setErrorMessage("Your password should be at least 6 character!")
            return
        }
        if (!regex.test(password)) {
            setErrorMessage('Password must contain at least one capital letter, one small letter, one number and one special character')
            return
        }



        try {

            const image = await imageUpload(photo);
            console.log(image)


            const userCreate = await createUser(driverEmail, password)
            console.log(userCreate)


            const fullName = `${firstName} ${lastName}`
            const updateProfile = await updateUserProfile(fullName, image)
            console.log(updateProfile)


            await mutateAsync(driverData)
            await saveUserData(userInfo)
            navigate('/join/driverOtp', { state: { userInfo } });



        }
        catch (err) {
            console.log(err)
        }


    }


    const { mutateAsync } = useMutation({
        mutationFn: async (driverData) => {
            const { data } = await axiosPublic.post(`/driverRoute/driverInfo`, driverData)
            return data
        },
        onSuccess: () => {
            console.log('data saved successfully')

            // toast.success(' data added successfully')

        }

    })


    const { mutateAsync: saveUserData } = useMutation({
        mutationFn: async (driverUser) => {
            const { data } = await axiosPublic.post(`/usersRoute/driverInfo`, driverUser)
            return data;
        },
        onSuccess: () => {
            console.log('data saved successfully')
            // toast.success(' data added successfully')
            navigate('/join/driverInfo', { });


        }

    })



    // if (loader) {
    //     return (
    //         <div className='flex justify-center'>
    //             <img className='mx-auto' src={loaderEliment} alt="loading" />
    //         </div>
    //     );
    // }




    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className='h-screen min-h-screen overflow-hidden bg-center bg-cover bg-no-repeat pt-10'>
            <Helmet>
                <title>Register || Driver Information</title>
            </Helmet>
            <div>
                <h1 className='text-3xl lg:text-3xl text-center mt-10 font-bold  font-merriweather mb-10'>Driver Information</h1>
                <div className="h-[89vh] flex flex-col-reverse lg:flex-row gap-44 justify-center bg-center bg-cover bg-no-repeat pt-10">
                    <div className='lg:w-[30vw] h-[44vh]  lg:bg-[#1f202033] mx-auto   bg-transparent   px-10 rounded-lg'>
                        <div className='text-center mx-auto '>
                        </div>
                        <div className='text-center mx-auto pt-5' >
                            <h1 className="text-xl lg:text-xl font-bold  font-merriweather lg:mt-0 mt-16 mb-10">Enter Information here</h1>
                        </div>
                        <section className='mt-3'>
                            <form
                                onSubmit={handleDriver}
                                className='font-nunito'>
                                <div className='mt-3 relative space-y-3'>

                                    <div className='flex gap-5'>
                                        <div className="w-full">
                                            <input
                                                type="text"
                                                name="drivingLicenceNumber"
                                                id="drivingLicenceNumber"
                                                className='outline-none border w-full rounded py-1 lg:py-2 px-2 text-secondary'
                                                placeholder='Driving Licence Number'
                                                onInput={(e) => e.target.value = e.target.value.toUpperCase()}
                                                required />
                                        </div>
                                        <div className="w-full relative">
                                            <div className="w-full relative">
                                                <input
                                                    type="date"
                                                    name="expireDate"
                                                    id="expireDate"
                                                    className="peer w-full border outline-none rounded py-2 px-2 text-secondary"
                                                    required
                                                />
                                                <label
                                                    htmlFor="expireDate"
                                                    className="absolute left-2 text-sm -top-3 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-red-600"
                                                >
                                                    Licence Expire Date
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='flex gap-5'>
                                        <input
                                            type="text"
                                            name="experience"
                                            id="experience"
                                            className='outline-none border w-full rounded py-1 lg:py-2 px-2 text-secondary'
                                            placeholder='Year of experience'
                                            required />

                                    </div>
                                    <div className='flex relative gap-5'>

                                        <div className="w-full">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                readOnly
                                                className='outline-none border placeholder-gray-900  w-full rounded py-1 lg:py-2 px-2 '
                                                value={userEmail}
                                                required />

                                        </div>
                                        <div className="w-full">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                id="password"
                                                className='outline-none border w-full rounded py-1 lg:py-2 px-2 text-secondary'
                                                placeholder='Password'
                                                required />
                                            <span
                                                className='absolute top-2 lg:top-3 right-3 text-xl'
                                                onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}
                                            </span>
                                            {errorMessage && <h1 className='text-red-500 text-xs  p-2 rounded-lg flex items-center'>{errorMessage}</h1>}
                                        </div>
                                    </div>


                                    {/* <div className='flex justify-between'>
                                        <select name="division" onChange={handleDivisionChange}
                                            id="division"
                                            className='outline-none border w-[30%] rounded py-1 lg:py-2 px-2 text-secondary'
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
                                            className='outline-none border w-[33%] rounded py-1 lg:py-2 px-2 text-secondary'
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
                                                className='outline-none border w-[33%] rounded py-1 lg:py-2 px-2 text-secondary'
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
                                    </div>  */}

                                </div>
                                <div className='pb-10 mt-5 flex justify-between'>
                                    <Link to={'/join/driverSignUp'}>
                                        <button className="relative inline-block px-4 py-2 font-medium group">
                                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-black"></span>
                                            <span className="relative text-black group-hover:text-white">Go Back</span>
                                        </button>
                                    </Link>
                                    <button className="relative inline-block px-4 py-2 font-medium group">
                                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-black"></span>
                                        <span className="relative text-black group-hover:text-white">Next</span>
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DriverInfo;