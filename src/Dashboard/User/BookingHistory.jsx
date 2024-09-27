
import CommonTable from './CommonTable';

const BookingHistory = () => {
   
    const bookings = [
        {
            "_id": "1",
            "car": {
                "name": "Tesla Model S"
            },
            "bookingDate": "2023-09-15T08:30:00Z",
            "dropoffDate": "2023-09-18T10:00:00Z",
            "status": "Completed",
            "pickupLocation": "San Francisco",
            "dropoffLocation": "Los Angeles",
            "price": 200
        },
        {
            "_id": "2",
            "car": {
                "name": "BMW 5 Series"
            },
            "bookingDate": "2023-08-10T10:00:00Z",
            "dropoffDate": "2023-08-12T12:00:00Z",
            "status": "Cancelled",
            "pickupLocation": "New York",
            "dropoffLocation": "Washington DC",
            "price": 150
        },
        {
            "_id": "3",
            "car": {
                "name": "Audi Q5"
            },
            "bookingDate": "2023-09-20T12:00:00Z",
            "dropoffDate": "2023-09-22T14:00:00Z",
            "status": "Completed",
            "pickupLocation": "Miami",
            "dropoffLocation": "Orlando",
            "price": 180
        },
        {
            "_id": "4",
            "car": {
                "name": "Mercedes-Benz E-Class"
            },
            "bookingDate": "2023-07-05T09:00:00Z",
            "dropoffDate": "2023-07-08T11:00:00Z",
            "status": "Completed",
            "pickupLocation": "Los Angeles",
            "dropoffLocation": "Las Vegas",
            "price": 250
        },
        {
            "_id": "5",
            "car": {
                "name": "Ford Mustang"
            },
            "bookingDate": "2023-10-01T13:00:00Z",
            "dropoffDate": "2023-10-05T15:00:00Z",
            "status": "Completed",
            "pickupLocation": "Dallas",
            "dropoffLocation": "Houston",
            "price": 220
        },
        {
            "_id": "6",
            "car": {
                "name": "Chevrolet Camaro"
            },
            "bookingDate": "2023-09-25T08:00:00Z",
            "dropoffDate": "2023-09-27T10:00:00Z",
            "status": "Cancelled",
            "pickupLocation": "Chicago",
            "dropoffLocation": "Detroit",
            "price": 170
        },
        {
            "_id": "7",
            "car": {
                "name": "Jaguar XF"
            },
            "bookingDate": "2023-08-15T14:00:00Z",
            "dropoffDate": "2023-08-18T16:00:00Z",
            "status": "Completed",
            "pickupLocation": "Seattle",
            "dropoffLocation": "Portland",
            "price": 190
        },
    ]

    console.log(bookings);
    // // todo :
    // useEffect(() => {
    //     const fetchBookings = async () => {
    //         try {
    //             const response = await axios.get('/bookings'); 
    //             setBookings(response.data);
    //             setLoading(false);
    //         } catch (err) {
    //             setError('Failed to fetch bookings');
    //             setLoading(false);
    //         }
    //     };

    //     fetchBookings();
    // }, []);


    return (
        <div>
            <CommonTable bookings={bookings} heading={"Booking History"}></CommonTable>
        </div>
    );
};

export default BookingHistory;