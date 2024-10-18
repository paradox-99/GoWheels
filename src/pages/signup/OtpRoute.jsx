import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";


const OtpRoute = () => {
    const { user, loader } = UseAuth() || {};
    const location = useLocation();
    const { userInfo, from } = location.state || {};
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    useEffect(() => {
        if ((!user && !loader) && (from !== '/join/login-Info' || from !== '/join/signUpThree')) {
            navigate('/join');
        }
    }, [from, loader, navigate, user])

    const handleResend = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axiosPublic.put(`/otpRoutes/replaceOTP/${userInfo?.userEmail}`, userInfo);
            console.log(data)

            if (data.modifiedCount) {
                toast.success('otp sent successfully');
            }

        }
        catch (error) {
            console.log(error)
        }
    }

    const handleskip = (e) => {
        e.preventDefault();

        if (from === '/join/signUpThree') {
            toast.success("otp matched successfully")
            navigate('/join/signUpFour', {
                state: {
                    userInfo,
                }
            })
        }
        else {
            toast.success("otp matched successfully")
            navigate('/');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const insertedOTP = e.target.otp.value;

        const matchOtp = {
            email: userInfo?.userEmail,
            otp: insertedOTP
        }

        try {
            const { data } = await axiosPublic.post(`/otpRoutes/verifyOTP`, matchOtp);

            console.log(data)
            if (data.message) {

                const { data } = await axiosPublic.patch(`/usersRoute/userStatus/${userInfo?.userEmail}`);
                console.log(data)
                if (data.modifiedCount) {

                    if (from === '/join/signUpThree') {
                        toast.success("otp matched successfully")
                        navigate('/join/signUpFour', {
                            state: {
                                userInfo,
                            }
                        })
                    }
                    else {
                        toast.success("otp matched successfully")
                        navigate('/');
                    }
                }

            }

        }
        catch (error) {
            console.log(error);
            // toast.error("error")
        }
    }


    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg py-5'>
            <form onSubmit={handleSubmit}>
                <div className="mx-auto flex justify-center">
                    <input
                        type="number"
                        placeholder="Your OTP"
                        name="otp"
                        id="otp"
                        className='outline-none rounded py-1 px-2 text-secondary'
                        required
                    />

                    <button
                        onClick={handleResend}
                        type="button"
                        className="bg-primary text-white rounded py-1 px-2 font-semibold">Resend
                    </button>
                </div>
                <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 justify-between mt-10">
                    <button
                        onClick={handleskip}
                        type="button"
                        className="bg-primary text-white rounded py-1 px-2 font-semibold"> skip
                    </button>
                    <button
                        type="submit"
                        className="bg-primary text-white rounded py-1 px-2 font-semibold"> Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OtpRoute;