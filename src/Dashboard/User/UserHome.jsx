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
import CommonCarCard from './CommonCarCard';
import { Helmet } from 'react-helmet-async';

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

    useEffect(() => {
        if (userId) {
            const fetchBookedCars = async () => {
                try {
<<<<<<< HEAD
                    const response = await axios.get(`http://localhost:3000/api/bookings/user/${userID}/booked-cars`);
                    console.log(response.data)
                    setBookedCars(response.data?.bookedCars);
=======
                    const response = await axios.get(`${import.meta.env.VITE_API_URL}/bookings/user/${userId}/booked-cars`);
                    const cars = response.data.bookedCars;
                    setBookedCars(cars);

                    const activeResponse = await axios.get(`${import.meta.env.VITE_API_URL}/bookings/user/670768680fc10c9627cccae9`);
                    setActiveBookings(activeResponse?.data.userBookings.length || 0);
                    const completedResponse = await axios.get(`${import.meta.env.VITE_API_URL}/bookings/user/670768680fc10c9627cccae9?history=true`);

                    const activePaidAmount = activeResponse?.data.userBookings.reduce((acc, car) => acc + car.price, 0);
                    const completedPaidAmount = completedResponse?.data.userBookings.reduce((acc, car) => acc + car.price, 0);
                    const totalPaidAmount = activePaidAmount + completedPaidAmount;
                    // console.log(totalPaidAmount);
                    setActivePaid(activePaidAmount)
                    setCompletedPaid(completedPaidAmount)
                    setTotalPaid(totalPaidAmount)
                    const pending = activeResponse?.data.userBookings.filter(car => car.status === 'Pending').length;
                    // console.log(pending);
                    setPending(pending)
                    const confirmed = activeResponse?.data.userBookings.filter(car => car.status === 'Confirmed').length;
                    console.log(confirmed);
                    setConfirm(confirmed)

                    const completed = completedResponse?.data.userBookings.filter(car => car.status === 'Completed').length;
                    setCompleted(completed)
                    const cancelled = completedResponse?.data.userBookings.filter(car => car.status === 'Cancelled').length;
                    setCancelled(cancelled)
>>>>>>> ec011bd69ddec75dc5029ffd7534b56026ea726d
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching booked cars:', error);
                    setLoading(false);
                }
            };

            fetchBookedCars();
        }
<<<<<<< HEAD

    }, [userID]);

    // Mock data for the graph
    const totalBookings = 12;
    const pendingBookings = 3;
    const confirmedBookings = 8;

    console.log(bookedCars)


    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Total Bookings',
                data: [5, 9, 12, 10, 14, 15, totalBookings],
                borderColor: '#4ADE80',
                backgroundColor: 'rgba(74, 222, 128, 0.2)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
            },
            {
                label: 'Pending Bookings',
                data: [2, 3, 4, 2, 3, 4, pendingBookings],
                borderColor: '#FCD34D',
                backgroundColor: 'rgba(252, 211, 77, 0.2)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
            },
            {
                label: 'Confirmed Bookings',
                data: [3, 5, 6, 8, 10, 11, confirmedBookings],
                borderColor: '#60A5FA',
                backgroundColor: 'rgba(96, 165, 250, 0.2)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#ffffff',
                    font: {
                        size: 14,
                    },
                },
            },
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: { size: 16, weight: 'bold' },
                bodyFont: { size: 14 },
                cornerRadius: 8,
                padding: 10,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#ffffff',
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    color: '#ffffff',
                },
            },
            y: {
                ticks: {
                    color: '#ffffff',
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    color: '#ffffff',
                },
            },
        },
    };

=======
    }, [userId]);
    console.log(bookedCars);
>>>>>>> ec011bd69ddec75dc5029ffd7534b56026ea726d
    return (
        <div className="min-h-screen !font-sans bg-gradient-to-r p-12">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="mb-12">
                <h1 className="text-4xl animate-fade-in-down">Welcome Back, {userInfo.lastName}!</h1>
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
                                <div className="bg-yellow-400 size-2 rounded-full" />
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
                                <div className="bg-blue-500 size-2 rounded-full" />
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
                <div className="grid grid-cols-1 md:grid-cols-2 pt-12 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <p>Loading...</p>
                    ) : bookedCars?.length < 1 ? (
                        <p>You have not booked any cars yet.</p>
                    ) : (
                        bookedCars.map((car) => (
                            <CommonCarCard key={car._id} car={car}></CommonCarCard>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserHome;
