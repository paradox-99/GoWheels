import { useEffect, useState } from 'react';
import CommonTable from './CommonTable';
import axios from 'axios';
import useDesignation from '../../hooks/useDesignation';
import { Helmet } from 'react-helmet-async';

const Bookings = () => {
    const { userInfo } = useDesignation();
    const userId = userInfo?._id;

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('Active'); 

  
    useEffect(() => {
        if (userId) {
            setLoading(true);
            const fetchBookings = async () => {
                try {
                    let url = `${import.meta.env.VITE_API_URL}/bookings/user/${userId}`;
                    if (activeTab === 'Completed') {
                        url += '?history=true';
                    }
                    const response = await axios.get(url);
                    setBookings(response.data);
                    setLoading(false);
                } catch (err) {
                    setError('Failed to fetch bookings');
                    setLoading(false);
                    console.log(err);
                }
            };

            fetchBookings();
        }
    }, [userId, activeTab]);
console.log(bookings);
    return (
        <div className='p-12'>
            <Helmet>
                <title>Active Bookings</title>
            </Helmet>
            <h2 className="text-3xl font-semibold mb-5">My Bookings</h2>
            <p className='mt-6 w-full lg:w-[600px]'>You can view your active bookings and completed booking history here. You can also add reviews for cars you have booked, once their status is marked as completed</p>
            <div className='relative  z-[2]  flex gap-6 border border-gray-500 mx-auto rounded-full w-[270px] py-2 justify-center mt-12 mb-8'>
                <div
                    className={`absolute w-[120px] h-[40px] bg-primary rounded-full transition-all duration-300 ease-in-out ${activeTab === 'Active' ? 'left-2' : 'left-[52%]'}`}
                ></div>

                <button
                    className={`px-10  py-2 rounded-full z-10 ${activeTab === 'Active' ? 'text-white' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('Active')}
                >
                    Active
                </button>
                <button
                    className={`px-3 mr-[16px] py-2 rounded-full z-10 ${activeTab === 'Completed' ? 'text-white' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('Completed')}
                >
                    Completed
                </button>
            </div>

            <CommonTable bookings={bookings}  loading={loading} error={error} />
        </div>
    );
};

export default Bookings;
