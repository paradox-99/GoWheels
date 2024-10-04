import {
    FaCar,
    FaCarSide,
    FaHistory,
    FaHome,
    FaUsers,
} from "react-icons/fa";
import { Link, NavLink, Outlet, } from "react-router-dom";
import { useState } from "react";
import {
    CiLogout,
    CiUser,
    CiStar,
    CiHeart,
} from 'react-icons/ci';
import { GiRadioactive, GiTentacleHeart } from "react-icons/gi";
import { MdManageHistory, MdOutlineBook, MdOutlineRateReview } from "react-icons/md";
import { RiListOrdered } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

const Dashboard = () => {
    const [user] = useState({ photoURL: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=', role: "user" });
    const handleLogout = () => {

    };

    const menuItems = {
        admin: [
            { to: "/dashboard/admin-home", label: "Admin Home", icon: <FaHome /> },
            { to: "/dashboard/manage-users", label: "Manage Users", icon: <FaUsers /> },
            { to: "/dashboard/manage-moderators", label: "Manage Moderators", icon: <GiTentacleHeart /> },
            { to: "/dashboard/manage-agencies", label: "Manage Agencies", icon: <GiTentacleHeart /> },
        ],
        user: [
            { to: "/dashboard/user-home", label: "Dashboard", icon: <FaHome /> },
            { to: "/dashboard/user-profile", label: "My Profile", icon: <CiUser /> },
            { to: "/dashboard/user-bookings", label: "Bookings", icon: <RiListOrdered /> },
            { to: "/dashboard/user-booking-history", label: "Booking History", icon: <MdManageHistory /> },
            { to: "/dashboard/user-ratings", label: "Reviews", icon: <CiStar /> },
            { to: "/dashboard/user-favourite", label: "Favourite Cars", icon: <CiHeart /> },
        ],
        agency: [
            { to: "/dashboard/agency-home", label: "Dashboard", icon: <FaHome /> },
            { to: "/dashboard/agency/owner-info/update", label: "Owner Information", icon: <FaCarSide /> },
            { to: "/dashboard/agency/review-from-customers", label: "Review & Feedback", icon: <MdOutlineRateReview /> },
            { to: "/dashboard/agency/stuff-management", label: "Manage Staff", icon: <FaPeopleGroup /> },
            { to: "/dashboard/agency/vehicle-info", label: "Vehicle Information", icon: <FaCar /> },
            { to: "/dashboard/agency/booking-history", label: "Booking History", icon: <FaHistory /> },
            { to: "/dashboard/agency/booking-request", label: "Booking Request", icon: <MdOutlineBook /> },
            { to: "/dashboard/agency/active-booking", label: "Active Booking", icon: <GiRadioactive /> },
            { to: "/dashboard/agency/customer-management", label: "Customer Management", icon: <IoIosPeople /> },
        ],
    };

    return (
        <div className="">
            <section className="flex flex-col lg:flex-row">
                <div className="lg:w-[350px] pt-16 pb-12 bg-red-50">
                    <ul className="lg:static bg-white p-5 h-full w-[75%] max-w-[300px] space-y-3 rounded-xl">
                        <div className="flex justify-between items-center">
                            <div className="px-6">
                                <img
                                    src={user?.photoURL}
                                    className="size-[150px] object-cover rounded-full border-4 border-primary"
                                    alt="User Avatar"
                                />
                            </div>
                        </div>

                        <div className="px-2 space-y-2 pt-8 pb-4">
                            {menuItems[user.role]?.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `flex p-2 pl-4 gap-2 items-center rounded-lg transition-colors duration-300 
                                        ${isActive ? 'bg-gradient-to-r from-[#ff4c30] to-white text-white' : 'text-gray-700'}`
                                    }
                                >
                                    <div>{item.icon}</div>
                                    {item.label}
                                </NavLink>
                            ))}

                            
                        </div>

                        <div className="mt-12 flex items-center gap-4">
                            <Link to={"/"} className="text-primary underline">Back to Home</Link>
                            <button onClick={handleLogout} className="flex p-2 gap-2 items-center">
                                <div><CiLogout /></div>
                                Logout
                            </button>
                        </div>
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
