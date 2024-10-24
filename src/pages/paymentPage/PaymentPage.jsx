import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const PaymentPage = () => {
    const location = useLocation();
    const [totalPayCost, setTotalPayCost] = useState(0);
    const axiosPublic = useAxiosPublic()

    const paymentInfo = location.state;

    const {
        brand,
        // model,
        // build_year,
        // fuel,
        // gear,
        // mileage,
        // photo,
        // seats,
        rental_price,
        // license_number,
        // expire_date,
        // firstName,
        // lastName,
        // userEmail,
        // phone,
        // gender,
        // image,
        // drivingMethod,
        fromDate,
        toDate,
        formTime,
        toTime,
        // division,
        // district,
        // upazila,
        // area
    } = paymentInfo || {}

    const startDate = fromDate;
    const startTime = formTime;
    const endDate = toDate;
    const endTime = toTime;

    const startDateTime = new Date(`${startDate}T${startTime}:00`);
    const endDateTime = new Date(`${endDate}T${endTime}:00`);

    const timeDifference = endDateTime - startDateTime;
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    let totalDays = timeDifference / millisecondsInADay;
    totalDays = Math.ceil(totalDays);



    useEffect(() => {
        const totalCost = totalDays * rental_price;
        setTotalPayCost(totalCost)
    }, [rental_price, totalDays])
    console.log(totalPayCost)


    console.log(location)

    const handlePaymentSystem = async () => {
        const data = { productId: "66f68ed93ba27ae469fcf581", cus_name: "Masum", address: "GoWheel" }
        await axiosPublic.post('/payment/order', data)
            .then(res => {
                window.location.replace(res.data?.url)
                console.log(res.data)
            })

    }


    return (
        <div>
            <h1>{brand}</h1>
            <h1>You have to pay total ৳ {totalPayCost * 120}</h1>
            <div className="space-x-3">
                <button className='bg-primary text-white rounded py-1 px-2 lg:px-2 font-semibold'>Back to home</button>
                <button onClick={handlePaymentSystem} className='bg-primary text-white rounded py-1 px-2 lg:px-2 font-semibold'>payment</button>
            </div>
        </div>
    );
};

export default PaymentPage;