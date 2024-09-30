import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGoogle } from 'react-icons/fa6';
import { FaRegHandshake } from 'react-icons/fa';
import UseAuth from '../../hooks/UseAuth';
import { googleLogin } from '../../api/utilities';
import loaderEliment from '../../../public/logo.gif';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const SignUpPartOne = () => {
    const { loader, setLoader, loginWithGoogle, setUser } = UseAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogle = async () => {
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
        return <div>
            <img src={loaderEliment} alt="" />
        </div>
    }

    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg'>
            <div className='text-center mx-auto pt-5'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
                <h1 className='text-2xl lg:text-3xl mt-8 font-bold text-[#fdfefe] font-merriweather'>Want to join with us</h1>
            </div>

            <section className='mt-5 pb-5'>
                <div className=' mt-2'>
                    <Link to={'/join/signUpPartTwo'} className='py-1 lg:py-2 border lg:border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-semibold'>
                        <HiOutlineMail className='text-3xl text-white' /> Continue with Email
                    </Link>
                </div>

                <div className=' mt-2'>
                    <button
                        onClick={handleGoogle}
                        className='py-1 lg:py-2 border lg:border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-semibold'>
                        <FaGoogle className='text-3xl text-white' /> Continue with Google</button>
                </div>
                <div className=' mt-2'>
                    <Link to={'/join/agencyRegister'} className='py-1 lg:py-2 border lg:border-secondary rounded-xl w-full flex items-center justify-center gap-2 text-xl font-nunito font-semibold'>
                        <FaRegHandshake className='text-3xl text-white' /> Register as a agency
                    </Link>
                </div>
                <div className='mt-8 flex justify-center items-center space-x-2'>
                    <h1 className='text-lg lg:text-xl font-medium lg:font-semibold text-[#fdfefe]'>Already have an account?</h1>
                    <Link to={'/join'} className='text-xl lg:text-2xl font-bold text-primary font-merriweather'>Sign In</Link>
                </div>
            </section>
        </div>
    );
};

export default SignUpPartOne;