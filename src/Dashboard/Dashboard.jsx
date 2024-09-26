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
import AdminItems from "./Admin/AdminItems";
import UserItems from "./User/UserItems";
import CommonItems from "./common/CommonItems";
import AgencyItems from "./Agency/AgencyItems";


const Dashboard = () => {
    // const { user } = ...  todo :
    
    const [user, setUser] = useState({ photoURL: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=', role: "agency" })


    // const navigate = useNavigate();
    // const handleLogout = () => {
    //     todo :
    //     signOut(auth)
    //         .then(() => {
    //             toast.success("Successfully logged out!");
    //             navigate("/login");
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // };


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

                        {user?.role === "admin" && <AdminItems></AdminItems>}
                        {user?.role === "user" && <UserItems></UserItems>}
                        {user?.role === "agency" && <AgencyItems></AgencyItems>}
                        <CommonItems></CommonItems>
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