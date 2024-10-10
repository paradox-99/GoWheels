import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import useDesignation from "../../hooks/useDesignation";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { FaCarSide } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import CarData from "../../components/bookingComponent/CarData";
import AgencyData from "../../components/bookingComponent/AgencyData";
import BookingData from "../../components/bookingComponent/BookingData";
import UserData from "../../components/bookingComponent/UserData";
import { calculateHoursDifference } from "../../api/dateTime/dateTimeUtilities";


const BookingInfo = () => {
    const { user } = UseAuth();
    const { userInfo } = useDesignation() || {};
    const [method, setMethod] = useState(null);
    const [totalPayCost, setTotalPayCost] = useState(0);
    const [totalRentHours, setTotalRentHours] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const bookingInformation = location.state;
    const { firstName, lastName, userEmail, phone, gender, image, circleImage, nid, drivingLicense } = userInfo;
    const { brand, model, build_year, fuel, gear, mileage, photo, seats, rental_price, license_number, expire_date } = bookingInformation?.data?.vehicle_info || {}

    const fromDate = bookingInformation?.fromDate;
    const toDate = bookingInformation?.untilDate
    const formTime = bookingInformation?.fromTime;
    const toTime = bookingInformation?.untilTime;
    const division = bookingInformation?.division;
    const district = bookingInformation?.district;
    const upazila = bookingInformation?.upazilla;
    const area = bookingInformation?.area

    const handleChange = (e) => {
        const drivingMethod = e.target.value
        // if(drivingMethod === 'self-driving' && !nid && !drivingLicense) {
        //     navigate()
        // }
        // else if(drivingMethod === "driver" ) {
        //     navigate()
        // }

        const totalHours = calculateHoursDifference(fromDate, formTime, toDate, toTime);
        const totalCost = totalHours * rental_price / 24;
        const absoluteTotalCost = Math.ceil(totalCost);

        setTotalRentHours(totalHours)
        setTotalPayCost(absoluteTotalCost)
        setMethod(drivingMethod);
    }

    const handleConfirmBooking = (e) => {
        e.preventDefault()
        if (!method) {
            toast.error("please select a method self driving or need driver")
            return
        }
        const paymentInfo = {
            brand, model, build_year, fuel, gear, mileage, photo, seats, rental_price, license_number, expire_date, firstName, lastName, userEmail, phone, nid, drivingLicense, fromDate, toDate, formTime, toTime, division, district, upazila, area, method
        }

    }


    return (
        <div className="flex justify-between min-h-[calc(100vh-64px)]" >

            <section className="w-[65%] shadow-xl rounded-xl px-5 py-3">

                {/* upper section starts */}
                <header>
                    <div className="flex justify-between items-center">
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
                                <p className="font-nunito font-medium">@username</p>
                            </div>
                        </div>
                    </div>

                    <img className="w-[35%] rounded-xl shadow-xl mt-3" src={photo} alt={brand} />

                </header>
                {/* upper section ends */}


                {/* lower section starts */}
                <main className=" mt-3">

                    <form
                        className="mt-5">
                        <div className="flex flex-col items-center">
                            <p className='text-lg font-semibold font-merriweather text-primary'> Please Select a method</p>
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
                        </div>
                    </form>

                    <div>
                        <Tabs>
                            <TabList className={`space-x-3`}>
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
            <section className=" w-[33%] px-7 py-3 shadow-xl rounded-xl " >
                <div className="flex justify-between items-center border-b border-primary pb-5">
                    <h1 className="font-nunito font-semibold text-lg">Invoice</h1>
                    <h1 className="font-nunito font-medium">$ USD</h1>
                </div>

                <div className="flex justify-between items-center font-nunito mt-2">
                    <div>
                        <h1 className="font-semibold font-nunito">From Date</h1>
                        <p className="font-nunito">rent starting day</p>
                    </div>
                    <h1 className="font-nunito font-medium">{fromDate}</h1>
                </div>

                <div className="flex justify-between items-center font-nunito mt-2">
                    <div>
                        <h1 className="font-semibold font-nunito">From Time</h1>
                        <p className="font-nunito">rent starting time</p>
                    </div>
                    <h1 className="font-nunito font-medium">{formTime}</h1>
                </div>

                <div className="flex justify-between items-center font-nunito mt-2">
                    <div>
                        <h1 className="font-semibold font-nunito">To Date</h1>
                        <p className="font-nunito">rent finishig date</p>
                    </div>
                    <h1 className="font-nunito font-medium">{toDate}</h1>
                </div>

                <div className="flex justify-between items-center font-nunito mt-2">
                    <div>
                        <h1 className="font-semibold font-nunito">To Time</h1>
                        <p className="font-nunito">rent finishig time</p>
                    </div>
                    <h1 className="font-nunito font-medium">{toTime}</h1>
                </div>

                <div className="flex justify-between items-center font-nunito mt-2 border-b border-primary pb-2">
                    <div>
                        <h1 className="font-semibold font-nunito">Base Price:</h1>
                        <p className="font-nunito">per day</p>
                    </div>
                    <h1 className="font-nunito font-medium">{rental_price} $</h1>
                </div>

                <div className="flex justify-between items-center font-nunito mt-2">
                    <div>
                        <h1 className="font-semibold font-nunito">Total hours</h1>
                        <p className="font-nunito">total calculated renting hours</p>
                    </div>
                    <h1 className="font-nunito font-medium">{totalRentHours} $</h1>
                </div>

                <div className="flex justify-between items-center font-nunito mt-2">
                    <div>
                        <h1 className="font-semibold font-nunito">Renting Cost</h1>
                        <p className="font-nunito">cost according to the total hours</p>
                    </div>
                    <h1 className="font-nunito font-medium">{totalPayCost} $</h1>
                </div>

                <div className="flex justify-between items-center font-nunito mt-2">
                    <div>
                        <h1 className="font-semibold font-nunito">Driving method</h1>
                        <p className="font-nunito">selected method of driving</p>
                    </div>
                    <h1 className="font-nunito font-medium">{method? method : "not selected"}</h1>
                </div>

                {
                    method === "driver" && <>
                        <div className="flex justify-between items-center font-nunito mt-2">
                            <div>
                                <h1 className="font-semibold font-nunito">Driver Cost</h1>
                                <p className="font-nunito">if you select need driver method</p>
                            </div>
                            <h1 className="font-nunito font-medium"> 0 $</h1>
                        </div>
                    </>
                }

                <div className="flex justify-between items-center font-nunito mt-2 border-b border-primary pb-2">
                    <div>
                        <h1 className="font-semibold font-nunito">Discount</h1>
                        <p className="font-nunito">if there is any discount</p>
                    </div>
                    <h1 className="font-nunito font-medium"> 0 $</h1>
                </div>

                <div className="flex justify-between items-center font-nunito mt-2">
                    <div>
                        <h1 className="font-bold font-nunito text-lg">Total cost</h1>
                        <p className="font-nunito font-bold">total cost you need to pay</p>
                    </div>
                    <h1 className="font-nunito font-bold"> {rental_price} $</h1>
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