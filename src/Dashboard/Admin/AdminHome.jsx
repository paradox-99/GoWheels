/* eslint-disable react/jsx-key */
import { FaDollarSign, FaRegHandshake, FaUsers } from 'react-icons/fa';
import { LiaCarSideSolid } from 'react-icons/lia';
import UserActivityChart from './AdminComponent/UserActivityChart';
import TotalInfoChart from './AdminComponent/TotalnfoChart';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useEffect, useState } from 'react';
import BookingChart from './AdminComponent/BookingChart';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentFeedback, setCurrentFeedback] = useState(''); 
    const [totalInfo, setTotalInfo] = useState({});
    const axiosPublic = useAxiosPublic();
    const [reviews, setReviews] = useState([]);

    // console.log(reviews)
    const handleShowFeedback = (feedback) => {
        setCurrentFeedback(feedback); 
        setShowModal(true); 
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentFeedback('');
    };


    useEffect(() => {
        const fetchTotalInfo = async () => {
            try {
                const response = await axiosPublic.get('/totalInfo/totalInfo');
                setTotalInfo(response.data);
            } catch (error) {
                console.error('Error fetching total info:', error);
            }
        };
        fetchTotalInfo();
    }, [axiosPublic]);


    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axiosPublic.get('/reviewsRoute/reviews');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching total info:', error);
            }
        };

        fetchReviews();
    }, [axiosPublic]);


    return (
        <div className=" lg:px-20 mt-20 lg:p-5">
            <Helmet>
                <title>Dashboard || Admin</title>
            </Helmet>
            <section className='grid lg:px-10 lg:grid-cols-4 lg:gap-10 '>
                {/* total users */}
                <div className='p-2 rounded-lg shadow-lg shadow-slate-400 px-10 py-5'>
                    <FaUsers className='text-indigo-600 ' size={30}></FaUsers>
                    <p><span className='text-lg font-bold'>Total Users</span> </p>
                    <p className='text-xl'>{totalInfo.totalUsers}</p>
                </div>
                {/* total agency */}
                <div className=' rounded-lg shadow-lg shadow-slate-400 px-10 py-5'>
                    <FaRegHandshake className='text-amber-500 ' size={30}></FaRegHandshake>
                    <p><span className='text-lg font-bold'>Total agency</span> </p>
                    <p className='text-xl'>{totalInfo.totalAgencies}</p>
                </div>
                {/* total car */}
                <div className=' rounded-lg shadow-lg shadow-slate-400 px-10 py-5'>
                    <LiaCarSideSolid className='text-primary ' size={30} />

                    <p><span className='text-lg font-bold'>Total Cars</span> </p>
                    <p className='text-xl'>{totalInfo.totalCars}</p>
                </div>
                {/* total revenue */}
                <div className=' rounded-lg shadow-lg shadow-slate-400 px-10 py-5'>
                    <FaDollarSign className='text-fuchsia-700 ' size={30} />

                    <p><span className='text-lg font-bold'>Revenue</span> </p>
                    <p className='text-xl'>$ {totalInfo.totalRevenue}</p>
                </div>
            </section>
            {/* ************* */}
            {/* ************* */}
            <section className='mt-28 lg:w-[90%] lg:mx-auto border h-[54%] grid grid-cols-1 lg:grid-cols-2 '>
                <div className='w-full border-b border-black lg:p-10'>
                    <UserActivityChart></UserActivityChart>
                </div>
                <div className='border-l border-black lg:p-10'>
                    <TotalInfoChart></TotalInfoChart>
                </div>
                <div className='border-r border-black lg:p-10'>
                    <BookingChart></BookingChart>
                </div>
                <div className='border-t border-black lg:p-10'>
                    <div className="relative  flex flex-col w-full h-[380px] mx-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                        <div className=" p-10 overflow-y-scroll "> {/* Set a fixed height and enable vertical scroll */}
                            {reviews.map((review) => (
                                <div>
                                    <div key={review.id} className="flex justify-between p-2 border-b">
                                        <div className='flex items-center gap-4'>
                                            <img className="w-14 h-14 rounded-full" src={review.image} alt="" />
                                            <p>{review.name}</p>
                                        </div>
                                        <button
                                            className='border-primary p-1 border text-sm rounded-lg'
                                            onClick={() => handleShowFeedback(review.review)}>see feedback</button>
                                    </div>
                                    {showModal && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
                                            <div className="bg-white p-4 rounded-lg shadow-lg w-96">
                                                <h3 className="text-xl font-bold mb-2">User Feedback</h3>
                                                <p>{currentFeedback}</p>
                                                <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-stone-500 text-white rounded-lg">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            ))}
                        </div>
                    </div>
                    <h1 className='text-center mt-5 font-bold'>Show users feedback</h1>

                    {/* Modal */}

                </div>
            </section>
            {/* ************* */}
            <section>

            </section>

        </div>
    );
};

export default AdminHome;