import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"; // Import necessary components
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const BookingChart = () => {
    const [data, setData] = useState([]);
    const axiosPublic = useAxiosPublic();

    // Define colors for the pie chart
    const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];

    useEffect(() => {
        const fetchBookingCounts = async () => {
            const response = await axiosPublic.get('/totalInfo/totalBookings');
            const bookingCounts = response.data;
            const formattedData = bookingCounts.map(item => ({
                name: item._id,
                value: item.count
            }));

            setData(formattedData);
        };

        fetchBookingCounts();
    }, [axiosPublic]);

    return (
        <div className="w-full p-4"> {/* Full width on all screens */}
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-full lg:max-w-2xl mx-auto"> {/* Limit width on larger screens */}
                <ResponsiveContainer width="100%" height={350}> {/* Responsive chart container */}
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%" // Center horizontally
                            cy="50%" // Center vertically
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} // Show percentage
                            outerRadius="80%" // Adjust for responsiveness
                            fill="#8884d8"
                            dataKey="value" // Ensure the correct dataKey is set
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
                <h1 className="text-center font-bold text-lg mt-4">Total Orders</h1>
            </div>
        </div>
    );
};

export default BookingChart;
