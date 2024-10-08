import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { calculateHoursDifference } from "../../api/dateTime/dateTimeUtilities";


const PaymentPage = () => {
    const location = useLocation();
    const [totalPayCost, setTotalPayCost] = useState(0);

    const {
        brand,
        model,
        build_year,
        fuel,
        gear,
        mileage,
        photo,
        seats,
        rental_price,
        license_number,
        expire_date,
        firstName,
        lastName,
        userEmail,
        phone,
        gender,
        image,
        drivingMethod,
        fromDate,
        toDate,
        formTime,
        toTime,
        division,
        district,
        upazila,
        area
    } = location.state?.paymentInfo || {};

   const totalHours = calculateHoursDifference(fromDate, formTime, toDate, toTime)

    useEffect(() => {
        const totalCost = totalHours * rental_price / 24;
        const absoluteTotalCost = Math.ceil(totalCost);
        setTotalPayCost(absoluteTotalCost)
    }, [rental_price, totalHours])

    return (
        <div>
            <h1>brand</h1>
            <h1>You have to pay about total {totalPayCost}$</h1>
            <div className="space-x-3">
                <button className='bg-primary text-white rounded py-1 px-2 lg:px-2 font-semibold'>Back to home</button>
                <button className='bg-primary text-white rounded py-1 px-2 lg:px-2 font-semibold'>Proceed to payment</button>
            </div>
        </div>
    );
};

export default PaymentPage;