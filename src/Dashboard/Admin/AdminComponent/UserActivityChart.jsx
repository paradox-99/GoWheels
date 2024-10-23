import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserRegistrationChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/user.json'); // Your API route
                const result = await response.json();

                // Month names for mapping
                const monthNames = [
                    "Jan", "Feb", "March", "April", "May", "June",
                    "July", "August", "Sept", "October", "November", "December"
                ];

                // Extract month and year from createdAt and count registrations
                const monthlyData = result.reduce((acc, user) => {
                    const createdAt = new Date(user.createdAt);
                    const month = monthNames[createdAt.getMonth()]; // Get month name
                    const year = createdAt.getFullYear(); // Get year
                    const monthYear = `${month} ${year}`; // e.g., "January 2024"

                    // Initialize the entry for the month if it doesn't exist
                    if (!acc[monthYear]) {
                        acc[monthYear] = { month: monthYear, registered: 0 };
                    }
                    acc[monthYear].registered += 1; // Count registrations

                    return acc;
                }, {});

                // Convert the object back to an array
                const formattedData = Object.values(monthlyData);

                // Filter to get only the first 6 months of the current year
                const currentYear = new Date().getFullYear(); // Get the current year
                const filteredData = formattedData.filter(dataPoint => {
                    const [month, year] = dataPoint.month.split(' ');
                    return year == currentYear && monthNames.indexOf(month) < 6; // First 6 months
                });

                setData(filteredData);
            } catch (error) {
                console.error("Error fetching user registration data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className=' mt-10'>
            <ResponsiveContainer height={400}>
                <BarChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis
                        domain={[0]} 
                        ticks={[0, 2, 4, 6, 8, 10, 12]} 
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="registered" fill="#82ca9d" name="Registered Users" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UserRegistrationChart;
