import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FcDepartment, FcPieChart, FcHeatMap, FcOrgUnit, FcList, FcViewDetails, FcSalesPerformance } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
// import { FaCheckCircle } from "react-icons/fa"; // For green check icon
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import useAgencyInfo from "../../hooks/useAgencyInfo";


const ViewDetails = () => {

    const { id } = useParams();
    const [relatedData, setRelatedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();
    const location = useLocation();

    const {
        carBookingInfo,
        searchResult
    } = location?.state || {};

    const email = searchResult.agnecyInfo.email;
    const { agencyInfo } = useAgencyInfo(email)

    const navigate = useNavigate();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axiosPublic.get(`/feedbackRoute/feedbacks/${id}`);
                setReviews(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        };

        fetchReviews();
    }, [axiosPublic, id]);

    const { data: carData = {} } = useQuery({
        queryKey: [id, 'carData'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/carsRoute/vehicle/${id}`)
            return data;
        }
    })

    const handleRent = (e) => {
        e.preventDefault();
        
        const bookingData = {
            carBookingInfo,
            carData,
            agencyInfo
        }
        localStorage.setItem('bookingData', JSON.stringify({ bookingData }));
        navigate('/bookingInfo')
    }

    useEffect(() => {
        fetch("../../../public/featuredAndAvailable.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setRelatedData(data);
            });
    }, []);


    // const add_features = data?.additional_features;

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 50);
        // window.scrollTo(0, 0);
        return () => clearTimeout(timer);
    }, [id]);

    const handleAddToFavorites = (carId) => {
        const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (!existingFavorites.includes(carId)) {
            existingFavorites.push(carId);
            localStorage.setItem('favorites', JSON.stringify(existingFavorites));
            toast.success("Added to Favorites");
        } else {
            toast("Already in Favorites");
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="md:mt-[80px] mt-6 max-w-6xl mx-auto lg:px-6">
            <Helmet>
                <title>{carData?.brand || "Details"}</title>
            </Helmet>
            {/* Skeleton Loader */}
            {isLoading ? (
                <div className="animate-pulse flex flex-col md:flex-row gap-8">
                    Loading...
                    {/* todo : skeleton loader */}
                </div>
            ) : (
                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Image Section */}
                    <div className="mx-auto lg:w-[580px] px-6 md:px-6 lg:px-0 flex-grow">
                        <div className="image-container">
                            <img className="lg:w-[580px]" src={carData?.image} alt={carData?.brand} />
                        </div>
                        <div className="flex flex-row-reverse mt-12 relative">
                            <button
                                onClick={handleRent}
                                className="h-[40px] md:h-[70px] w-full !text-[14px] md:!text-[20px] dynamic-button bg-primary text-white hover:text-black px-4 duration-700 md:py-3">
                                Rent Now
                            </button>
                            <button
                                onClick={() => handleAddToFavorites(id)}
                                className="h-[40px] md:h-[70px] w-full !text-[14px] md:!text-[20px] dynamic-button text-white bg-secondary  hover:text-primary px-4 duration-700 py-3">
                                Add to Favorites
                            </button>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="p-6 lg:mt-0 lg:w-1/2">
                        <h2 className="text-4xl mb-4 font-bold text-secondary font-nunito text-heading">{carData?.brand}<span className="ml-3">{carData?.model}</span></h2>
                        <div className="flex gap-6">
                            <h3 className="font-semibold px-6 text-primary bg-[#FFEEE9] rounded-sm">{carData?.brand}</h3>
                            <p className="dark:text-heading2">Model: <span className="bg-[#FFEEE9] px-1 rounded-md text-black">{carData?.model}</span></p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-heading">
                            <div className="flex flex-col py-2 px-10 items-center border border-gray-300 rounded-md">
                                <FcDepartment className="text-4xl" />
                                <span className="font-light mt-2">Build:</span>
                                <span className="text-lg font-semibold font-secondary">{carData?.buildYear}</span>
                            </div>
                            <div className="flex flex-col items-center py-2 px-10 border border-gray-300 rounded-md">
                                <FcPieChart className="text-4xl" />
                                <span className="font-light mt-2">Fuel:</span>
                                <span className="text-lg font-semibold font-secondary">{carData?.fuel}</span>
                            </div>
                            <div className="flex flex-col items-center py-2 px-10 border border-gray-300 rounded-md">
                                <FcOrgUnit className="text-4xl" />
                                <span className="font-light mt-2">Seats:</span>
                                <span className="text-lg font-semibold font-secondary">{carData?.seat}</span>
                            </div>
                            <div className="flex flex-col items-center py-2 px-10 border border-gray-300 rounded-md">
                                <FcHeatMap className="text-4xl" />
                                <span className="font-light mt-2">Transmission:</span>
                                <span className="text-lg font-semibold font-secondary">{carData?.transmission}</span>
                            </div>
                        </div>

                        {/* About Section */}
                        {/* <div>
                            <p className="text-xl mt-6">About</p>
                            <p className="mt-4 text-[16px] font-secondary !leading-[26px] text-Description dark:text-Description2">{carData?.vehicle_info.about}</p>
                        </div> */}
                    </div>
                </div>
            )}

            {/* Additional Information Section */}
            <div className="mt-16 px-6 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Car Details */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <FcViewDetails className="text-3xl" />
                            Car Information
                        </h2>
                        <ul className="list-none ml-4 mt-4">
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>License Number: {carData?.licenseNumber}</span>
                            </li>
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Expire Date: {carData?.expireDate}</span>
                            </li>
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Fitness Certificate: {carData?.fitnessCertificate}</span>
                            </li>
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Issuing Authority: {carData?.issuingAuthority}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Insurance Details */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <FcSalesPerformance className="text-3xl" />
                            Insurance Information
                        </h2>
                        <ul className="list-none ml-4 mt-4">
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Insurance Number: {carData?.insuranceNumber}</span>
                            </li>
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Coverage Period: {carData?.insurancePeriod}</span>
                            </li>
                            {/* <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Provider: {carData?.vehicle_info.insurance_details.provider}</span>
                            </li> */}
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Coverage Type: {carData?.insuranceDetails}</span>
                            </li>
                            {/* <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Deductible: ৳ {data?.vehicle_info.insurance_details.deductible * 120}</span>
                            </li> */}
                        </ul>
                    </div>

                    {/* additional_features */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <FcList className="text-3xl" />
                            Additional Features
                        </h2>
                        {/* <ul className="list-none ml-4 mt-4">
                            {
                                carData && <>
                                    {Object.entries(add_features).map(([feature, value]) => (
                                        <li key={feature} className="mb-2 flex items-center gap-2">
                                            <FaCheckCircle className={`${value ? 'text-green-500' : 'text-gray-500'}`} />
                                            <span>{feature.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}: {value ? 'Available' : 'Not Available'}</span>
                                        </li>
                                    ))}
                                </>
                            }

                        </ul> */}
                    </div>
                </div>

                {/* reviews */}
                <div className='mt-24'>
                    <h2 className='text-3xl font-semibold capitalize '>
                        Reviews
                    </h2>
                    <br />
                    <hr />
                    {/* reviews */}
                    <div className='mt-12'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
                            {loading ? (
                                // Skeleton loader
                                Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} className='p-6 bg-white animate-pulse'>
                                        <div className="flex justify-between">
                                            <div className="flex gap-3">
                                                {/* Skeleton for user image */}
                                                <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
                                                <div>
                                                    {/* Skeleton for user name */}
                                                    <div className='w-24 h-4 bg-gray-300 rounded-md mb-2'></div>
                                                    {/* Skeleton for date */}
                                                    <div className='w-16 h-3 bg-gray-200 rounded-md'></div>
                                                </div>
                                            </div>
                                            {/* Skeleton for rating */}
                                            <div className='mt-4 flex'>
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <div key={i} className='w-4 h-4 bg-gray-300 rounded-md'></div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Skeleton for review text */}
                                        <div className='mt-4 w-full h-12 bg-gray-200 rounded-md'></div>

                                        {/* Skeleton for review image */}
                                        <div className='mt-4 w-full h-40 bg-gray-300 rounded-md'></div>

                                        {/* Skeleton for agency response */}
                                        <div className='mt-4 w-3/4 h-8 bg-gray-100 rounded-md'></div>
                                    </div>
                                ))
                            ) : (reviews.length === 0 ? (<p>No Reviews</p>) :

                                reviews?.map((review, index) => (
                                    <div key={index} className='p-6 bg-white'>
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
                                                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
                <br />
                <hr />
                {/* slider */}
                <div className='mt-24'>
                    <h2 className='text-3xl font-semibold capitalize text-heading dark:text-heading2'>Related Cars</h2>
                    <div className='mt-12'>
                        <Slider {...settings}>
                            {
                                relatedData?.map((car, index) => {
                                    return (
                                        <div key={index} className='relative '>
                                            <Link to={`/view-details`}>
                                                <div className='h-[290px]'>
                                                    <span className='absolute text-white text-[12px] left-[15px] top-3'><span>{car.vehicle_info.brand}</span> Car </span>
                                                    <img className='h-[250px] w-[150px] md:w-[180px] object-cover' src={car.vehicle_info.photo} alt={`Profile Photo of ${car.vehicle_info.name}`} />
                                                </div>
                                                <div className='bg-blue-200 text-[12px] md:text-[14px] shadow-xl z-10 left-[10px] rounded-t-md bottom-0 absolute p-3 md:w-[160px] w-[130px]'>
                                                    <p className=''>{car.vehicle_info.name}</p>
                                                    <p className=''>Price : <span className=''>${car.vehicle_info.price}</span></p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ViewDetails;
