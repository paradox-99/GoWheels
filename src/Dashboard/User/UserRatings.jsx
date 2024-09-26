import React, { useState } from 'react';
import { FaStar, FaEdit } from 'react-icons/fa';

//data : todo
const reviewsData = [
    {
        id: 1,
        car: "Tesla Model S",
        reviewText: "Amazing experience driving the Tesla. Highly recommend!",
        rating: 5,
    },
    {
        id: 2,
        car: "BMW 5 Series",
        reviewText: "Great ride but the seats were not very comfortable.",
        rating: 4,
    },
    {
        id: 3,
        car: "Audi Q5",
        reviewText: "The car was good, but the fuel efficiency wasn't great.",
        rating: 3,
    }
];

const UserRatings = () => {
    const [reviews, setReviews] = useState(reviewsData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);

    // State for editing review
    const [editReviewText, setEditReviewText] = useState('');
    const [editRating, setEditRating] = useState(0);

 
    const handleEditClick = (review) => {
        setSelectedReview(review);
        setEditReviewText(review.reviewText);
        setEditRating(review.rating);
        setIsModalOpen(true);
    };

    //  text change
    const handleReviewTextChange = (e) => {
        setEditReviewText(e.target.value);
    };

    //  star rating change
    const handleRatingChange = (rating) => {
        setEditRating(rating);
    };

    // Save the edited review
    const handleSaveReview = () => {
        const updatedReviews = reviews.map((r) =>
            r.id === selectedReview.id ? { ...r, reviewText: editReviewText, rating: editRating } : r
        );
        setReviews(updatedReviews);
        setIsModalOpen(false);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Your Reviews</h1>
            <div className="space-y-4">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white p-4 rounded-lg flex justify-between items-center"
                        style={{ boxShadow: '0 20px 50px #FEF2F2' }} 
                    >
                        <div>
                            <h3 className="text-xl font-semibold">{review.car}</h3>
                            <p className="text-gray-600">{review.reviewText}</p>
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={`mr-1 ${index < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={() => handleEditClick(review)}
                            className="flex items-center text-primary hover:underline"
                        >
                            <FaEdit className="mr-1" /> Edit
                        </button>
                    </div>
                ))}
            </div>

            {/* Edit Review Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96" style={{ boxShadow: '0 6px 12px rgba(255, 0, 0, 0.3)' }}>
                        <h2 className="text-2xl font-bold mb-4">Edit Review</h2>
                        <textarea
                            value={editReviewText}
                            onChange={handleReviewTextChange}
                            className="w-full p-2 border rounded mb-4"
                            rows="4"
                            placeholder="Edit your review"
                        ></textarea>

                        <div className="flex items-center mb-4">
                            <span className="mr-2">Rating: </span>
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    onClick={() => handleRatingChange(index + 1)}
                                    className={`mr-1 cursor-pointer ${index < editRating ? 'text-yellow-400' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveReview}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserRatings;