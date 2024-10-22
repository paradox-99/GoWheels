import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegHandshake } from 'react-icons/fa';
import loaderEliment from '../../../public/logo.gif';
import GoogleButton from '../../components/GoogleButton';
import { GiSteeringWheel } from "react-icons/gi";
import UseAuth from '../../hooks/UseAuth';
import useDesignation from '../../hooks/useDesignation';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// import { GiSteeringWheel } from 'react-icons/gi';

const SignUpPartOne = () => {
    const navigate = useNavigate();
  const {user, loader,} = UseAuth();
  const { userInfo } = useDesignation() || {};

  useEffect(() => {
    if ((user && loader) || (user && userInfo.nid)) {
        navigate('/');
    }
}, [loader, navigate, user, userInfo.nid]);


    const handleNextStep = (e) => {
        e.preventDefault();
        navigate('/join/signUpTwo', {state: {from: '/join/signUpTwo'}});
    }

    if (loader) {
        return (
            <div className='flex justify-center'>
                <img className='mx-auto' src={loaderEliment} alt="loading" />
            </div>
        );
    }

    return (
        <div>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            {
                !user ? <>
                    <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg'>
                        <div className='text-center mx-auto pt-5'>
                            <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
                            <h1 className='text-2xl lg:text-3xl mt-8 font-bold text-[#fdfefe] font-merriweather'>Want to join with us</h1>
                        </div>
                        <section className='mt-5 pb-5'>
                            <div className='mt-2'>
                                <button onClick={handleNextStep} className='py-1 lg:py-2 border lg:border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-semibold'>
                                    <HiOutlineMail className='text-3xl text-white' /> Continue with Email
                                </button>
                            </div>
                            <div className=' mt-2'>
                                <GoogleButton></GoogleButton>
                            </div>
                            <div className='mt-2'>
                                <Link to={'/join/agencyRegister'} className='py-1 lg:py-2 border lg:border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-semibold'>
                                    <FaRegHandshake className='text-3xl text-white' /> Register as a agency
                                </Link>
                            </div>
                            <div className='mt-2'>
                                <Link to={'/join/driverSignUp'} className='py-1 lg:py-2 border lg:border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-semibold'>
                                    <GiSteeringWheel className='text-3xl text-white' /> Register as a driver
                                </Link>
                            </div>
                            <div className='mt-8 flex justify-center items-center space-x-2'>
                                <h1 className='text-lg lg:text-xl font-medium lg:font-semibold text-[#fdfefe]'>Already have an account?</h1>
                                <Link to={'/join'} className='text-xl lg:text-2xl font-bold text-primary font-merriweather'>Sign In</Link>
                            </div>
                        </section>
                    </div>
                </> : <>
                    <div className='flex justify-center'>
                        <img src={loaderEliment} alt="" /> 
                    </div>
                </>
            }
        </div>
    );
};

export default SignUpPartOne;