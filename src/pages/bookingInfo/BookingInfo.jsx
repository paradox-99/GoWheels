import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import useDesignation from "../../hooks/useDesignation";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { FaCarSide } from "react-icons/fa";
import { MdAirlineSeatReclineNormal, MdBrowserUpdated } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import CarData from "../../components/bookingComponent/CarData";
import AgencyData from "../../components/bookingComponent/AgencyData";
import BookingData from "../../components/bookingComponent/BookingData";
import UserData from "../../components/bookingComponent/UserData";
import { calculateHoursDifference } from "../../api/dateTime/dateTimeUtilities";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import loader from '../../../public/logo.gif'


const BookingInfo = () => {
    const location = useLocation();
    const bookingInformation = location.state;
    const { user } = UseAuth();
    const { userInfo } = useDesignation() || {};
    const [discount, setDiscount] = useState(0);
    const [drivingCost, setDrivingCost] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [method, setMethod] = useState(null);
    const [totalPayCost, setTotalPayCost] = useState(0);
    const [totalRentHours, setTotalRentHours] = useState(0);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const { firstName, lastName, userEmail, phone, gender, image, circleImage, nid, drivingLicense } = userInfo;
    const { brand, model, build_year, fuel, gear, mileage, photo, seats, rental_price, license_number, expire_date } = bookingInformation?.data?.vehicle_info || {}
    const axiosPublic = useAxiosPublic()

    const fromDate = bookingInformation?.fromDate;
    const toDate = bookingInformation?.untilDate
    const formTime = bookingInformation?.fromTime;
    const toTime = bookingInformation?.untilTime;
    const division = bookingInformation?.division;
    const district = bookingInformation?.district;
    const upazila = bookingInformation?.upazilla;
    const area = bookingInformation?.area;
    const carId = bookingInformation?.data?._id;

    console.log(bookingInformation?.carId)

    const handleChange = (e) => {
        setLoading(true);
        const drivingMethod = e.target.value
        setMethod(drivingMethod);
        // if(drivingMethod === 'self-driving' && !nid && !drivingLicense) {
        //     navigate()
        // }
        // else if(drivingMethod === "driver" ) {
        //     navigate()
        // }
        setTimeout(() => {
            const totalHours = calculateHoursDifference(fromDate, formTime, toDate, toTime);
            setTotalRentHours(totalHours)

            const Cost = totalHours * rental_price / 24;
            const calculatedCost = Math.ceil(Cost);
            setTotalPayCost(calculatedCost)

            if (drivingCost > 0) {
                const absoluteTotalCost = (calculatedCost + drivingCost) - discount;
                setTotalPayment(absoluteTotalCost)
            }
            else {
                const absoluteTotalCost = calculatedCost - discount;
                setTotalPayment(absoluteTotalCost)
            }
            setLoading(false);
        }, 1000)
    }

    console.log(method)

    const handleConfirmBooking = async (e) => {
        e.preventDefault()
        if (!method) {
            toast.error("please select a method self driving or need driver")
            return
        }
        const paymentInfo = {
            brand, model, build_year, fuel, gear, mileage, photo, seats, license_number, expire_date, firstName, lastName, userEmail, phone, nid, drivingLicense, fromDate, toDate, formTime, toTime, division, district, upazila, area, method, carId: bookingInformation?.carId, totalRentHours: 5 
        }

        await axiosPublic.post('/payment/order', paymentInfo)
            .then(res => {
                window.location.replace(res.data?.url)
                console.log(res.data)
            })
    }
    return (
        <div className="flex flex-col lg:flex-row justify-between min-h-[calc(100vh-64px)]" >

            <section className="lg:w-[65%] shadow-xl rounded-xl px-5 py-3">
                {/* upper section starts */}
                <header>
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-semibold font-merriweather">Your selected car</h1>
                            <div className="flex gap-5 border-b-2 border-primary border-dashed pb-3">
                                <p className=" font-nunito font-semibold flex gap-1 items-center"><FaCarSide className="text-primary text-lg" /> {brand} {model}</p>
                                <p className=" font-nunito font-semibold flex gap-1 items-center"> <MdAirlineSeatReclineNormal className="text-primary text-lg" /> Seats: {seats}</p>
                                <p className=" font-nunito font-semibold flex gap-1 items-center"> <SlCalender className="text-primary text-lg" /> Year: {build_year}</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center  mt-3">
                            <div>
                                {
                                    user && (circleImage ? (<img src={circleImage} alt="Profile Picture" className="w-14 h-14 rounded-full" />) : (<img src={image} alt="Profile Picture" referrerPolicy="no-referrer" className="w-14 h-14 rounded-full" />))
                                }
                            </div>
                            <div>
                                <h1 className="text-lg font-bold font-merriweather">{firstName} {lastName}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between relative">
                        <img className="lg:w-[35%] rounded-xl shadow-xl mt-3" src={photo} alt={brand} />
                        <div>
                            <form
                                className="mt-5">
                                <div className="flex flex-col items-center">
                                    <p className='text-lg font-semibold font-merriweather text-primary'> Please Select a method</p>
                                    <div className="flex items-center gap-2">
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="driving-method"
                                            id="self-driving"
                                            value="Self-driving"
                                            checked={method === 'Self-driving'}
                                        />
                                        <label>Self Driving</label><br />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="driving-method"
                                            id="driver"
                                            value="Driver"
                                            checked={method === 'Driver'}
                                        />
                                        <label>Need Driver</label><br />
                                    </div>
                                </div>
                            </form>
                        </div>

                        {
                            loading && <>
                                <div className="overlay absolute right-28 lg:right-12 top-64 lg:top-0">
                                    <img className="w-28 lg:w-40" src={loader} alt="loading spiner" />
                                </div>
                            </>
                        }
                    </div>

                    <div className="flex justify-center mt-3">
                        <Link className="bg-primary px-2 py-1 rounded-xl font-nunito font-medium text-white flex items-center gap-2 hover:bg-black duration-1000 text-lg"> <MdBrowserUpdated className="text-xl" /> update booking info</Link>
                    </div>
                </header>
                {/* upper section ends */}


                {/* lower section starts */}
                <main className=" mt-3">
                    <div>
                        <Tabs>
                            <TabList className={`lg:space-x-3`}>
                                <Tab>Car Information</Tab>
                                <Tab>Agency Information</Tab>
                                <Tab>Booking Information</Tab>
                                <Tab>User Information</Tab>
                            </TabList>

                            <div className="mt-5">
                                <TabPanel>
                                    <CarData brand={brand} model={model} build_year={build_year} fuel={fuel} gear={gear} mileage={mileage} photo={photo} seats={seats} rental_price={rental_price} license_number={license_number} expire_date={expire_date} ></CarData>
                                </TabPanel>
                                <TabPanel className={`lg:ml-36`}>
                                    <AgencyData></AgencyData>
                                </TabPanel>
                                <TabPanel className={`lg:ml-[330px] lg:w-64`}>
                                    <BookingData fromDate={fromDate} formTime={formTime} toDate={toDate} toTime={toTime} division={division} district={district} upazila={upazila} area={area}></BookingData>
                                </TabPanel>
                                <TabPanel className={`lg:ml-[510px]`}>
                                    <UserData firstName={firstName} lastName={lastName} userEmail={userEmail} phone={phone} gender={gender} nid={nid} drivingLicense={drivingLicense} ></UserData>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </main>
                {/* lower section ends */}
            </section>

            {/* right part */}
            <section className=" lg:w-[33%] px-7 py-8 shadow-xl rounded-xl " >
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
                <div className="flex justify-between items-center font-nunito mt-2">
                    <div>
                        <h1 className="font-bold font-nunito">Driving method</h1>
                    </div>
                    <h1 className="font-nunito font-medium">{method ? method : "not selected"}</h1>
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

            </section >

        </div >
    );
};

export default BookingInfo;