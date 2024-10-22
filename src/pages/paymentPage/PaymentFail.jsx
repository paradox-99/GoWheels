import { Link } from "react-router-dom";
import fail from "/paymentfail.png"
import { Helmet } from "react-helmet-async";

const PaymentFail = () => {
    return (
        <div className="flex justify-center items-center">
            <Helmet>
                <title>Payment Failed</title>
            </Helmet>
            {/* <h1>Payment Success : {tranId}</h1> */}
            <div className="max-w-screen-sm pb-8 border border-gray-300 flex justify-start items-center flex-col px-10">
                <figure>
                    <img src={fail} alt="" className="w-52 " />
                </figure>
                <h2 className="text-2xl text-gray-500">Payment Fail</h2>
                <div className="flex justify-center items-center flex-col pt-10 gap-5">
                    <Link to="/" className="bg-primary hover:bg-transparent hover:border-2 border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-6 py-2 text-background font-nunito font-semibold">
                        Try Again
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentFail;