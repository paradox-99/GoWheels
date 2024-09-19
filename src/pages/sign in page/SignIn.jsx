import { Link } from 'react-router-dom';
import background from '../../../public/asset/background.jpg'
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target ;
        const email = form.email.value;
        const password = form.passowrd.value;
        console.log(email, password)
    }


    return (
        <div style={{ backgroundImage: `url(${background})` }} className='h-[100vh] bg-cover py-16'>
            <div className='w-[40vw] bg-[#fdfefe] mx-auto py-5 px-10 rounded-lg'>
                <div className='text-center mx-auto'>
                    <h1 className='text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
                    <h1 className='text-4xl font-bold text-secondary font-merriweather'>Sign in to your account</h1>
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
                                className='border-[1px] border-secondary outline-none w-full rounded-xl py-2 px-6 text-secondary' placeholder='Enter your email address' />
                        </div>

                        <div className='mt-3 relative'>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="passowrd"
                                id="password"
                                className='border-[1px] border-secondary outline-none w-full rounded-xl py-2 px-6 text-secondary' placeholder='Enter your password' />
                            <span
                                className='absolute top-3 right-3 text-xl'
                                onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}
                            </span>
                        </div>

                        <div className='flex justify-between items-center mt-3'>
                            <div>
                                <div className='space-x-2 flex items-center'>
                                    <label
                                        htmlFor="checkbox">
                                        Remember me</label>
                                    <input
                                        type="checkbox"
                                        name="yeas"
                                        id="yes" />
                                </div>

                                <div>
                                    <Link className='text-lg text-primary font-nunito font-semibold'>Forgot Password ?</Link>
                                </div>
                            </div>

                            <div className='border'>
                                <input
                                    className='bg-primary px-3 py-1 rounded-xl text-white font-semibold cursor-pointer'
                                    type="submit"
                                    value="submit" />
                            </div>
                        </div>

                    </form>
                </section>
                <section className='mt-3'>
                    <div className='flex justify-center items-center space-x-2 font-nunito'>
                        <h1 className='text-xl font-semibold text-secondary'>New to this site ?</h1>
                        <Link className='text-2xl font-semibold text-primary'>Join Now</Link>
                    </div>
                    <div className='border mt-2'>
                        <button
                            className='py-2 border border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-medium'>
                            <FcGoogle className='text-3xl' /> Continue with Google</button>
                    </div>
                    <div className='border mt-2'>
                        <button
                            className='py-2 border border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-medium'>
                            <FcGoogle className='text-3xl' /> Continue with Microsoft</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SignIn;