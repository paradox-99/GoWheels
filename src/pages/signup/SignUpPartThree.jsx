import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { MdOutlineError } from 'react-icons/md';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';
import loaderEliment from '../../../public/logo.gif';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';

const SignUpPartThree = () => {
    const { user } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const location = useLocation();
    const { setUser, updateUserProfile, createUser } = UseAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    const {
        firstName,
        lastName,
        email,
        phone,
        nid,
        gender,
        division,
        district,
        upazilla,
        localAddress,
        dateOfBirth,
    } = location.state?.info || {};

    useEffect(() => {
        if ((user && !loading) || (!email && !phone)) {
            navigate('/join');
        }
    }, [email, loading, navigate, phone, user])

    const handleJoin = async (e) => {
        e.preventDefault()
        const form = e.target;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const check = form.yes.checked;
        const fullName = `${firstName} ${lastName}`;
        const userEmail = email;
        const userAddress = { division, district, upazilla };
        const image = null

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
        if (password !== confirmPassword) {
            setErrorMessage('password and confirm password didn`t match!!')
            return
        }
        else if (!check) {
            setErrorMessage('you have to accept our terms and condition!!!')
            return
        }

        try {
            setLoading(true);
            const result = await createUser(userEmail, password);
            setUser(result.user)
            await updateUserProfile(fullName, image);
            const { data } = await axiosPublic.post('/usersRoute/user', userInfo);
            console.log(data)

            if (result.user && data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully joined",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/join/otpRoute', {
                    state: {
                        userInfo,
                        from: '/join/signUpThree',
                    }
                });
            }
        }
        catch (error) {
            console.log(error)
            setLoading(false);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }

    if (loading) {
        return <div className='flex justify-center'>
            <img className='mx-auto' src={loaderEliment} alt="" />
        </div>
    }

    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto p-10 rounded-lg'>
            <Helmet>
                <title>Sign Up || Password</title>
            </Helmet>
            <div className='text-center mx-auto'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
            </div>
            <section className='mt-8'>
                <form
                    onSubmit={handleJoin}
                    className='font-nunito'>
                    <div className='relative'>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className='border-[1px] border-secondary outline-none w-full rounded py-1 lg:py-2 px-3 text-secondary'
                            placeholder='Enter your password'
                            required />
                        <span
                            className='absolute top-2 lg:top-3 right-3 text-xl'
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}
                        </span>
                    </div>

                    <div className='mt-3 relative'>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            id="confirmPassword"
                            className='border-[1px] border-secondary outline-none w-full rounded py-1 lg:py-2 px-3 text-secondary' placeholder='Confirm your password'
                            required />
                        <span
                            className='absolute top-2 lg:top-3 right-3 text-xl'
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}
                        </span>
                    </div>

                    <div className='space-x-2 flex items-center text-[#fdfefe] mt-4'>

                        <input
                            type="checkbox"
                            name="yes"
                            id="yes"
                        />

                        <label htmlFor="yes">
                            Terms and Conditions</label>
                    </div>

                    <div>
                        {errorMessage && <h1 className='text-red-800 bg-red-400 p-2 rounded-lg flex items-center'>{errorMessage} <MdOutlineError className='text-2xl text-red-700 ' /></h1>}
                    </div>

                    <div className='flex justify-center items-center mt-3'>
                        <div>
                            <input
                                className='bg-primary px-3 py-1 rounded text-white font-semibold cursor-pointer text-lg'
                                type="submit"
                                value="Submit" />
                        </div>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default SignUpPartThree;