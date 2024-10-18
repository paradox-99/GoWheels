
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', totalRequest: 400, totalReject: 40, totalRunning: 200 },
    { name: 'Feb', totalRequest: 500, totalReject: 60, totalRunning: 300 },
    { name: 'Mar', totalRequest: 700, totalReject: 80, totalRunning: 500 },
    { name: 'Apr', totalRequest: 800, totalReject: 50, totalRunning: 400 },
    { name: 'May', totalRequest: 900, totalReject: 90, totalRunning: 600 },
    { name: 'Jun', totalRequest: 1000, totalReject: 100, totalRunning: 800 },
];

const TotalInfoChart = () => {
    return (
        <div className='w-[40%] '>
            <ResponsiveContainer width="100%" height={435}>
                <LineChart
                    data={data}
                    margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalRequest" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="totalReject" stroke="#ff7300" />
                    <Line type="monotone" dataKey="totalRunning" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TotalInfoChart;
