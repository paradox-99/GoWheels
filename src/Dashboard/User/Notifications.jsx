import { useState } from "react";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const socket = io("http://localhost:3000");

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // socket.on('connect_error', (err) => {
  //     console.error('Connection Error:', err);
  // });

  socket.on("payment-success", (data) => {
    console.log(data);
    const newNotification = { id: uuidv4(), message: data.message };
    setNotifications((prev) => [...prev, newNotification]);

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((n) => n.id !== newNotification.id)
      );
    }, 5000);
  });

  // useEffect(() => {

  //     return () => {
  //         socket.off('payment-success');
  //     };
  // }, []);

  return (
    <div>
      {notifications.map((note) => (
        <div key={note.id} className="notification">
          <p>{note.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;