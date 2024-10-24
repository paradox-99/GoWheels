import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import UseAuth from "../../hooks/UseAuth";
import backgroundImage from '../../../public/asset/drive.avif'

const AgencyOTP = () => {
    const  [loading, setLoading] = useState(false)
    const { user, loader } = UseAuth() || {};
    const location = useLocation();
    const { userInfo, from } = location.state || {};
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    useEffect(() => {
        if ((!user && !loader) && !from) {
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
        navigate('/join/agencyInfo', {
            state: {
                userInfo,
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const insertedOTP = e.target.otp.value;

        const matchOtp = {
            email: userInfo?.userEmail,
            otp: insertedOTP
        }

        try {
            const { data } = await axiosPublic.post(`/otpRoutes/verifyOTP`, matchOtp);

            console.log(data)
            if (data.message) {

                const { data } = await axiosPublic.patch(`/usersRoute/emailVerified/${userInfo?.userEmail}`, { emailVerified: "verified" });
                console.log(data)
                if (data.modifiedCount) {
                    toast.success("otp matched successfully")
                    setLoading(false)
                    navigate('/join/agencyInfo')
                }

            }

        }
        catch (error) {
            console.log(error);
            // toast.error("error")
        }
    }



    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className='h-screen min-h-screen overflow-hidden bg-center bg-cover bg-no-repeat pt-10' >
            <div className='lg:w-[40vw] bg-transparent lg:bg-[#22232333] mx-auto px-10 rounded-lg py-5'>
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center mb-4 text-white">Please check your Email</h1>
                    <div className="mx-auto flex justify-center">
                        
                        <input
                            type="number"
                            placeholder="Enter your OTP"
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
        </div>
    );
};

export default AgencyOTP;