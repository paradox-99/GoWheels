import { Link } from 'react-router-dom';
import background from '../../../public/asset/background.jpg'
import { HiOutlineMail } from 'react-icons/hi';
import { FaGoogle } from 'react-icons/fa6';
import { BsMicrosoft } from 'react-icons/bs';

const SignUp = () => {

    return (
        <div style={{ backgroundImage: `url(${background})` }} className='h-[100vh] bg-center bg-cover  bg-no-repeat'>
            <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg'>
                <div className='text-center mx-auto pt-5'>
                    <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
                    <h1 className='text-2xl lg:text-4xl font-bold text-[#fdfefe] font-merriweather'>Want to join with us</h1>
                </div>
                
                <section className='mt-5 pb-5'>
                    <div className=' mt-2'>
                        <button
                            className='py-1 lg:py-2 border lg:border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-medium'>
                            <HiOutlineMail className='text-3xl text-white' /> Continue with Email</button>
                    </div>
                    <div className=' mt-2'>
                        <button
                            className='py-1 lg:py-2 border lg:border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-medium'>
                            <FaGoogle className='text-3xl text-white' /> Continue with Google</button>
                    </div>
                    <div className=' mt-2'>
                        <button
                            className=' border py-1 lg:py-2 lg:border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-medium'>
                            <BsMicrosoft className='text-3xl text-white' /> Continue with Microsoft</button>
                    </div>
                    <div className='mt-8 flex justify-center items-center space-x-2 font-nunito'>
                        <h1 className='text-lg lg:text-xl font-medium lg:font-semibold text-[#fdfefe]'>Already have an account?</h1>
                        <Link to={'/join'} className='text-xl lg:text-2xl font-semibold text-primary'>Sign In</Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SignUp;