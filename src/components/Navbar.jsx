import { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import useAuth  from "../hooks/UseAuth";
import useDesignation from "../hooks/useDesignation";
import { TbMapPinSearch } from "react-icons/tb";

const Navbar = () => {

    const { user } = useAuth();
    const [scroll, setScroll] = useState(false);
    const [value, setValue] = useState(false);
    const {userInfo} = useDesignation();

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const routes = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'about'}>About</NavLink></li>
        <li><NavLink to={'contact'}>Contact</NavLink></li>
        {
            !user && 
            <li className="bg-primary px-3 lg:px-5 py-1 lg:py-2 text-white lg:text-lg rounded font-semibold text-center lg:ml-7 font-merriweather w-full "><NavLink to={'join'}>JOIN</NavLink></li>
        }
        {
            user && <li className="bg-primary px-3 lg:px-5 py-1 lg:py-2 text-white lg:text-lg rounded font-semibold text-center lg:ml-7 font-merriweather w-full "><Link to={'/dashboard'}>Dashboard</Link></li>
        }
        {
            user && (userInfo.circleImage? (<img src={userInfo?.circleImage } alt="Profile Picture" referrerPolicy="no-referrer" className="w-12 h-12 rounded-full"/>) : (<img src={userInfo?.image } alt="Profile Picture" referrerPolicy="no-referrer" className="w-12 h-12 rounded-full"/>) )
        }
    </>

    return (
        <div className={`font-medium fixed z-10 flex justify-between w-screen items-center py-2 px-2 md:px-10 lg:px-16 xl:px-28 transition-colors duration-300 ${scroll ? 'bg-[#161616] text-white' : 'bg-transparent'}`}>
            <div className="flex gap-1 items-center justify-center">
                <figure><img src="/logo.gif" alt="logo" className="w-10 md:w-12" /></figure>
                <Link to={'/'} className="text-2xl font-nunito font-bold">GoWheels</Link>
            </div>
            <div>
                <Link to={'filter'} className="flex items-center gap-2 text-xl"><TbMapPinSearch />Search</Link>
            </div>
            <div className="flex items-start">
                <div className="hidden md:flex">
                    <ul className="flex gap-8 text-lg font-nunito items-center">
                        {routes}

                    </ul>
                </div>

                <div className="flex md:hidden">
                    <div onClick={() => setValue(!value)}>
                        {
                            value ? <RxCross2></RxCross2> : <CgMenu></CgMenu>
                        }
                    </div>
                    <div className="relative">
                        <ul className={`bg-slate-200 rounded w-40 top-5 absolute flex flex-col gap-2 lg:gap-4 font-nunito px-3 ${!value ? "-right-60" : "right-0"} duration-500`}>
                            {routes}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Navbar;