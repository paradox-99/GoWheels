import { useEffect, useState } from "react";
import { CgMenu, CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import useDesignation from "../hooks/useDesignation";
import { TbMapPinSearch } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";

import Swal from "sweetalert2";
import toast from "react-hot-toast"
const Navbar = () => {
    const { user, logout, loader } = useAuth();
    const [previousScrollY, setPreviousScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const [shadow, setShadow] = useState(false);
    const [value, setValue] = useState(false);
    const [value2, setValue2] = useState(false);
    const { userInfo } = useDesignation();
    const navigate = useNavigate();
    const location = useLocation();
    const hideNavbar = location.pathname === '/join/signUpFour' || location.pathname === '/join/signUpFive' || location.pathname === '/join/login-Info' || location.pathname === '/join/otpRoute';

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 50) {
            setShadow(true)
        } else {
            setShadow(false)
        }
        if (currentScrollY > previousScrollY && currentScrollY > 50) {
            setShowNavbar(false);
        } else if (currentScrollY < previousScrollY || currentScrollY < 50) {
            setShowNavbar(true);
        }

        setPreviousScrollY(currentScrollY);
    };

    const handleLogout = async () => {
        try {
            await logout();
            toast.success("Logged out successfully")
            navigate("/join");
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Logout failed",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [previousScrollY]);

    if (hideNavbar || (hideNavbar && loader)) return null;

    // if (!user && loader) {
    //     return (
    //         <div className='absolute right-[40%] top-[16px] lg:top-[-24px]'>
    //             <img className='mx-auto w-16 lg:w-32' src={loaderEliment} alt="" />
    //         </div>
    //     );
    // }

    const routes = (
        <>
            <li><NavLink
                className={({ isActive }) =>
                    isActive ? 'text-primary px-2 py-1 rounded' : 'hover:text-primary duration-200 px-2 py-1 rounded'
                }
                to={'/'}>Home</NavLink></li>
            <li><NavLink
                className={({ isActive }) =>
                    isActive ? 'text-primary px-2 py-1 rounded' : 'hover:text-primary duration-200 px-2 py-1 rounded'
                }
                to={'about'}>Agencies</NavLink></li>
            <li><NavLink
                className={({ isActive }) =>
                    isActive ? 'text-primary px-2 py-1 rounded' : 'hover:text-primary duration-200 px-2 py-1 rounded'
                } to={'contact'}>Support</NavLink></li>

        </>
    );

    return (
        <div className={`font-medium bg-white text-black fixed z-10 w-screen transition-transform duration-200 ${showNavbar ? `translate-y-0 ${shadow ? "shadow-xl" : "bg-[#F8F8F8]"} ` : '-translate-y-full'} `}>
            <div className="flex justify-between items-center py-3 px-2 md:px-10 lg:px-16 xl:px-28">
                <div className="flex gap-1 items-center">
                    <figure><img src="/logo.gif" alt="logo" className="w-10 md:w-12" /></figure>
                    <Link to={'/'} className="text-2xl font-nunito font-bold">GoWheels</Link>
                </div>
                <div>
                    <ul className="flex gap-4 lg:gap-8 text-lg font-nunito items-center">
                        {routes}
                    </ul>
                </div>
                <div className="flex items-start">
                    <div className="hidden md:flex md:gap-5">
                        <Link to={'filter'} className="flex items-center gap-2 md:text-xl"><IoMdSearch />Search</Link>
                        {!user && (
                            <li className="bg-primary px-2 text-sm lg:px-5 py-1 lg:py-2 text-white  rounded  text-center lg:ml-7 font-merriweather w-full ">
                                <NavLink
                                    to={'join'}>JOIN</NavLink>
                            </li>
                        )}
                        {user && (
                            <div className="group">
                                <button onClick={() => setValue(!value)}>
                                    {userInfo.circleImage ? (
                                        <img
                                            src={userInfo.circleImage}
                                            alt="Profile Picture"
                                            className="w-12 h-12 rounded-full border-[3px] border-primary"
                                        />
                                    ) : userInfo?.image ? (
                                        <img
                                            src={userInfo?.image}
                                            alt="Profile Picture"
                                            referrerPolicy="no-referrer"
                                            className="w-10 rounded-full border-[3px] border-primary"
                                        />
                                    ) : (
                                        <CgProfile className="size-8 text-primary" />
                                    )}
                                </button>
                                <div
                                    className={`absolute rounded-md bg-white transition-all  duration-[.35s] right-0 text-base text-secondary font-medium top-[60px] group-hover:scale-y-100 group-hover:translate-y-0 scale-y-0 -translate-y-[80px]`}>
                                    <ul className={`w-[210px] px-4 pt-4 pb-4`}>
                                        {userInfo.userRole === "user" && <li className="hover:text-primary duration-200  px-4 py-2"><Link to={'/dashboard/user-profile'}>Profile</Link></li>}
                                        {userInfo.userRole === "agency" && <li className="hover:text-primary duration-200  px-4 py-2"><Link to={'/dashboard/agency/owner'}>Profile</Link></li>}
                                        {userInfo.userRole === "moderator" && <li className="hover:text-primary duration-200  px-4 py-2"><Link to={'/dashboard/moderator-profile'}>Profile</Link></li>}
                                        {userInfo.userRole === "user" && <li className="hover:text-primary duration-200  px-4 py-2"><Link to={'/dashboard/user-home'}>Dashboard</Link></li>}
                                        {userInfo.userRole === "agency" && <li className="hover:text-primary duration-200  px-4 py-2"><Link to={'/dashboard/agency-home'}>Dashboard</Link></li>}
                                        {userInfo.userRole === "moderator" && <li className="hover:text-primary duration-200  px-4 py-2"><Link to={'/dashboard/moderator-profile'}>Dashboard</Link></li>}
                                        {userInfo.userRole === "admin" && <li className="hover:text-primary duration-200  px-4 py-2"><Link to={'/dashboard/admin-home'}>Dashboard</Link></li>}
                                        <li className="hover:text-primary duration-200  px-4 py-2"><button onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex md:hidden">
                        <div onClick={() => setValue2(!value2)}>
                            {value2 ? <RxCross2 /> : <CgMenu />}
                        </div>
                        <div className="relative">
                            <ul className={`bg-primary text-white rounded w-40 absolute flex flex-col font-nunito mt-2 ${!value2 ? "-right-60" : "right-0"} duration-500`}>
                                {routes}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
