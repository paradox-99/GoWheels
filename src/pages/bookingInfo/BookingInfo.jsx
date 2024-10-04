import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";


const BookingInfo = () => {
    const [method, setMethod] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const bookingInformation = location.state;
    const { firstName, lastName, userEmail, phone, gender, image } = bookingInformation?.userInfo || {};

    const { brand, model, build_year, fuel, gear, mileage, photo, seats, rental_price, license_number, expire_date } = bookingInformation?.data?.vehicle_info || {}

    const handleChange = (e) => {
        setMethod(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!method) {
            return toast.error("You have to select one method")
        }

        const fromDate = bookingInformation?.fromDate;
        const toDate = bookingInformation?.untilDate
        const formTime = bookingInformation?.fromTime;
        const toTime = bookingInformation?.untilTime;
        const division = bookingInformation?.division;
        const district = bookingInformation?.district;
        const upazila = bookingInformation?.upazilla;
        const area = bookingInformation?.area

        const drivingMethod = method
        const paymentInfo = {
            brand, model, build_year, fuel, gear, mileage, photo, seats, rental_price, license_number, expire_date, firstName, lastName, userEmail, phone, gender, image, drivingMethod,fromDate, toDate, formTime, toTime, division, district, upazila, area
        }
        navigate('/payment-page', { state: {paymentInfo} })

    }

    return (
        <div>
            <section>
                {/* user info */}
                <div>
                    <div className="flex justify-center">
                        <h1
                            className="text-3xl font-semibold font-merriweather text-primary text-center border-primary border-dashed border-b-[2px] p-2">User Info
                        </h1>
                    </div>
                    <div className="flex items-center justify-center gap-10 mt-3">
                        <div className="mt-3 space-y-2">
                            <h1>Name: {firstName} {lastName}</h1>
                            <h1>Email: {userEmail}</h1>
                            <h1>Phone: {phone}</h1>
                            <h1>Gender: {gender}</h1>
                        </div>
                        <div>
                            <img className="h-56 w-56 rounded-full" src={image} alt="user-image" />
                        </div>
                    </div>
                </div>

                {/* car info */}
                <div className="mt-5">
                    <div className="flex justify-center">
                        <h1 className="text-3xl font-semibold font-merriweather text-primary text-center border-primary border-dashed border-b-[2px] p-2">Car info</h1>
                    </div>
                    <div className="flex items-center justify-center gap-10 mt-5 flex-row-reverse">
                        <div className="space-y-2">
                            <h1>Name: {brand}</h1>
                            <h1>Model: {model}</h1>
                            <h1>License-Number: {license_number}</h1>
                            <h1>Expire-Date: {expire_date}</h1>
                            <h1>Build-year: {build_year}</h1>
                            <h1>Fuel: {fuel}</h1>
                            <h1>Gear: {gear}</h1>
                            <h1>mileage: {mileage} </h1>
                        </div>
                        <div className="relative">
                            <img className="w-64 h-64" src={photo} alt="car photo" />
                            <h1 >seats: {seats}</h1>
                            <h1>Rental-Price: {rental_price}</h1>
                        </div>
                    </div>
                </div>

                {/* booking info */}
                <div>
                    <div className="flex justify-center">
                        <h1 className="text-3xl font-semibold font-merriweather text-primary text-center border-primary border-dashed border-b-[2px] p-2">Booking info</h1>
                    </div>
                    <div className="flex flex-col items-center mt-3">
                        <h1>From date: {bookingInformation?.fromDate}</h1>
                        <h1>From time: {bookingInformation?.fromTime}</h1>
                        <h1>To date: {bookingInformation?.untilDate}</h1>
                        <h1>To time: {bookingInformation?.untilTime}</h1>
                        <h1>Division: {bookingInformation?.division}</h1>
                        <h1>District: {bookingInformation?.district}</h1>
                        <h1>Upazila: {bookingInformation?.upazilla}</h1>
                        {bookingInformation?.area && <h1>Area: {bookingInformation?.area}</h1>}
                    </div>
                </div>
            </section>
            <form
                onSubmit={handleSubmit}
                className="mt-5">
                <div className="flex flex-col items-center">
                    <p className='text-2xl font-semibold font-merriweather text-primary'> Please Select a method</p>
                    <div className="flex items-center gap-2">
                        <input
                            onChange={handleChange}
                            type="radio"
                            name="dirving-method"
                            id="self-driving"
                            value="self-driving"
                        />
                        <label>Self Driving</label><br />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            onChange={handleChange}
                            type="radio"
                            name="dirving-method"
                            id="driver"
                            value="driver"
                        />
                        <label>Need Driver</label><br />
                    </div>
                    <button className='bg-primary text-white rounded py-1 px-2 lg:px-2 font-semibold'>Next</button>
                </div>
            </form>
        </div>
    );
};

export default BookingInfo;