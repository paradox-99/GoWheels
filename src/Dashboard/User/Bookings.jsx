
import CommonTable from './CommonTable';

const Bookings = () => {
    // const [bookings, setBookings] = useState([]);

    const bookings = [
        {
            "_id": "1",
            "car": {
                "name": "Porsche Taycan"
            },
            "bookingDate": "2023-09-15T08:30:00Z",
            "dropoffDate": "2023-09-18T10:00:00Z",
            "status": "Pending",
            "pickupLocation": "San Francisco",
            "dropoffLocation": "Los Angeles",
            "price": 300
        },
        {
            "_id": "2",
            "car": {
                "name": "Mercedes-Benz C-Class"
            },
            "bookingDate": "2023-08-10T10:00:00Z",
            "dropoffDate": "2023-08-12T12:00:00Z",
            "status": "Confirmed",
            "pickupLocation": "New York",
            "dropoffLocation": "Washington DC",
            "price": 180
        },
        {
            "_id": "3",
            "car": {
                "name": "BMW X5"
            },
            "bookingDate": "2023-09-20T12:00:00Z",
            "dropoffDate": "2023-09-22T14:00:00Z",
            "status": "Pending",
            "pickupLocation": "Miami",
            "dropoffLocation": "Orlando",
            "price": 220
        },
        {
            "_id": "4",
            "car": {
                "name": "Audi A6"
            },
            "bookingDate": "2023-07-05T09:00:00Z",
            "dropoffDate": "2023-07-08T11:00:00Z",
            "status": "Confirmed",
            "pickupLocation": "Los Angeles",
            "dropoffLocation": "Las Vegas",
            "price": 280
        },
        {
            "_id": "5",
            "car": {
                "name": "Toyota Camry"
            },
            "bookingDate": "2023-10-01T13:00:00Z",
            "dropoffDate": "2023-10-05T15:00:00Z",
            "status": "Confirmed",
            "pickupLocation": "Dallas",
            "dropoffLocation": "Houston",
            "price": 150
        },
        {
            "_id": "6",
            "car": {
                "name": "Honda Accord"
            },
            "bookingDate": "2023-09-25T08:00:00Z",
            "dropoffDate": "2023-09-27T10:00:00Z",
            "status": "Confirmed",
            "pickupLocation": "Chicago",
            "dropoffLocation": "Detroit",
            "price": 160
        },
        {
            "_id": "7",
            "car": {
                "name": "Ford Explorer"
            },
            "bookingDate": "2023-08-15T14:00:00Z",
            "dropoffDate": "2023-08-18T16:00:00Z",
            "status": "Confirmed",
            "pickupLocation": "Seattle",
            "dropoffLocation": "Portland",
            "price": 200
        }
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
            <CommonTable bookings={bookings} heading={"My Bookings"}></CommonTable>
        </div>
    );
};

export default Bookings;