import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
    const { tranId } = useParams()
    return (
        <div >
            <h1>Payment Success : {tranId}</h1>
            <div>

            </div>
        </div>
    );
};

export default PaymentSuccess;