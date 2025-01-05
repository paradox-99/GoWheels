import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import Ag from "./Ag";
import AgencyMenuItems from "./AgencyMenuItems";

const ParentComponent = () => {
  const [notifications, setNotifications] = useState([]);
  const socketRef = useRef(null); 
  
  useEffect(() => {
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
      {/* Pass the notifications count to AgencyMenuItems */}
      <AgencyMenuItems notificationCount={notifications.length} />

      {/* Pass the notifications array to Ag component */}
      <Ag notifications={notifications} />
    </div>
  );
};

export default ParentComponent;
