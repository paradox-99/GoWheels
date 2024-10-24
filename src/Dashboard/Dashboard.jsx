import { Outlet, useNavigate } from "react-router-dom";
import useDesignation from "../hooks/useDesignation";
import UseAuth from "../hooks/UseAuth";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";
import useRole from "../hooks/useRole";
import CommonMenuItems from "./menuItem/CommonMenuItems";
import UserMenuItems from "./menuItem/UserMenuItems";
import AdminMenuItems from "./menuItem/AdminMenuItems";
import DriverMenuItems from "./menuItem/DriverMenuItems";
import AgencyMenuItems from "./menuItem/AgencyMenuItems";
import ModeratorMenuItems from "./menuItem/ModeratorMenuItems";
import { CgProfile } from "react-icons/cg";


const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = UseAuth();
  const { userInfo } = useDesignation();
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(false);
  const { userRole } = useRole();

  const handleLogout = async () => {
    await logout();
    navigate("/join");
  };

  return (
    <div className="flex relative">
      <div className="w-[20%] fixed left-0 hidden lg:block">
        <div className="bg-red-50 min-h-screen font-nunito">
          <ul className="lg:static bg-white p-5 min-h-screen w-[95%] max-w-[300px] flex flex-col justify-between">

            <div>
              <div className="px-6">
                {
                  userInfo.circleImage ? (
                    <img
                      src={userInfo.circleImage}
                      alt="Profile Picture"
                      className="w-[150px] h-[150px] object-cover rounded-full border-4 border-primary"
                    />
                  ) : userInfo?.image ? (
                    <img
                      src={userInfo?.image}
                      alt="Profile Picture"
                      referrerPolicy="no-referrer"
                      className="w-[150px] h-[150px] object-cover rounded-full border-4 border-primary"
                    />
                  ) : (
                    <CgProfile className="w-[150px] h-[150px] object-cover rounded-full border-4 border-primary" />
                  )
                }
              </div>

              <div className="px-2 space-y-2 pt-8 pb-4">
                {userRole === 'user' && <UserMenuItems></UserMenuItems>}
                {userRole === 'admin' && <AdminMenuItems></AdminMenuItems>}
                {userRole === 'driver' && <DriverMenuItems></DriverMenuItems>}
                {userRole === 'agency' && <AgencyMenuItems></AgencyMenuItems>}
                {userRole === 'moderator' && <ModeratorMenuItems></ModeratorMenuItems>}
              </div>

            </div>


            <div className="px-2 space-y-2 flex flex-col font-nunito">
              <CommonMenuItems></CommonMenuItems>

              <button
                onClick={handleLogout}
                className="flex gap-6 text-red-500 items-center mx-4 font-medium"
              >
                <BiLogOut className='w-5 h-5' />
                Logout
              </button>
            </div>

          </ul>
        </div>
      </div>

      <div className="w-[80%] h-screen absolute right-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
