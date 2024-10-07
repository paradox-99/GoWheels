
import { useEffect, useState } from 'react';
import CommonTable from './CommonTable';
import axios from 'axios';

const Bookings = () => {
    const userId = "66f4cf5a3ba27ae4690cc441"
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(bookings);
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/bookings/user/${userId}`); 
                setBookings(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch bookings', err);
                setLoading(false);
            }
        };

        fetchBookings();
    }, [userId]);
console.log(bookings);
    return (
        <div>
            <CommonTable bookings={bookings} heading={"My Bookings"} loading={loading} error={error}></CommonTable>
        </div>
    );
};

export default Bookings;