import React from 'react';

const FavouriteCars = () => {
    const cars = [
        {
            id: 1,
            name: 'Jeep Renegade',
            seats: 4,
            luggage: 2,
            doors: 4,
            fuel: 'Petrol',
            horsepower: 500,
            engine: 3000,
            drive: '4x4',
            type: 'Hatchback',
            price: 265,
            image: '/car1.jpg', // replace with actual image link
        },
        {
            id: 2,
            name: 'BMW M2',
            seats: 4,
            luggage: 2,
            doors: 4,
            fuel: 'Petrol',
            horsepower: 500,
            engine: 3000,
            drive: '4x4',
            type: 'Hatchback',
            price: 244,
            image: '/car.jpg', // replace with actual image link
        },
        {
            id: 2,
            name: 'BMW M2',
            seats: 4,
            luggage: 2,
            doors: 4,
            fuel: 'Petrol',
            horsepower: 500,
            engine: 3000,
            drive: '4x4',
            type: 'Hatchback',
            price: 244,
            image: '/car2.jpg', // replace with actual image link
        },
    ];

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-6">Favourite Cars</h2>
            <div className="space-y-6">
                {cars.map((car) => (
                    <div
                        key={car.id}
                        style={{ boxShadow: '0 20px 50px #FEF2F2' }} 
                        className="flex bg-white group  rounded-lg overflow-hidden" 
                    >
                        {/* Car Image */}
                        <div className="flex items-center justify-center ml-10 w-1/3">
                            <img
                                className="rounded-lg group-hover:scale-105 transform duration-500 object-cover "
                                src={car.image}
                                alt={car.name}
                            />
                        </div>

                        {/* Car Details */}
                        <div className="w-2/3 flex justify-between p-10">
                            <div>
                                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                                <div className="grid grid-cols-2 text-sm gap-2">
                                    <p><strong>Seats:</strong> {car.seats}</p>
                                    <p><strong>Horsepower:</strong> {car.horsepower}</p>
                                    <p><strong>Luggage:</strong> {car.luggage}</p>
                                    <p><strong>Engine:</strong> {car.engine}</p>
                                    <p><strong>Doors:</strong> {car.doors}</p>
                                    <p><strong>Drive:</strong> {car.drive}</p>
                                    <p><strong>Fuel:</strong> {car.fuel}</p>
                                    <p><strong>Type:</strong> {car.type}</p>
                                </div>
                            </div>

                            {/* Price and Button */}
                            <div className=" flex flex-col gap-2 justify-center items-center mt-4">
                                <div>
                                    <p className="text-lg text-center w-[150px] font-bold">
                                        Daily rate from <span className="text-2xl">${car.price}</span>
                                    </p>
                                </div>
                                <button className="bg-primary text-sm text-white px-4 py-2 rounded-lg hover:bg-red-500">
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavouriteCars;
