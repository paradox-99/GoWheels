import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';
import loaderEliment from '../../../public/logo.gif';
import GoogleButton from '../../components/GoogleButton';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { userLogin, setUser, user} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user && loading) {
            navigate('/');
        }
    }, [loading, navigate, user,]);

    const handleLogin = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            setLoading(true)
            const result = await userLogin(email, password);
            setUser(result.user)
            toast.success("successfully logged in")
            navigate(location?.state ? location.state : '/')
        }
        catch (error) {
            setLoading(false)
            console.log(error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "invalid email or password",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }


    if (loading) {
        return (
            <div className='flex justify-center'>
                <img className='mx-auto' src={loaderEliment} alt="loading" />
            </div>
        );
    }

    return (
        <div>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            {
                !user ? <>
                    <div className='lg:w-[60vw] xl:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto md:px-10 rounded-lg'>
                        <div className='text-center mx-auto md:pt-5'>
                            <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
                            <h1 className='text-2xl lg:text-3xl mt-5 md:mt-8 font-bold text-[#fdfefe] font-merriweather'>Sign in to your account</h1>
                        </div>
                        <section className='mt-3'>
                            <form
                                onSubmit={handleLogin}
                                className='font-nunito flex justify-center items-center flex-col w-full px-4'>
                                <div className='w-full md:w-1/2 lg:w-2/3'>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className='border-[1px] border-secondary outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary' placeholder='Enter your email address'
                                        required />

                                    <div className='mt-3 relative'>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            className='border-[1px] border-secondary outline-none w-full rounded py-1 lg:py-2 px-2 text-secondary' placeholder='Enter your password'
                                            required />
                                        <span
                                            className='absolute top-2 lg:top-3 right-3 text-xl'
                                            onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}
                                        </span>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center mt-3 w-full  md:w-1/2 lg:w-2/3'>
                                    <div>
                                        <div className='space-x-2 flex items-center text-[#fdfefe] '>
                                            <label htmlFor="checkbox">Remember me</label>
                                            <input type="checkbox" name="yeas" id="yes" />
                                        </div>
                                        <div>
                                            <Link className='lg:text-lg text-primary font-nunito font-semibold'>Forgot Password ?</Link>
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            className='bg-primary px-3 py-1 rounded text-white font-semibold cursor-pointer text-lg'
                                            type="submit"
                                            value="Submit" />
                                    </div>
                                </div>
                            </form>
                        </section>
                        <section className='mt-3 pb-5'>
                            <div className='flex justify-center items-center space-x-2 font-nunito'>
                                <h1 className='text-lg lg:text-xl font-medium lg:font-semibold'>New to this site ?</h1>
                                <Link to='/join/signUpOne' className='text-xl lg:text-2xl font-semibold text-primary'>Join Now</Link>
                            </div>
                            <div className='mt-2 flex justify-center items-center'>
                                <GoogleButton></GoogleButton>
                            </div>
                        </section>
                    </div>
                </> : <>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='mx-auto' src={loaderEliment} alt="loading" />
                    </div>
                </>
            }
        </div>
    );
};

export default SignIn;