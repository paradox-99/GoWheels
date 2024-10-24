import { Helmet } from "react-helmet-async";
import useDesignation from "../../hooks/useDesignation";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const ReviewFromCustomer = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);
    const { userInfo } = useDesignation();
    const agency_id = userInfo?.agency_id;

    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/feedbackRoute/feedbacks/${agency_id}?agency=true`);
                setReviews(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setIsLoading(false);
            }
        };

        fetchReviews();
    }, [agency_id, reload]);

    const handleResponseSubmit = async (reviewId, response) => {
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/feedbackRoute/feedback/${reviewId}?agency=true`, { agencyResponse: response });

            if (data.modifiedCount === 1) {
                toast.success('Response sent successfully');
                setReload(!reload);
            }
        } catch (error) {
            console.error('Error submitting response:', error);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Review from Customers</title>
            </Helmet>

            <div className="mt-12 lg:px-12">
                <h1 className="text-4xl mb-8">My Customer Reviews</h1>

                {isLoading ? (
                    <img className="w-48" src={"/loading2.gif"} alt="Loading" />
                ) : (
                    <div className="">
                        {reviews
                            .sort((a, b) => (a.agencyResponse ? 1 : -1))
                            .map(review => (
                                <div key={review._id} style={{ boxShadow: "0px 0px 20px #D9DADA" }} className="p-6 my-12 rounded-lg w-full">

                                    <div className="flex justify-between mt-4">
                                        <div className="flex w-[600px] space-x-4">
                                            <img src={review.userImage} alt={review.userName} className="size-10 rounded-full" />
                                            <div>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <h2 className="font-semibold">{review.userName}</h2>
                                                        <p className="text-sm">{new Date(review.date).toLocaleDateString()}</p>
                                                    </div>
                                                    <div className="flex gap-4 items-center">
                                                        <p className="">Overall Rating :</p>
                                                        <div className="flex">
                                                            {[...Array(5)].map((_, index) => (
                                                                <FaStar
                                                                    key={index}
                                                                    className={`mr-1 text-xs ${index < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-8  -ml-16">
                                                    <p className="mt-2">Review :</p>
                                                    <div className="mt-2 border rounded-xl w-full p-6 ml-6 text-lg font-light">
                                                        <p>{review.review}</p>

                                                        {review.agencyResponse ? (
                                                            <div className="mt-4 w-[500px] p-4 bg-green-100 text-green-700 rounded">
                                                                <strong>Your Response:</strong> {review.agencyResponse}
                                                            </div>
                                                        ) : (
                                                            <ResponseForm reviewId={review._id} onSubmit={handleResponseSubmit} />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[300px]">
                                            <h3 className="left-4 bottom-4 text-2xl font-semibold px-2 py-1 rounded">
                                                {review.carName}
                                            </h3>
                                            <img src={review.reviewImage} alt={review.carName} className="w-full h-[200px] mt-4 object-cover rounded-lg" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const ResponseForm = ({ reviewId, onSubmit }) => {
    const [response, setResponse] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showRedShadow, setShowRedShadow] = useState(false);

    useEffect(() => {

        const startTimer = setTimeout(() => {
            setShowRedShadow(true);

            const stopTimer = setTimeout(() => {
                setShowRedShadow(false);
            }, 1000);

            return () => clearTimeout(stopTimer);

        }, 800);

        return () => clearTimeout(startTimer);
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(reviewId, response);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return <div className="p-4 bg-blue-100 text-blue-700 rounded">Response submitted.</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <textarea
                className={`p-2 border rounded-lg ${showRedShadow ? 'shadow-red' : ''}`}
                placeholder="Write your response..."
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                required
            ></textarea>
            <div>
                <button type="submit" className="mt-2 text-sm px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Submit Response
                </button>
            </div>

            <style>{`
                .shadow-red {
                    box-shadow: 0px 0px 50px #FF745F; 
                    transition: box-shadow 0.3s ease-in-out;
                }
            `}</style>
        </form>
    );
};

export default ReviewFromCustomer;
