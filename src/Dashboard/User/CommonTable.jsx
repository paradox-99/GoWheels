import  { useState } from 'react';

const CommonTable = ({bookings,heading}) => {
    const [loading] = useState(false); //default
    const [error] = useState(null);//default
    if (loading) {
        return <p className="text-center text-lg text-gray-600">Loading bookings...</p>;
    }

    if (error) {
        return <p className="text-center text-red-600">{error}</p>;
    }
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-6">{heading}</h2>
            {bookings.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-red-50 text-gray-500 text-sm leading-normal">
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
                            {bookings.map((booking) => (
                                <tr key={booking._id} className="border-b border-red-50 hover:bg-red-50">
                                    <td className="py-3 px-6">{booking.car.name}</td>
                                    <td className="py-3 px-6">{new Date(booking.bookingDate).toLocaleDateString()}</td>
                                    <td className="py-3 px-6">{new Date(booking.dropoffDate).toLocaleDateString()}</td>
                                    <td className={`py-3 px-6`}>
                                        <span
                                            className={`px-3 rounded-full py-1 ${booking.status === 'Confirmed' && 'bg-green-50 text-green-500'
                                                } ${booking.status === 'Pending' && 'bg-yellow-50 text-yellow-500'
                                                } ${booking.status === 'Completed' && 'bg-blue-50-50 text-blue-500'
                                                } ${booking.status === 'Cancelled' && 'bg-red-50 text-red-500'
                                                }`}
                                        >
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-6">{booking.pickupLocation}</td>
                                    <td className="py-3 px-6">{booking.dropoffLocation}</td>
                                    <td className="py-3 px-6 text-gray-600 font-semibold">${booking.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-600">No bookings found.</p>
            )}
        </div>
    );
};

export default CommonTable;