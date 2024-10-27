import { useEffect, useState } from 'react';
import { BsFuelPumpFill } from 'react-icons/bs';
import { FaCarSide,  } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { PiSeatFill } from 'react-icons/pi';
import { TbManualGearboxFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { RxCross2 } from 'react-icons/rx';

const CommonCarCard = ({ car }) => {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [showModal, setShowModal] = useState(false); 
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axiosPublic.get(`/feedbackRoute/feedbacks/${car._id}`);
                setReviews(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchReviews();
    }, [car, axiosPublic]);

    const review = { rating: 4 };

    return (
        <div className="border border-[#FFE2DE] group rounded-xl p-6">
            <img
                src={car.image}
                alt={`${car.car} ${car.model}`}
                className="w-[280px] group-hover:scale-105 duration-500 h-[180px] object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-2 relative"

            >
                <div className='cursor-pointer py-1'
                    onClick={() => setShowModal(true)}>
                    <p>({reviews?.length})</p>
                </div>
                <div
                    onClick={() => setShowModal(true)} className='flex py-1 cursor-pointer'>
                    {Array.from({ length: 5 }, (_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`size-3 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.897c.969 0 1.371 1.24.588 1.81l-3.96 2.881a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.96-2.881a1 1 0 00-1.176 0l-3.96 2.881c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L.845 9.102c-.783-.57-.38-1.81.588-1.81h4.897a1 1 0 00.95-.69l1.518-4.674z" />
                        </svg>
                    ))}
                </div>


                {showModal && (
                    <div
                        className="fixed inset-0 z-20 overflow-hidden flex items-center justify-center bg-black bg-opacity-30"
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className=' relative bg-gray-50 rounded-lg shadow-xl max-h-[90vh] w-full sm:max-w-4xl sm:w-full overflow-auto'>
                            <button
                                className="absolute top-3 right-3 text-primary hover:text-red-400"
                                onClick={() => setShowModal(false)}
                            >
                                <RxCross2 size={24} />
                            </button>
                            <div className='m-6'>
                                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
                                    {loading ? (
                                        // loader
                                        Array.from({ length: 6 }).map((_, index) => (
                                            <div key={index} className='p-6 bg-white animate-pulse'>
                                                <div className="flex justify-between">
                                                    <div className="flex gap-3">
                                                        <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
                                                        <div>
                                                            <div className='w-24 h-4 bg-gray-300 rounded-md mb-2'></div>
                                                            <div className='w-16 h-3 bg-gray-200 rounded-md'></div>
                                                        </div>
                                                    </div>
                                                    <div className='mt-4 flex'>
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <div key={i} className='w-4 h-4 bg-gray-300 rounded-md'></div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className='mt-4 w-full h-12 bg-gray-200 rounded-md'></div>
                                                <div className='mt-4 w-full h-40 bg-gray-300 rounded-md'></div>
                                                <div className='mt-4 w-3/4 h-8 bg-gray-100 rounded-md'></div>
                                            </div>
                                        ))
                                    ) : (reviews.length === 0 ? (<p>No Reviews</p>) :

                                        reviews?.map((review, index) => (
                                            <div key={index} className='p-6 border rounded-xl'>
                                                <div className="flex justify-between">
                                                    <div className="flex gap-3">
                                                        <img
                                                            src={review.userImage}
                                                            alt={review.userName}
                                                            className='w-10 h-10 rounded-full shadow-md object-cover border border-primary'
                                                        />
                                                        <div>
                                                            <h3 className='font-semibold text-heading'>
                                                                {review.userName}
                                                            </h3>
                                                            <p className='text-sm text-gray-500'>{new Date(review.date).toDateString()}</p>
                                                        </div>
                                                    </div>
                                                    <div className='mt-4 flex'>
                                                        {Array.from({ length: 5 }, (_, i) => (
                                                            <svg
                                                                key={i}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className={`size-3 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.897c.969 0 1.371 1.24.588 1.81l-3.96 2.881a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.96-2.881a1 1 0 00-1.176 0l-3.96 2.881c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L.845 9.102c-.783-.57-.38-1.81.588-1.81h4.897a1 1 0 00.95-.69l1.518-4.674z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </div>

                                                <p className='mt-4 text-gray-700 text-sm leading-relaxed'>{review.review}</p>

                                                {review.reviewImage && (
                                                    <div className='mt-4'>
                                                        <img
                                                            src={review.reviewImage}
                                                            alt='Review'
                                                            className='w-full h-40 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300'
                                                        />
                                                    </div>
                                                )}


                                                <div className='mt-4 bg-gray-100 p-3 rounded-md shadow-inner'>
                                                    <p className='text-xs text-gray-600 italic'>
                                                        <span className='font-semibold text-primary'>Agency Response:</span> {review.agencyResponse ? review.agencyResponse : "No Response"}
                                                    </p>
                                                </div>

                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <h2 className="text-xl font-semibold">
                {car.brand} {car.model} ({car.buildYear})
            </h2>
            <div className="grid grid-cols-2 gap-3 font-medium py-4">
                <p className="flex gap-1 lg:gap-4 items-center">
                    <FaCarSide className="text-primary" />{" "}
                    <span className="pl-1">{car.brand}</span>
                </p>
                <p className="flex gap-1 lg:gap-4 items-center">
                    <BsFuelPumpFill className="text-primary" />{" "}
                    <span className="pl-1">{car.fuel}</span>
                </p>
                <p className="flex gap-1 lg:gap-4 items-center">
                    <PiSeatFill className="text-primary" />
                    <span className="pl-1">{car.seat}</span>
                </p>
                <p className="flex gap-1 lg:gap-4 items-center">
                    <TbManualGearboxFilled className="text-primary" />
                    <span className="pl-1">{car.gear}</span>
                </p>
            </div>
            <div className="flex justify-end hover:translate-x-1 duration-300">
                <Link className="text-primary flex items-center gap-1 font-semibold px-2 py-1 text-sm" to={`/view-details/${car._id}`}>
                    View Details <MdKeyboardArrowRight className="text-lg mt-[1px]" />
                </Link>
            </div>
        </div>
    );
};

export default CommonCarCard;
