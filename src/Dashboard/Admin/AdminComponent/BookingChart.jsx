import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"; // Import necessary components
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

            // Prepare data for the pie chart
            const formattedData = bookingCounts.map(item => ({
                name: item._id,  // Status name (e.g., Completed, Pending, Confirmed)
                value: item.count // Number of bookings with this status
            }));

            setData(formattedData);
        };

        fetchBookingCounts();
    }, [axiosPublic]);

    return (
        <div className="">

            <PieChart width={500} height={350}>
                <Pie className=""
                    data={data}
                    cx={250} // Center X
                    cy={150} // Center Y
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 10).toFixed(0)}%`} // Display percentage
                    outerRadius={110} // Radius of the Pie
                    fill="#8884d8"
                    dataKey="value"
                // Value to determine the slice size
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
            <h1 className="text-center font-bold">Total order</h1>
        </div>
    );
};

export default BookingChart;
