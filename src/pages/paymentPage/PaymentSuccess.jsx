import { Link, useParams } from "react-router-dom";
import success from "/paymentsuccess.png"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const PaymentSuccess = () => {
    
    const { tranId } = useParams();
    const axiosPublic = useAxiosPublic();
    console.log(tranId);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const updateUser = async () => {
            try {
                const response = await axiosPublic.post(`payment/success/${tranId}`);
                setData(response.data);
                console.log(response.data);
            } catch (err) {
                setError(err);
                console.error(err);
            }
        };

        if (tranId) {
            updateUser();
        }
    }, [tranId, axiosPublic]);

    return (
        <div className="flex justify-center items-center">
            <Helmet>
                <title>Payment Successful</title>
            </Helmet>
            {/* <h1>Payment Success : {tranId}</h1> */}
            <div className="max-w-screen-sm pb-8 border border-gray-300 flex justify-start items-center flex-col px-10">
                <figure>
                    <img src={success} alt="" className="w-60 " />
                </figure>
                <h2 className="text-2xl text-gray-500">Payment Successful</h2>
                <div className="flex justify-center items-center flex-col pt-10 gap-5">
                    <Link to="/" className="bg-primary hover:bg-transparent hover:border-2 border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-6 py-2 text-background font-nunito font-semibold">
                        Go Back Homepage
                    </Link>
                    <button className="hover:bg-primary bg-transparent hover:border-2 border-primary text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2  px-6 py-2 hover:text-background font-nunito font-semibold">
                        View Order Details
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;