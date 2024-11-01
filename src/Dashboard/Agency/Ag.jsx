import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const Ag = () => {
  const [notifications, setNotifications] = useState([]);
  const socketRef = useRef(null); 
  
  useEffect(() => {
    // Initialize Socket.IO connection
    socketRef.current = io("http://localhost:3000"); // Ensure correct server URL

    // Listen for new vehicle added notifications
    socketRef.current.on("newVehicleAdded", (notification) => {
      console.log("Received notification:", notification); // Log the notification
      setNotifications((prev) => [notification, ...prev]); // Update state with new notification
    });

    // Clean up the socket connection on unmount
    return () => {
      socketRef.current.off("newVehicleAdded");
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div>
    <div className="ml-[20rem] mr-[20rem] mt-10 md:text-4xl sm:text-3xl text-2xl text-center font-serif font-extrabold border-b-2 dark:border-blue-500 rounded-b-md mb-6 border-yellow-500 dark:text-black">
      Notifications
    </div>

    <div className="flex flex-col gap-3 m-8">
      <div className="relative border border-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center p-4">
          <ul>
            {notifications.length > 0 ? (
              notifications.map((notif, index) => (
                <li key={index} className="flex items-center gap-3 mb-2">
                  <img
                    className="object-cover w-12 h-12 rounded-lg"
                    src="https://randomuser.me/api/portraits/women/71.jpg"
                    alt=""
                  />
                  <p className="max-w-xs text-sm text-gray-500 truncate">
                    {notif.message}
                  </p>
                  <p>notification</p>
                </li>
              ))
            ) : (
              <p className="flex justify-center items-center ">
                No notifications yet.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Ag;













  

