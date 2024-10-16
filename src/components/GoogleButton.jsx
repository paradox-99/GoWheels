import UseAuth from "../hooks/UseAuth";
import { googleLogin } from "../api/utilities";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";


const GoogleButton = () => {
    const { setUser, loginWithGoogle, } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const user = await googleLogin(loginWithGoogle);
            setUser(user);

            const firstName = user?.displayName.trim().split(" ")[0];
            const lastName = user?.displayName.trim().split(" ").slice(1).join(" ");

            const userInfo = {
                userEmail: user?.email,
                firstName: firstName,
                lastName: lastName,
                image: user?.photoURL,
            }
            const { data } = await axiosPublic.post('/usersRoute/user', userInfo);

            if (data.insertedId) {
                navigate('/join/login-Info', { state: { userInfo } });
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
            console.log(error);
        }
    }
    return (
        <>
           
            <button onClick={handleGoogleLogin} className='py-1 lg:py-2 px-6 border lg:border-secondary rounded w-full flex items-center justify-center gap-2 text-xl font-nunito font-medium text-white'>
                <FcGoogle className='text-3xl text-white font-merriweather' /><span className='font-semibold'> Continue with Google</span>
            </button>
        </>
    );
};

export default GoogleButton;