import { Outlet, useNavigate } from "react-router-dom";
import useDesignation from "../hooks/useDesignation";
import UseAuth from "../hooks/UseAuth";
import { BiLogOut, BiMenu } from "react-icons/bi";
import { useState } from "react";
import useRole from "../hooks/useRole";
import CommonMenuItems from "./menuItem/CommonMenuItems";
import UserMenuItems from "./menuItem/UserMenuItems";
import AdminMenuItems from "./menuItem/AdminMenuItems";
import DriverMenuItems from "./menuItem/DriverMenuItems";
import AgencyMenuItems from "./menuItem/AgencyMenuItems";
import ModeratorMenuItems from "./menuItem/ModeratorMenuItems";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = UseAuth();
  const { userInfo } = useDesignation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { userRole } = useRole();

  const handleLogout = async () => {
    await logout();
    navigate("/join");
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex relative h-screen bg-gray-100">
      {isDrawerOpen ? "" : <button
        onClick={toggleDrawer}
        className="lg:hidden p-2 fixed top-4 left-4 z-50 bg-primary text-white rounded-md shadow-md"
      >

        <BiMenu className="w-6 h-6" />
      </button>}

      <div
        className={`fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
        ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:fixed lg:w-[280px] md:w-[500px] w-[300px] h-screen`}
      >
        {isDrawerOpen ? <RxCross2 className="cursor-pointer text-primary text-2xl absolute top-1 left-[210px] md:left-[270px] " onClick={toggleDrawer} /> : ""}
        <div className="bg-[#FFFFFF]  shadow-xl text-white font-nunito min-h-full w-[80%] sm:w-[60%] lg:w-full flex flex-col items-center py-6">
          <div className="mb-8">
            {/* Profile Image */}
            {userInfo.circleImage ? (
              <img
                src={userInfo.circleImage}
                alt="Profile Picture"
                className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-4 border-white shadow-lg"
              />
            ) : userInfo?.image ? (
              <img
                src={userInfo?.image}
                alt="Profile Picture"
                referrerPolicy="no-referrer"
                className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-4 border-white shadow-lg"
              />
            ) : (
              <CgProfile className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-4 border-white shadow-lg" />
            )}
          </div>

          <div className="w-full px-6 space-y-4">
            {userRole === "user" && <UserMenuItems />}
            {userRole === "admin" && <AdminMenuItems />}
            {userRole === "driver" && <DriverMenuItems />}
            {userRole === "agency" && <AgencyMenuItems />}
            {userRole === "moderator" && <ModeratorMenuItems />}
          </div>

          <div className="w-full px-6 mt-auto">
            <CommonMenuItems />

            <button
              onClick={handleLogout}
              className="flex gap-4 items-center mt-8 text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg shadow-md w-full"
            >
              <BiLogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 lg:pl-[280px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
