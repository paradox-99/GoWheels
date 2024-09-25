import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const SignUpLastPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto p-10 rounded-lg'>
            <div className='text-center mx-auto'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
            </div>
            <section className='mt-8'>
                <form
                    onSubmit={handleLogin}
                    className='font-nunito'>
                    <div className='relative'>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className='border-[1px] border-secondary outline-none w-full rounded py-1 lg:py-2 px-3 text-secondary' placeholder='Enter your password'
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
                            id="yes" />
                            <label htmlFor="yes">
                            Terms and Conditions</label>
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

export default SignUpLastPage;