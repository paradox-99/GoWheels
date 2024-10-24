import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';

const FavouriteCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavouriteCars = async () => {
            try {
                const storedCarIds = JSON.parse(localStorage.getItem('favorites')) || [];
                console.log(storedCarIds);

                if (storedCarIds.length > 0) {
                    const response = await axios.post('http://localhost:3000/api/bookings/favorites', { ids: storedCarIds });
                    setCars(response.data);
                }
            } catch (error) {
                console.error('Failed to fetch favorite cars:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFavouriteCars();
    }, []);

    const removeCarFromFavorites = (carId) => {
        const storedCarIds = JSON.parse(localStorage.getItem('favorites')) || [];
        const updatedCarIds = storedCarIds.filter(id => id !== carId);

        localStorage.setItem('favorites', JSON.stringify(updatedCarIds));
        setCars(cars.filter(car => car._id !== carId));
    };

    const clearAllFavorites = () => {
        localStorage.removeItem('favorites'); 
        setCars([]); 
    };

    if (loading) {
        return (
            <div className="container mx-auto p-6">
                <h2 className="text-3xl font-semibold mb-6">Favourite Cars</h2>
             {/* loader */}
                <div className="space-y-6">
                    {[1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className="flex bg-gray-200 animate-pulse rounded-lg overflow-hidden h-44"
                        >
                            <div className="w-1/3 bg-gray-300"></div>
                            <div className="w-2/3 p-6 flex flex-col justify-center space-y-4">
                                <div className="w-1/2 h-6 bg-gray-300"></div>
                                <div className="w-full h-4 bg-gray-300"></div>
                                <div className="w-3/4 h-4 bg-gray-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 relative">
            <Helmet>
                <title>Favorite Cars</title>
            </Helmet>
            <h2 className="text-3xl font-semibold mb-6">Favourite Cars</h2>
            <button
                onClick={clearAllFavorites}
                className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
                Clear All
            </button>

            {cars.length > 0 ? (
                <div className="space-y-6">
                    {cars.map((car) => (
                        <div
                            key={car._id}
                            style={{ boxShadow: '0 20px 50px #FEF2F2' }}
                            className="flex bg-white group rounded-lg overflow-hidden relative"
                        >
                    
                            <AiOutlineClose
                                onClick={() => removeCarFromFavorites(car._id)}
                                className="absolute top-2 right-2 text-red-500 cursor-pointer"
                                size={24}
                            />

                            <div className="flex items-center relative justify-center ml-10 w-1/3">
                                <span className="absolute -left-10 top-1 z-[1] px-2 py-1 rounded-md text-white bg-red-400">{car.vehicle_info.brand}</span>
                                <img
                                    className="rounded-lg group-hover:scale-105 transform duration-500 object-cover"
                                    src={car.vehicle_info.photo}
                                    alt={car.vehicle_info.model}
                                />
                            </div>

                            <div className="w-2/3 flex justify-between p-10">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{car.vehicle_info.brand} {car.vehicle_info.model} ({car.vehicle_info.build_year})</h3>
                                    <div className="grid grid-cols-2 text-sm gap-2">
                                        <p><strong>Seats:</strong> {car.vehicle_info.seats}</p>
                                        <p><strong>Fuel:</strong> {car.vehicle_info.fuel}</p>
                                        <p><strong>Transmission:</strong> {car.vehicle_info.transmission_type}</p>
                                        <p><strong>Mileage:</strong> {car.vehicle_info.mileage}</p>
                                        <p><strong>Gear:</strong> {car.vehicle_info.gear}</p>
                                        <p><strong>Model:</strong> {car.vehicle_info.model}</p>
                                    </div>

                                    <div className="mt-4">
                                        <h4 className="text-lg font-semibold">Additional Features:</h4>
                                        <ul className="list-disc list-inside text-sm">
                                            {car.additional_features.air_conditioning && <li>Air Conditioning</li>}
                                            {car.additional_features.gps && <li>GPS</li>}
                                            {car.additional_features.bluetooth && <li>Bluetooth</li>}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 justify-center items-center mt-4">
                                    <div>
                                        <p className="text-lg text-center w-[150px] font-bold">
                                            Daily rate from <span className="text-2xl">${car.vehicle_info.rental_price}</span>
                                        </p>
                                    </div>
                                    <button className="bg-primary text-sm text-white px-4 py-2 rounded-lg hover:bg-red-500">
                                        <Link className='text-sm' to={`/view-details/${car._id}`}>View Details</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='h-screen flex justify-center items-center'>
                    <p className='text-xl text-gray-500'>You did not add any cars to favorites 😌</p>
                </div>
            )}
        </div>
    );
};

export default FavouriteCars;
