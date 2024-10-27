import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const PaymentData = ({ paymentInfo }) => {
    
    const {
        agencyEmail,
        agency_id,
        _id,
        discount,
        drivingCost,
        initailDate,
        initalTime,
        method,
        toDate,
        toTime,
        totalPayCost,
        totalPayment,
        totalRentHours,
        userEmail,
        rentalPrice,
        division,
        district,
        upazilla,
        area

    } = paymentInfo

    const axiosPublic = useAxiosPublic();

    const handleConfirmBooking = async (e) => {
        e.preventDefault()
        if (!paymentInfo?.method) {
            toast.error("please select a method self driving or need driver")
            return
        }

        const paymentData = {
            agencyEmail,
            agency_id,
            _id,
            userEmail,
            discount,
            drivingCost,
            method,
            totalRentHours,
            division,
            district,
            upazilla,
            area,
            initailDate,
            initalTime,
            toDate,
            toTime,
        }

        const {data} = await axiosPublic.post('/payment/order', paymentData)
        console.log(data)

            .then(res => {
                window.location.replace(data.url)
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
                <h1 className="font-nunito font-medium">{initailDate}</h1>
            </div>
            <div className="flex justify-between items-center font-nunito mt-2">
                <div>
                    <h1 className="font-bold font-nunito">From Time</h1>
                    <p className="font-nunito">Rent starting time</p>
                </div>
                <h1 className="font-nunito font-medium">{initalTime}</h1>
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
                <h1 className="font-nunito font-medium">৳ {rentalPrice}</h1>
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
                <h1 className="font-nunito font-medium">৳ {totalPayCost}</h1>
            </div>
            {
                method === "driver" && <>
                    <div className="flex justify-between items-center font-nunito mt-2">
                        <div>
                            <h1 className="font-bold font-nunito">Driver Cost</h1>
                            <p className="font-nunito">If you select need driver method</p>
                        </div>
                        <h1 className="font-nunito font-medium">৳ {drivingCost}</h1>
                    </div>
                </>
            }
            <div className="flex justify-between items-center font-nunito mt-2 border-b border-primary pb-2">
                <div>
                    <h1 className="font-bold font-nunito">Discount</h1>
                </div>
                <h1 className="font-nunito font-medium">৳ {discount}</h1>
            </div>
            <div className="flex justify-between items-center font-nunito mt-2">
                <div>
                    <h1 className="font-bold font-nunito text-lg">Total cost</h1>
                    <p className="font-nunito font-medium">Total cost you need to pay</p>
                </div>
                <h1 className="font-nunito font-bold">৳ {totalPayment}</h1>
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