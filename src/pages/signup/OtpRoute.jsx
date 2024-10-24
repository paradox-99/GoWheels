import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useOtpTimer from "../../hooks/useOtpTimer";
import { Helmet } from "react-helmet-async";


const OtpRoute = () => {
    const { user, loader } = UseAuth() || {};
    const location = useLocation();
    const { userInfo, from } = location.state || {};
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { timer, isDisabled, message, handleResendClick } = useOtpTimer();
    const [buttonclicked, setButtonClicked] = useState('Resend');


    useEffect(() => {
        if ((!user && !loader) && (from !== '/join/login-Info' || from !== '/join/signUpThree')) {
            navigate('/join');
        }
    }, [from, loader, navigate, user])

    useEffect(() => {
        if (timer > 0) {
            setButtonClicked('Sent')
        }
        else {
            setButtonClicked('Resend')
        }
    }, [timer])

    const handleResend = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axiosPublic.put(`/otpRoutes/replaceOTP/${userInfo?.userEmail}`, userInfo);
            console.log(data);

            if (data.modifiedCount) {
                toast.success('OTP sent successfully');
                handleResendClick();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleskip = (e) => {
        e.preventDefault();

        localStorage.removeItem("otpExpireTime");
        localStorage.removeItem("otpSent");

        if (from === '/join/signUpThree') {
            toast.success("otp matched successfully")
            navigate('/join/signUpFour', {
                state: {
                    userInfo,
                }
            })
        }
        else {
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

                localStorage.removeItem("otpExpireTime");
                localStorage.removeItem("otpSent");

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
        }
    }


    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg py-5'>
            <Helmet>
                <title>Verify OTP</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
                {
                    timer > 0 ? <h1>Your OTP expired in {timer} seconds</h1> : <h1>{message}</h1>
                }
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
                        className="bg-primary text-white rounded py-1 px-2 font-semibold"
                        disabled={isDisabled}
                    >
                        {buttonclicked}
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