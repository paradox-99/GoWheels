import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Link } from 'react-router-dom';
import useDesignation from '../../hooks/useDesignation';
import { TbManualGearboxFilled } from 'react-icons/tb';
import { PiSeatFill } from 'react-icons/pi';
import { BsFuelPumpFill } from 'react-icons/bs';
import { FaCarSide } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserHome = () => {
    const [bookedCars, setBookedCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userInfo } = useDesignation();
    const userID = userInfo?._id;

    useEffect(() => {

        if (userID) {
            const fetchBookedCars = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/bookings/user/${userID}/booked-cars`);
                    console.log(response.data)
                    setBookedCars(response.data?.bookedCars);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching booked cars:', error);
                    setLoading(false);
                }
            };

            fetchBookedCars();
        }

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

    return (
        <div className="min-h-screen bg-gradient-to-r p-12">
            <div className="mb-12">
                <h1 className="text-4xl animate-fade-in-down">Welcome Back!</h1>
                <p className="mt-4 text-lg opacity-90">We’re glad to see you again. Let’s get you moving!</p>
            </div>

            {/* Line Chart Section */}
            <div className="max-w-6xl mx-auto px-6 mt-16">
                <div className="">
                    <h3 className="text-3xl font-bold text-gray-700 mb-6">My Booking Trends</h3>
                    <div className="relative">
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h1 className="text-3xl font-bold text-gray-700 mb-6">Cars That You <span className='text-primary'>Booked <br /> Previously</span></h1>
                <div className='h-[2px] w-12 bg-primary -mt-2'></div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-12 lg:grid-cols-3 gap-8">
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
                                    <Link className='text-primary flex items-center gap-1 font-semibold px-2 py-1 text-sm' to={`/view-details/${car._id}`}>View Details <MdKeyboardArrowRight className='text-lg mt-[1px]' /></Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserHome;
