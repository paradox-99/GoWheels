import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { FaGoogle } from 'react-icons/fa6';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';
import { googleLogin } from '../../api/utilities/index';
import loaderEliment from '../../../public/logo.gif';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { userLogin, setUser, loginWithGoogle, loader, setLoader } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const handleLogin = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            setLoader(true)
            const result = await userLogin(email, password);
            setUser(result.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(location?.state ? location.state : '/')
        }
        catch (error) {
            setLoader(false)
            console.log(error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "invalid email or password",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }

    const handleGoogleLogin = async () => {
        try {
            setLoader(true);
            const user = await googleLogin(loginWithGoogle);
            setUser(user);
            const userInfo = {
                userEmail: user?.email,
                userName: user?.displayName,
                image: user?.photoURL,
                userRole: "User",
                accountStatus: "Unverified"
            }
            const { data } = await axiosPublic.post('/usersRoute/user', userInfo);

            if (data.insertedId) {
                navigate('/login-Info', { state: { userInfo } });
            }
            else {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully login with google",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
        } catch (error) {
            setLoader(false);
            console.log(error);
        }
    }

    if (loader) {
        return <div className='fles justify-center'>
            <img className='mx-auto' src={loaderEliment} alt="" />
        </div>
    }

    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg'>
            <div className='text-center mx-auto pt-5'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
                <h1 className='text-2xl lg:text-3xl mt-8 font-bold text-[#fdfefe] font-merriweather'>Sign in to your account</h1>
            </div>
            <section className='mt-3'>
                <form
                    onSubmit={handleLogin}
                    className='font-nunito'>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className='border-[1px] border-secondary outline-none w-full rounded py-1 lg:py-2 px-6 text-secondary' placeholder='Enter your email address'
                            required />
                    </div>

                    <div className='mt-3 relative'>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className='border-[1px] border-secondary outline-none w-full rounded py-1 lg:py-2 px-6 text-secondary' placeholder='Enter your password'
                            required />
                        <span
                            className='absolute top-2 lg:top-3 right-3 text-xl'
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}
                        </span>
                    </div>

                    <div className='flex justify-between items-center mt-3'>
                        <div>
                            <div className='space-x-2 flex items-center text-[#fdfefe] '>
                                <label
                                    htmlFor="checkbox">
                                    Remember me</label>
                                <input
                                    type="checkbox"
                                    name="yeas"
                                    id="yes" />
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
                    <Link to={'/join/signUpPartOne'} className='text-xl lg:text-2xl font-semibold text-primary'>Join Now</Link>
                </div>
                <div className=' mt-2'>
                    <button
                        onClick={handleGoogleLogin}
                        className='py-1 lg:py-2 border lg:border-secondary rounded w-full flex items-center justify-center gap-2 text-xl font-nunito font-medium text-white'>
                        <FaGoogle className='text-3xl text-white font-merriweather' /><span className='font-semibold'> Continue with Google</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SignIn;