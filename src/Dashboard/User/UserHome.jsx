
import { Line } from 'react-chartjs-2';
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

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserHome = () => {
    // Mock data for the graph
    const totalBookings = 12;
    const pendingBookings = 3;
    const confirmedBookings = 8;

    // Line chart data
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
        <div className="min-h-screen bg-gradient-to-r  py-12">
            <div className=" mb-12">
                <h1 className="text-4xl animate-fade-in-down">Welcome Back, Munna!</h1>
                <p className="mt-4 text-lg opacity-90">We’re glad to see you again. Let’s get you moving!</p>
            </div>

            {/* Line Chart Section */}
            <div className="max-w-6xl mx-auto px-6 mt-16">
                <div className=" ">
                    <h3 className="text-3xl font-bold text-gray-700 mb-6">My Booking Trends</h3>
                    <div className="relative">
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserHome;
