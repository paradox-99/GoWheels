import { useState } from 'react';
import { FaPen, FaStar } from 'react-icons/fa';
import useDesignation from '../../hooks/useDesignation';
import axios from 'axios';
import toast from 'react-hot-toast';


const ReviewModal = ({ isOpen, onClose, booking }) => {
    const { userInfo } = useDesignation();
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    // console.log("agency_id", booking);
    if (!isOpen) return null;

    const handleRatingChange = (rating) => {
        setRating(rating);
    };

    const handleReviewTextChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            userId: userInfo?._id,
            carId: booking.carId,
            carName: booking?.name,
            userName: userInfo?.firstName + " " + userInfo?.lastName,
            userImage: userInfo?.image,
            carImage: imageUrl,
            review: reviewText,
            rating: rating,
            agency_id: booking?.agency_id,
            agencyResponse: "",
        };
        console.log("reviewData",reviewData);
        try {
            console.log(reviewData);
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/feedbackRoute/feedback`, reviewData);

            if (response.status === 200) {
                toast.success("Feedback Placed successfully")
                onClose();
            } else {
                console.error("Error submitting review:", response.data.message);
            }
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-96">
                <h3 className="text-lg font-semibold mb-4">Add Review for {booking?.name}</h3>
                <form onSubmit={handleSubmit}>
                    {/* Ratings input */}
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium">Rating</label>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    onClick={() => handleRatingChange(index + 1)}
                                    className={`cursor-pointer ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Review Text */}
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium">Review</label>
                        <textarea
                            value={reviewText}
                            onChange={handleReviewTextChange}
                            className="w-full p-2 border rounded-md"
                            rows="4"
                            placeholder="Write your review"
                        />
                    </div>

                    {/* Image URL Input */}
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium">Car Image URL</label>
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={handleImageUrlChange}
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter the car image URL"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="bg-gray-500 text-white py-1 px-4 rounded-md">Cancel</button>
                        <button type="submit" className="bg-primary text-white py-1 px-4 rounded-md">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const CommonTable = ({ bookings, loading, error }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    console.log(selectedBooking);
    const handleAddReviewClick = (booking) => {
        setSelectedBooking(booking);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBooking(null);
    };
    if (loading) {
        return (
            <div className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-100 text-gray-500 text-sm leading-normal">
                                {/* Table headings */}
                                <th className="py-3 px-6 text-left">Car</th>
                                <th className="py-3 px-6 text-left">Booking Date</th>
                                <th className="py-3 px-6 text-left">Drop-off Date</th>
                                <th className="py-3 px-6 text-left">Status</th>
                                <th className="py-3 px-6 text-left">Pickup Location</th>
                                <th className="py-3 px-6 text-left">Drop-off Location</th>
                                <th className="py-3 px-6 text-left">Price</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                            {Array(5).fill("").map((_, index) => (
                                <tr key={index} className="border-b  odd:bg-white group even:text-black even:bg-white border-red-50 hover:bg-gray-100 animate-pulse">
                                    <td className="py-3 px-6">
                                        <div className="w-24 h-12 bg-gray-300 rounded-md"></div>
                                        <div className="h-4 bg-gray-300 rounded mt-2"></div>
                                    </td>
                                    <td className="py-3 px-6">
                                        <div className="h-4 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="py-3 px-6">
                                        <div className="h-4 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="py-3 px-6">
                                        <div className="h-4 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="py-3 px-6">
                                        <div className="h-4 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="py-3 px-6">
                                        <div className="h-4 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="py-3 px-6">
                                        <div className="h-4 bg-gray-300 rounded"></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    if (error) {
        return <p className="text-center text-red-600">{error}</p>;
    }
    if (bookings.message) {
        return (
            <div className="flex items-center justify-center h-[400px]">
                <p className="text-center text-xl text-gray-500">
                    {bookings.message}
                </p>
            </div>
        );

    }
    return (
        <div className="container mx-auto">
            {bookings?.userBookings.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 font-nunito text- leading-normal">
                                <th className="py-3 px-6 text-left">Car</th>
                                <th className="py-3 px-6 text-left">Booking Date</th>
                                <th className="py-3 px-6 text-left">Drop-off Date</th>
                                <th className="py-3 px-6 text-left">Status</th>
                                <th className="py-3 px-6 text-left">Drop-off Location</th>
                                <th className="py-3 px-6 text-left">Price</th>
                                <th className="py-3 px-6 text-left"></th>
                            </tr>
                        </thead>
                        <tbody className=" text-sm">
                            {bookings.userBookings.map((booking) => (
                                <tr key={booking._id} className="border-b odd:bg-white group even:text-black even:bg-white border-red-50 hover:bg-gray-100">
                                    <td className="py-3 font-semibold px-6">
                                        <img src={booking.image} className="rounded-md h-16 w-22 object-cover mb-2" alt="" />
                                        {booking.name}
                                    </td>
                                    <td className="py-3 px-6">{new Date(booking.bookingDate).toLocaleDateString()}</td>
                                    <td className="py-3 px-6">{new Date(booking.dropoffDate).toLocaleDateString()}</td>
                                    <td className={`py-3 px-6`}>
                                        <span
                                            className={`px-3 rounded-full py-1 ${booking.status === 'Confirmed' && 'bg-green-50 text-green-500'
                                                } ${booking.status === 'Pending' && 'bg-yellow-50 text-yellow-500'
                                                } ${booking.status === 'Completed' && 'bg-blue-50 text-blue-500'
                                                } ${booking.status === 'Cancelled' && 'bg-red-50 text-red-500'
                                                }`}
                                        >
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-6">{booking.pickupLocation}</td>
                                    <td className="py-3 px-6 font-semibold">৳ {booking.price * 120}</td>
                                    {/*  Review Button */}
                                    {booking.status === "Completed" && (
                                        <td className="py-3 px-6 text-gray-600 font-semibold">
                                            <button
                                                className="flex items-center gap-1 text-red-400 px-2 py-1 border rounded-lg "
                                                onClick={() => handleAddReviewClick(booking)}
                                            >
                                                <FaPen className="inline-block" /> Add Review
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-600">No bookings found.</p>
            )}

            <ReviewModal isOpen={isModalOpen} onClose={handleCloseModal} booking={selectedBooking} />
        </div>
    );
};

export default CommonTable;
