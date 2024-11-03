import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { locationData } from '../../../public/locationData';
import UseAuth from "../../hooks/UseAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import loaderEliment from '../../../public/logo.gif';
import useDesignation from "../../hooks/useDesignation";
import toast from "react-hot-toast";
import { calculateAge } from "../../api/utilities";
import { Helmet } from "react-helmet-async";

const GoogleLogin = () => {


    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [districts, setDistricts] = useState([]);
    const [upazillas, setUpazillas] = useState([]);
    const ageRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const { user, setUser, updateUserProfile, loader, setLoader } = UseAuth() || {};
    const { userInfo } = useDesignation();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        if ((!user && !loader) || userInfo.nid) {
            navigate('/join');
        }
    }, [loader, navigate, user, userInfo.nid]);

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

    const {
        userEmail,
        firstName,
        lastName,
        image,
    } = location.state?.userInfo || {}

    const handleJoin = async (e) => {
        e.preventDefault()
        const form = e.target;
        const phone = form.phone.value;
        const nid = form.nationalId.value
        const gender = form.gender.value;
        const division = form.division.value;
        const district = form.district.value;
        const upazilla = form.upazilla.value;
        const userAddress = { division, district, upazilla };
        const localAddress = form.localAddress.value;
        const dateOfBirth = form.birthDay.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const fullName = `${firstName} ${lastName}`;
        const dobValue = ageRef.current.value;

        const phoneRegex = /^\+?[0-9]{13}$/;
        const nidRegex = /^\+?[0-9]{8,12}$/;

        if (!phoneRegex.test(phone)) {
            toast.error('please enter a valid phone number')
            return
        }
 
        if (!nidRegex.test(nid)) {
            toast.error('please enter a valid nid number')
            return
        }

        const age = calculateAge(dobValue);

        if (age < 18) {
            toast.error('your age is under 18, you are not permited to register here')
            return
        }

        try {

            const { data: checkingData } = await axiosPublic.get(`/usersRoute/check-user`, {
                params: {
                    phone,
                    nid
                }
            });

            if (checkingData.phoneExists && checkingData.nidExists) {
                toast.error('This phone number and NID are already used');
                return;
            }

            else if (checkingData.phoneExists) {
                toast.error('This phone number is already used');
                return;
            }

            else if (checkingData.nidExists) {
                toast.error('This NID number is already used');
                return;
            }


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
                image,
            }


            setLoader(true)
            await updateUserProfile(fullName, image);
            setUser({ ...user, displayName: fullName, photoURL: image });

            const { data } = await axiosPublic.put(`/usersRoute/user/${userEmail}`, userInfo)

            if (data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Info updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/join/otpRoute', {
                    state: {
                        userInfo,
                        from: '/join/login-Info',
                    }
                });
            }
        }
        catch (error) {
            setLoader(false)
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }


    if (loader) {
        return (
            <div className='flex justify-center'>
                <img className='mx-auto' src={loaderEliment} alt="loading" />
            </div>
        );
    }


    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg'>
            <Helmet>
                <title>Login || Google</title>
            </Helmet>
            <div className='text-center mx-auto pt-5'>
                <h1 className='text-2xl lg:text-4xl font-bold text-primary font-merriweather mb-5'>GoWheels</h1>
            </div>
            <section className='mt-3'>
                <form
                    onSubmit={handleJoin}
                    className='font-nunito'>
                    <div className='flex gap-10'>
                        <input
                            type="text"
                            name="firstName"
                            defaultValue={firstName}
                            id="firstName"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='First Name'
                            required />
                        <input
                            type="text"
                            name="lastName"
                            defaultValue={lastName}
                            id="lastName"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='Last Name'
                            required />
                    </div>

                    <div className='mt-3 relative space-y-3'>
                        <input
                            type="email"
                            name="email"
                            defaultValue={userEmail}
                            id="email"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='Email'
                            required />
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='Phone number'
                            defaultValue="+880"
                            required />
                        <input
                            type="text"
                            name="nationalId"
                            id="nationalId"
                            className='outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary'
                            placeholder='your NID number'
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
                                ref={ageRef}
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
                    <div className='pb-10 mt-5 flex justify-center'>
                        <button className='bg-primary text-white rounded py-1 px-2 lg:px-4 font-semibold text-lg lg:text-xl'>Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default GoogleLogin;