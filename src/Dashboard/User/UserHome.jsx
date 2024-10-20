import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useDesignation from '../../hooks/useDesignation';
import { TbManualGearboxFilled } from 'react-icons/tb';
import { PiSeatFill } from 'react-icons/pi';
import { BsFuelPumpFill } from 'react-icons/bs';
import { FaCarSide } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsCheckCircleFill } from 'react-icons/bs';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaCarAlt } from 'react-icons/fa';

const UserHome = () => {
    const [bookedCars, setBookedCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userInfo } = useDesignation();
    const userId = userInfo?._id;
    const [activePaid, setActivePaid] = useState(0);
    const [completedPaid, setCompletedPaid] = useState(0);
    const [totalPaid, setTotalPaid] = useState(0);
    const [activeBookings, setActiveBookings] = useState(0);
    const [pending, setPending] = useState(0);
    const [confirm, setConfirm] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [cancelled, setCancelled] = useState(0);

    // useEffect(() => {
    //     if (userId) {
    //         const fetchBookedCars = async () => {
    //             try {
    //                 const response = await axios.get(`http://localhost:3000/api/bookings/user/${userId}/booked-cars`);
    //                 const cars = response.data.bookedCars;
    //                 setBookedCars(cars);

    //                 const activeResponse = await axios.get(`http://localhost:3000/api/bookings/user/670768680fc10c9627cccae9`);
    //                 setActiveBookings(activeResponse?.data.userBookings.length || 0);
    //                 const completedResponse = await axios.get(`http://localhost:3000/api/bookings/user/670768680fc10c9627cccae9?history=true`);

    //                 const activePaidAmount = activeResponse?.data.userBookings.reduce((acc, car) => acc + car.price, 0);
    //                 const completedPaidAmount = completedResponse?.data.userBookings.reduce((acc, car) => acc + car.price, 0);
    //                 const totalPaidAmount = activePaidAmount + completedPaidAmount;
    //                 // console.log(totalPaidAmount);
    //                 setActivePaid(activePaidAmount)
    //                 setCompletedPaid(completedPaidAmount)
    //                 setTotalPaid(totalPaidAmount)
    //                 const pending = activeResponse?.data.userBookings.filter(car => car.status === 'Pending').length;
    //                 // console.log(pending);
    //                 setPending(pending)
    //                 const confirmed = activeResponse?.data.userBookings.filter(car => car.status === 'Confirmed').length;
    //                 console.log(confirmed);
    //                 setConfirm(confirmed)

    //                 const completed = completedResponse?.data.userBookings.filter(car => car.status === 'Completed').length;
    //                 setCompleted(completed)
    //                 const cancelled = completedResponse?.data.userBookings.filter(car => car.status === 'Cancelled').length;
    //                 setCancelled(cancelled)
    //                 setLoading(false);
    //             } catch (error) {
    //                 console.error('Error fetching booked cars:', error);
    //                 setLoading(false);
    //             }
    //         };

    //         fetchBookedCars();
    //     }
    // }, [userId]);
    return (
        <div className="min-h-screen !font-sans bg-gradient-to-r p-12">
            <div className="mb-12">
                <h1 className="text-4xl animate-fade-in-down">Welcome Back, { userInfo.lastName}!</h1>
                <p className="mt-4 text-lg opacity-90">We’re glad to see you again. Let’s get you moving!</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white shadow-md rounded-lg p-6 ">
                    <h3 className="mb-5">Total Spent</h3>
                    <hr />
                    <div>
                        <p className="text-4xl text-gray-600 mt-6 pb-6 text font-bold">${totalPaid.toFixed(2)}</p>
                    </div>
                    <div>
                        <div className='flex gap-4 items-center'>
                            <div className='flex items-center gap-2'>
                                <div className="bg-yellow-400 size-2 rounded-full" />
                                <p>Due: $0.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6  gap-4">
                    <h3 className="mb-5">Active Bookings (${activePaid.toFixed(2)})</h3>
                    <hr />
                    <div>
                        <p className="text-2xl mt-6 pb-6 font-bold">Ongoing: {activeBookings}</p>
                        <div className='flex gap-4 items-center'>
                            <div className='flex items-center gap-2'>
                                <div  className="bg-yellow-400 size-2 rounded-full" />
                                <p>Pending ({pending})</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className="bg-green-400 size-2 rounded-full" />
                                <p>Active ({confirm})</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6  gap-4">
                    <h3 className="mb-5">Completed Bookings (${completedPaid.toFixed(2)})</h3>
                    <hr />
                    <div>
                        <p className="text-2xl mt-6 pb-6 font-bold">Completed: {activeBookings}</p>
                        <div className='flex gap-4 items-center'>
                            <div className='flex items-center gap-2'>
                                <div  className="bg-blue-500 size-2 rounded-full" />
                                <p>Succeeded ({completed})</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className="bg-green-400 size-2 rounded-full" />
                                <p>Cancelled ({cancelled})</p>
                                </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Previously Booked Cars */}
            <div className="mt-16">
                <h1 className="text-3xl font-bold text-gray-700 mb-6">
                    Cars That You <span className='text-primary'>Booked <br /> Recently</span>
                </h1>
                <div className='h-[2px] w-12 bg-primary -mt-2'></div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 pt-12 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <p>Loading...</p>
                    ) : bookedCars?.length < 1 ? (
                        <p>You have not booked any cars yet.</p>
                    ) : (
                        bookedCars.map((car) => (
                            <div key={car._id} className="bg-white shadow-md group rounded-lg p-4">
                                <img
                                    src={car.vehicle_info.photo}
                                    alt={`${car.vehicle_info.brand} ${car.vehicle_info.model}`}
                                    className="w-full group-hover:scale-105 duration-500 h-48 object-cover rounded-md mb-4"
                                />
                                <h2 className="text-xl font-semibold">
                                    {car.vehicle_info.brand} {car.vehicle_info.model} ({car.vehicle_info.build_year})
                                </h2>
                                <div className="grid grid-cols-2 gap-3  font-medium py-4 ">
                                    <p className="flex gap-1 lg:gap-4 items-center">
                                        <FaCarSide className="text-primary" />{" "}
                                        <span className="pl-1">
                                            {car.vehicle_info.brand}
                                        </span>
                                    </p>
                                    <p className="flex gap-1 lg:gap-4 items-center">
                                        <BsFuelPumpFill className="text-primary" />{" "}
                                        <span className="pl-1">
                                            {car.vehicle_info.fuel}
                                        </span>
                                    </p>
                                    <p className="flex gap-1 lg:gap-4 items-center">
                                        <PiSeatFill className="text-primary" />
                                        <span className="pl-1">
                                            {car.vehicle_info.seats}
                                        </span>
                                    </p>
                                    <p className="flex gap-1 lg:gap-4 items-center">
                                        <TbManualGearboxFilled className="text-primary" />
                                        <span className="pl-1">
                                            {car.vehicle_info.gear}
                                        </span>
                                    </p>
                                </div>
                                <div className='flex justify-end hover:translate-x-1 duration-300'>
                                    <Link className='text-primary flex items-center gap-1 font-semibold px-2 py-1 text-sm' to={`/view-details/${car._id}`}>
                                        View Details <MdKeyboardArrowRight className='text-lg mt-[1px]' />
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div> */}
            </div>
        </div>
    );
};

export default UserHome;
