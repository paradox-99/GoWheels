import { Link } from 'react-router-dom';

import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }


    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg'>
            <div className='text-center mx-auto pt-5'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
                <h1 className='text-2xl lg:text-4xl font-bold text-[#fdfefe] font-merriweather'>Sign in to your account</h1>
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
                            className='border-[1px] border-secondary outline-none w-full rounded-xl py-1 lg:py-2 px-6 text-secondary' placeholder='Enter your email address'
                            required />
                    </div>

                    <div className='mt-3 relative'>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className='border-[1px] border-secondary outline-none w-full rounded-xl py-1 lg:py-2 px-6 text-secondary' placeholder='Enter your password'
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
                                className='bg-primary px-3 py-1 rounded-xl text-white font-semibold cursor-pointer'
                                type="submit"
                                value="submit" />
                        </div>
                    </div>

                </form>
            </section>
            <section className='mt-3 pb-5'>
                <div className='flex justify-center items-center space-x-2 font-nunito'>
                    <h1 className='text-lg lg:text-xl font-medium lg:font-semibold text-[#fdfefe]'>New to this site ?</h1>
                    <Link to={'/join/register-new'} className='text-xl lg:text-2xl font-semibold text-primary'>Join Now</Link>
                </div>
                <div className=' mt-2'>
                    <button
                        className='py-1 lg:py-2 border lg:border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-medium'>
                        <FcGoogle className='text-3xl' /> Continue with Google</button>
                </div>
                <div className=' mt-2'>
                    <button
                        className=' border py-1 lg:py-2 lg:border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-medium'>
                        <FcGoogle className='text-3xl' /> Continue with Microsoft</button>
                </div>
            </section>
        </div>
    );
};

export default SignIn;