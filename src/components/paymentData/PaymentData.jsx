import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const PaymentData = ( userEmail, division, district, upazila, area, fromDate, formTime, toDate, toTime, method, rental_price, totalRentHours, totalPayCost,  drivingCost,  discount,  totalPayment, carId) => {

    const axiosPublic = useAxiosPublic();

    const handleConfirmBooking = async (e) => {
        e.preventDefault()
        if (!method) {
            toast.error("please select a method self driving or need driver")
            return
        }
        const paymentInfo = {
            userEmail, carId, fromDate, toDate, formTime, toTime, division, district, upazila, area, method, totalRentHours, drivingCost, discount, 
        }

        await axiosPublic.post('/payment/order', paymentInfo)
            .then(res => {
                window.location.replace(res.data?.url)
                console.log(res.data)
            })
    }
    return (
        <div>
            <div className="flex justify-between items-center border-b border-primary pb-5">
                <h1 className="font-nunito font-extrabold text-lg">Invoice</h1>
                <h1 className="font-nunito font-medium">৳ Taka</h1>
            </div>
            <div className="flex justify-between items-center font-nunito mt-2">
                <div>
                    <h1 className="font-bold font-nunito">From Date</h1>
                    <p className="font-nunito">Rent starting day</p>
                </div>
                <h1 className="font-nunito font-medium">{fromDate}</h1>
            </div>
            <div className="flex justify-between items-center font-nunito mt-2">
                <div>
                    <h1 className="font-bold font-nunito">From Time</h1>
                    <p className="font-nunito">Rent starting time</p>
                </div>
                <h1 className="font-nunito font-medium">{formTime}</h1>
            </div>
            <div className="flex justify-between items-center font-nunito mt-2">
                <div>
                    <h1 className="font-bold font-nunito">To Date</h1>
                    <p className="font-nunito">Rent finishing date</p>
                </div>
                <h1 className="font-nunito font-medium">{toDate}</h1>
            </div>
            <div className="flex justify-between items-center font-nunito mt-2">
                <div>
                    <h1 className="font-bold font-nunito">To Time</h1>
                    <p className="font-nunito">Rent finishing time</p>
                </div>
                <h1 className="font-nunito font-medium">{toTime}</h1>
            </div>
            <div className="flex justify-between items-center font-nunito mt-2 border-b border-primary pb-2">
                <div>
                    <h1 className="font-bold font-nunito">Driving method</h1>
                    <p className="font-nunito">Selected method of driving</p>
                </div>
                <h1 className="font-nunito font-medium">{method ? method : "not selected"}</h1>
            </div>
            <div className="flex justify-between items-center font-nunito mt-2">
                <div>
                    <h1 className="font-bold font-nunito">Base Price:</h1>
                    <p className="font-nunito">Per day</p>
                </div>
                <h1 className="font-nunito font-medium">৳ {rental_price * 120}</h1>
            </div>
            <div className="flex justify-between items-center font-nunito mt-2">
                <div>
                    <h1 className="font-bold font-nunito">Total hours</h1>
                    <p className="font-nunito">Total hours</p>
                </div>
                <h1 className="font-nunito font-medium">{totalRentHours}</h1>
            </div>
            <div className="flex justify-between items-center font-nunito mt-2">
                <div>
                    <h1 className="font-bold font-nunito">Renting Cost</h1>
                    <p className="font-nunito">Cost on total hours</p>
                </div>
                <h1 className="font-nunito font-medium">৳ {totalPayCost * 120}</h1>
            </div>
            {
                method === "driver" && <>
                    <div className="flex justify-between items-center font-nunito mt-2">
                        <div>
                            <h1 className="font-bold font-nunito">Driver Cost</h1>
                            <p className="font-nunito">If you select need driver method</p>
                        </div>
                        <h1 className="font-nunito font-medium">৳ {drivingCost * 120}</h1>
                    </div>
                </>
            }
            <div className="flex justify-between items-center font-nunito mt-2 border-b border-primary pb-2">
                <div>
                    <h1 className="font-bold font-nunito">Discount</h1>
                </div>
                <h1 className="font-nunito font-medium">৳ {discount * 120}</h1>
            </div>
            <div className="flex justify-between items-center font-nunito mt-2">
                <div>
                    <h1 className="font-bold font-nunito text-lg">Total cost</h1>
                    <p className="font-nunito font-medium">Total cost you need to pay</p>
                </div>
                <h1 className="font-nunito font-bold">৳ {totalPayment * 120}</h1>
            </div>
            <form
                className="mt-2"
                onSubmit={handleConfirmBooking}>
                <button type="submit" className="bg-primary rounded-xl py-1 w-full text-white font-medium font-nunito hover:bg-black duration-500">Confirm booking</button>
            </form>
        </div>
    );
};

export default PaymentData;