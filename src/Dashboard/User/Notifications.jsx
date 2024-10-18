
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const Notifications = () => {
    const [notification, setNotification] = useState('');

    useEffect(() => {
        socket.on('connect_error', (err) => {
            console.error('Connection Error:', err);
        });

        socket.on('payment-success', (data) => {
            setNotification(data.message);
        });

        return () => {
            socket.off('payment-success');
        };
    }, []);

    return (
        <div>
            {notification && (
                <div className="notification">
                    <p>{notification}</p>
                </div>
            )}
        </div>
    );
};

export default Notifications;
