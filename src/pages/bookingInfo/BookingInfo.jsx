/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import loader from '../../../public/logo.gif'
import DriverList from "../../components/driverList/DriverList";
import PaymentData from "../../components/paymentData/PaymentData";
import { Helmet } from "react-helmet-async";


const BookingInfo = () => {
    const location = useLocation();

    const { user } = UseAuth();
    const { userInfo } = useDesignation() || {};
    
    const [discount, setDiscount] = useState(0);
    const [drivingCost, setDrivingCost] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [method, setMethod] = useState(null);
    const [totalPayCost, setTotalPayCost] = useState(0);
    const [totalRentHours, setTotalRentHours] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [showDriverMessage, setShowDriverMessage] = useState(false);
    const {driverInfo, age} = location.state || {}; 

    const { firstName, lastName, userEmail, phone, gender, image, circleImage, nid, drivingLicense } = userInfo;

    const {
        area,
        district,
        division,
        initailDate, 
        initalTime, 
        toDate, 
        toTime, 
        upazilla,
        carData,
        agencyInfo
    } = location.state || {};

    const {
        agencyName,
        agencyAddress,
        businessRegNumber,
        insuranceLicenseNumber,
        numberOfVehicles,
        taxIdentificationNumber,
        transportLicenseNumber,
        userEmail: agencyEmail,
        agency_id
    } = agencyInfo || {};

    const carID = carData?._id
    const rentalPrice = carData?.rentalPrice


    useEffect(() => {
        const savedMethod = localStorage.getItem('method');

        if (savedMethod === 'driver') {
            setMethod('driver');
            setShowDriverMessage(true);
        } else if (savedMethod === 'self') {
            setMethod('self');
        }
    }, []);





    const handleChange = (e) => {
        setLoading(true);
        const drivingMethod = e.target.value
        if (drivingMethod === 'driver') {
            setShowDriverMessage(true);
        } else {
            setShowDriverMessage(false);
        }

        setMethod(drivingMethod);
        localStorage.setItem('method', drivingMethod);
        setMethod(drivingMethod);
          localStorage.setItem('method', drivingMethod);


        setTimeout(() => {
            const totalHours = calculateHoursDifference(initailDate, initalTime, toDate, toTime);
            setTotalRentHours(totalHours)

            const Cost = totalHours * carData?.rentalPrice / 24;
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


    const paymentInfo = {
        initailDate, 
        initalTime, 
        toDate, 
        toTime, 
        totalRentHours,
        totalPayCost,
        totalPayment,
        method,
        discount,
        drivingCost,
        userEmail,
        agencyEmail,
        agency_id,
        carID,
        rentalPrice,
        division,
        district,
        upazilla,
        area
    }

    return (
        <div className="flex flex-col lg:flex-row justify-between min-h-[calc(100vh-69px)]" >
            <Helmet>
                <title>Booking</title>
            </Helmet>
            <section className="lg:w-[65%] shadow-xl rounded-xl px-5 py-3">
                {/* upper section starts */}
                <header>
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-semibold font-merriweather">Your selected car</h1>
                            <div className="flex gap-5 border-b-2 border-primary border-dashed pb-3">
                                <p className=" font-nunito font-semibold flex gap-1 items-center"><FaCarSide className="text-primary text-lg" /> {carData?.brand} {carData?.model}</p>
                                <p className=" font-nunito font-semibold flex gap-1 items-center"> <MdAirlineSeatReclineNormal className="text-primary text-lg" /> Seats: {carData?.seat}</p>
                                <p className=" font-nunito font-semibold flex gap-1 items-center"> <SlCalender className="text-primary text-lg" /> Year: {carData?.buildYear}</p>
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
                        <img className="lg:w-[35%] rounded-xl shadow-xl mt-3" src={carData?.image} alt={carData?.brand} />

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
                                    <div className="flex flex-col items-start gap-2">
                                        <div className="flex items-center gap-2">
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                name="driving-method"
                                                id="driver"
                                                value="driver"
                                                checked={method === 'driver'}
                                            />
                                            <label htmlFor="driver">Need Driver</label>
                                        </div>

                                        {/* Conditionally render the Get Your Driver message */}
                                        {showDriverMessage && (
                                            <div className="mt-2">
                                                <Link to={'/driverList'}>
                                                    <button className="border-primary border p-1 text-xs rounded-md">Get your driver</button>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>

                        {isModalVisible && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-10">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-bold">Driver Selection</h2>
                                    <p>You have selected the <span className="text-lg font-semibold">Need Driver</span> option. Please proceed.</p>

                                    <DriverList role={'driver'}></DriverList>
                                    <button
                                        className="mt-4 bg-primary text-white p-2 rounded"
                                        onClick={() => setModalVisible(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}

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
                                <Tab>Driver Info</Tab>
                            </TabList>

                            <div className="mt-5">
                                <TabPanel>
                                    <CarData brand={carData?.brand} model={carData?.model} buildYear={carData?.buildYear} fuel={carData?.fuel} gear={carData?.gear} mileage={carData?.mileage} image={carData?.image} seats={carData?.seat} rentalPrice={carData?.rentalPrice} licenseNumber={carData?.licenseNumber} expireDate={carData?.expireDate} ></CarData>
                                </TabPanel>
                                <TabPanel className={`lg:ml-36`}>
                                    <AgencyData agencyName={agencyName} agencyAddress={agencyAddress} businessRegNumber={businessRegNumber} insuranceLicenseNumber={insuranceLicenseNumber} numberOfVehicles={numberOfVehicles} taxIdentificationNumber={taxIdentificationNumber} transportLicenseNumber={transportLicenseNumber} agencyEmail={agencyEmail} agency_id={agency_id}></AgencyData>
                                </TabPanel>
                                <TabPanel className={`lg:ml-[330px] lg:w-64`}>
                                    <BookingData area={area} district={district } division={division} fromDate={initailDate} fromTime={initalTime} untilDate={toDate} untilTime={toTime} upazilla={upazilla}></BookingData>
                                </TabPanel>
                                <TabPanel className={`lg:ml-[510px]`}>
                                    <UserData firstName={firstName} lastName={lastName} userEmail={userEmail} phone={phone} gender={gender} nid={nid} drivingLicense={drivingLicense} ></UserData>
                                </TabPanel>
                                <TabPanel className={`lg:ml-[510px]`}>
                                    <p><span className="font-bold">Driver Name</span>: {driverInfo?.firstName} {driverInfo?.lastName} </p>
                                    <p><span className="font-bold">Gender</span>: {driverInfo?.gender}</p>
                                    <p><span className="font-bold">Age</span>: {age}</p>
                                    <p><span className="font-bold">Email</span>: {driverInfo?.userEmail}</p>
                                    <span className="font-bold"><h1>phone: {driverInfo?.phone}</h1></span>

                                    <p className=" font-bold"><span className="font-bold">Address</span>:  {driverInfo?.userAddress.division} <span className="text-black">,</span> {driverInfo?.userAddress.district} <span className="text-black"></span>,{driverInfo?.userAddress.upazilla}</p>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </main>
                {/* lower section ends */}
            </section>

            {/* right part */}
            <section className=" lg:w-[33%] px-7 py-8 shadow-xl rounded-xl " >
                <PaymentData paymentInfo={paymentInfo}></PaymentData>
            </section >

        </div >

    );
};

export default BookingInfo;