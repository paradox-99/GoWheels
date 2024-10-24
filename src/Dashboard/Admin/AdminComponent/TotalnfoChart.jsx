
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const TotalInfoChart = () => {

    const [data, setData] = useState([]);
    const axiosPublic = useAxiosPublic()
    // console.log(data)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get('/totalInfo/totalRoles'); 
                const formattedData = response.data.map(role => ({
                    name: role._id ? role._id.charAt(0).toUpperCase() + role._id.slice(1) : 'Unknown', 
                    count: role.count || 0  
                }));
    
                setData(formattedData);
            } catch (error) {
                console.error('Error fetching role counts:', error);
            }
        };
    
        fetchData();
    }, [axiosPublic]);
    



    return (
        <div className=''>
            <ResponsiveContainer width="100%" height={435}>
                <LineChart
                    data={data}
                    margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis
                        domain={[0]}
                        ticks={[0, 2, 4, 6, 8, 10, 12]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" name='Total Role count' stroke="#d95936" activeDot={{ r: 10 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TotalInfoChart;
