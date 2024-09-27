import {
    FaBook,
    FaHome,
    FaList,
    FaUsers,
    FaUtensils,
} from "react-icons/fa";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./Dashboard.css";
import toast from "react-hot-toast";
import { CiEdit, CiLogout } from "react-icons/ci";
import { SlCallOut } from "react-icons/sl";
import { LuHeartHandshake } from "react-icons/lu";
import { MdMarkEmailRead, MdOutlineViewInAr } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoClose, IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { GiTentacleHeart } from "react-icons/gi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { MdOutlineBook } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";


const Dashboard = () => {
    // const { user } = ...  todo :
    const [user, setUser] = useState({ photoURL: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',role: "admin"})
    const navigate = useNavigate();

    const handleLogout = () => {
        // todo :
        // signOut(auth)
        //     .then(() => {
        //         toast.success("Successfully logged out!");
        //         navigate("/login");
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //     });
    };


    return (
        <div className="">
            <section className="flex flex-col lg:flex-row">
                <div className={`  lg:block lg:w-[300px] pt-24 pb-12 bg-red-50`}>
                    <ul
                        className={`lg:static top-0  z-[11] lg:block bg-white p-5 h-full lg:w-[250px] w-[75%] max-w-[300px] space-y-3 rounded-xl transform transition-transform duration-300 `}
                    >
                        <div className="flex justify-between items-center">
                            <div className="px-6 pt-">
                                <img
                                    src={user?.photoURL}
                                    className="size-[150px] object-cover rounded-full border-4 border-primary"
                                    alt=""
                                />
                            </div>
                        </div>
                        {user?.role === "admin" && (
                            <div className="px-2 space-y-2 pt-6 pb-4 font-light">
                                <NavLink
                                    to="/dashboard/admin-home"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <FaHome></FaHome>
                                    </div>
                                    Admin Home
                                </NavLink>
                                <NavLink
                                    to="/dashboard/manage-users"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <FaUsers />
                                    </div>
                                    Manage Users
                                </NavLink>
                                <NavLink
                                    to="/dashboard/reviews"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <GiTentacleHeart />
                                    </div>
                                    ALl Reviews
                                </NavLink>
                                <NavLink
                                    to="/dashboard/approve-agency"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <GiTentacleHeart />
                                    </div>
                                   Approve Agency
                                </NavLink>
                                <button
                                    onClick={handleLogout}
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <CiLogout />
                                    </div>
                                    Logout
                                </button>
                            </div>
                        )}
                        {user?.role==="user" &&  (
                            <div className="px-2 space-y-2 pt-8 pb-4">
                                <NavLink
                                    to="/dashboard/user-home"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <FaHome></FaHome>
                                    </div>
                                    User Home
                                </NavLink>
                                <NavLink
                                    to="/dashboard/edit-profile"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <CiEdit />
                                    </div>
                                    Edit Profile
                                </NavLink>
                                <NavLink
                                    to="/dashboard/user-bookings"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <CiEdit />
                                    </div>
                                    Bookings
                                </NavLink>
                                <NavLink
                                    to="/dashboard/user-ratings"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <CiEdit />
                                    </div>
                                    All Reviews
                                </NavLink>
                                <button
                                    onClick={handleLogout}
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <CiLogout />
                                    </div>
                                    Logout
                                </button>
                            </div>
                        )}

                        {/* AGENCY--------------------------------------- */}
                        {user?.role === "agency" && (
                            <div className="px-2 space-y-2 pt-8 pb-4">
                                {/* <NavLink
                                    to="/dashboard/agency-home"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <FaHome></FaHome>
                                    </div>
                                    Agency Home
                                </NavLink> */}
                                <NavLink
                                    to="/dashboard/agency/owner-info/update"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                    <MdOutlineEmojiPeople />
                                    </div>
                                    Edit Owner Information
                                </NavLink>
                                <NavLink
                                    to="/dashboard/agency/add-vehicle-info"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                    <FaCarSide />
                                    </div>
                                    Add Vehicle Information
                                </NavLink>
                                <NavLink
                                    to="/dashboard/agency/booking-management"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                    <MdOutlineBook />
                                    </div>
                                    Booking Management
                                </NavLink>

                                <NavLink
                                    to="/dashboard/agency/review-from-customers"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                    <MdOutlineRateReview />
                                    </div>
                                    Review & Feedback of Customers
                                </NavLink>

                                <NavLink
                                    to="/dashboard/agency/staff-management"
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                    <FaPeopleGroup />
                                    </div>
                                    Manage Staff
                                </NavLink>

                                <button
                                    onClick={handleLogout}
                                    className="flex p-2 gap-2 items-center"
                                >
                                    <div>
                                        <CiLogout />
                                    </div>
                                    Logout
                                </button>
                            </div>
                        )}
                        {/* ----------------------------- */}
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;