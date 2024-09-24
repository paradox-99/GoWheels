import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FcDepartment, FcPieChart, FcHeatMap, FcOrgUnit,  FcList, FcViewDetails, FcSalesPerformance } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa"; // For green check icon

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const ViewDetails = ({ id }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [relatedData, setRelatedData] = useState([]);
    useEffect(() => {
        fetch("./featuredAndAvaiable.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setRelatedData(data);
            });
    }, []);
console.log(relatedData);
    const data = {
        "name": "Toyota Prius",
        "rating": 4.5,
        "brand": "Toyota",
        "fuel": "Hybrid",
        "about": "The Toyota Prius is a hybrid vehicle with a mileage of 22,000 miles and full insurance coverage.",
        "seats": 5,
        "gear": "Automatic",
        "rental_price": 50,
        "image": "/car.png",
        "mileage": "25,000 miles",
        "transmission_type": "automatic",
        "model": "Prius",
        "build_year": 2022,
        "license_number": "XYZ9876",
        "expire_date": "2024-12-31",
        "fitness_certificate": "Valid",
        "issuing_authority": "Department of Motor Vehicles",
        "insurance_number": "INS-123456789",
        "insurance_coverage_period": "2023-01-01 to 2024-01-01",
        "insurance_details": {
            "provider": "ABC Insurance Co.",
            "coverage_type": "Full coverage",
            "deductible": 300
        },
        "additional_features": {
            "air_conditioning": true,
            "gps": true,
            "bluetooth": true,
            "sunroof": false,
            "parking_sensors": true
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 50);
        window.scrollTo(0, 0);
        return () => clearTimeout(timer);
    }, [id]);
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
        <div className="md:mt-[80px] mt-6 max-w-6xl mx-auto">
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
                            <img className="lg:w-[580px]" src={data.image} alt={data.name} />
                        </div>
                        <div className="flex flex-row-reverse mt-12 relative">
                            <button className="h-[40px] md:h-[70px] w-full !text-[14px] md:!text-[20px] dynamic-button bg-primary text-white hover:text-black px-4 duration-700 md:py-3">
                                Rent Now
                            </button>
                            <button onClick={() => toast("added to Favourites")} className="h-[40px] md:h-[70px] w-full !text-[14px] md:!text-[20px] dynamic-button text-white bg-secondary  hover:text-primary px-4 duration-700 py-3">
                                Add to Favourites
                            </button>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="p-6 lg:mt-0 lg:w-1/2">
                        <h2 className="text-4xl mb-4 font-bold font-secondary text-heading">{data.name}</h2>
                        <div className="flex gap-6">
                            <h3 className="font-semibold px-6 text-primary bg-[#FFEEE9] rounded-sm">{data.brand}</h3>
                            <p className="dark:text-heading2">Model: <span className="bg-[#FFEEE9] px-1 rounded-md text-black">{data.model}</span></p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-heading">
                            <div className="flex flex-col py-2 px-10 items-center border border-gray-300 rounded-md">
                                <FcDepartment className="text-4xl" />
                                <span className="font-light mt-2">Build:</span>
                                <span className="text-lg font-semibold font-secondary">{data.build_year}</span>
                            </div>
                            <div className="flex flex-col items-center py-2 px-10 border border-gray-300 rounded-md">
                                <FcPieChart className="text-4xl" />
                                <span className="font-light mt-2">Fuel:</span>
                                <span className="text-lg font-semibold font-secondary">{data.fuel}</span>
                            </div>
                            <div className="flex flex-col items-center py-2 px-10 border border-gray-300 rounded-md">
                                <FcOrgUnit className="text-4xl" />
                                <span className="font-light mt-2">Seats:</span>
                                <span className="text-lg font-semibold font-secondary">{data.seats}</span>
                            </div>
                            <div className="flex flex-col items-center py-2 px-10 border border-gray-300 rounded-md">
                                <FcHeatMap className="text-4xl" />
                                <span className="font-light mt-2">Transmission:</span>
                                <span className="text-lg font-semibold font-secondary">{data.transmission_type}</span>
                            </div>
                        </div>

                        {/* About Section */}
                        <div>
                            <p className="text-xl mt-6">About</p>
                            <p className="mt-4 text-[16px] font-secondary !leading-[26px] text-Description dark:text-Description2">{data.about}</p>
                        </div>
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
                                <span>License Number: {data.license_number}</span>
                            </li>
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Expire Date: {data.expire_date}</span>
                            </li>
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Fitness Certificate: {data.fitness_certificate}</span>
                            </li>
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Issuing Authority: {data.issuing_authority}</span>
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
                                <span>Insurance Number: {data.insurance_number}</span>
                            </li>
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Coverage Period: {data.insurance_coverage_period}</span>
                            </li>
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Provider: {data.insurance_details.provider}</span>
                            </li>
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Coverage Type: {data.insurance_details.coverage_type}</span>
                            </li>
                            <li className="mb-2 flex items-center gap-2">
                                <IoIosArrowForward className="text-primary" />
                                <span>Deductible: ${data.insurance_details.deductible}</span>
                            </li>
                        </ul>
                    </div>

                    {/* additional_features */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <FcList className="text-3xl" />
                            Additional Features
                        </h2>
                        <ul className="list-none ml-4 mt-4">
                            {Object.entries(data.additional_features).map(([feature, value]) => (
                                <li key={feature} className="mb-2 flex items-center gap-2">
                                    <FaCheckCircle className={`${value ? 'text-green-500' : 'text-gray-500'}`} />
                                    <span>{feature.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}: {value ? 'Available' : 'Not Available'}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
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
                                                    <span className='absolute text-white text-[12px] left-[15px] top-3'><span>{car.brand}</span> Car </span>
                                                    <img className='h-[250px] w-[150px] md:w-[180px] object-cover' src={car.image} alt={`Profile Photo of ${car.name}`} />
                                                </div>
                                                <div className='bg-blue-200 text-[12px] md:text-[14px] shadow-xl z-10 left-[10px] rounded-t-md bottom-0 absolute p-3 md:w-[160px] w-[130px]'>
                                                    <p className=''>{car.name}</p>
                                                    <p className=''>Price : <span className=''>${car.price}</span></p>
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
