import { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [scroll, setScroll] = useState(false);
    const [value, setValue] = useState(false);

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
        <li><NavLink to={'filter'}>Filter</NavLink></li>
        <li className="bg-primary px-3 lg:px-5 py-1 lg:py-2 text-white lg:text-lg rounded font-semibold text-center lg:ml-7 font-merriweather w-full "><NavLink to={'join'}>JOIN</NavLink></li>
    </>

    return (
        <div className={`font-medium fixed z-10 flex justify-between w-screen items-center py-3 px-2 md:px-10 lg:px-16 xl:px-28 transition-colors duration-300 ${ scroll ? 'bg-[#161616] text-white':'bg-transparent'}`}>
            <div className="flex gap-1 items-center justify-center">
                <figure><img src="/favicon.png" alt="logo" className="w-7 md:w-12" /></figure>
                <h1 className="text-2xl font-nunito font-bold">GoWheels</h1>
            </div>
            <div className="flex items-start">
                <div className="hidden md:flex">
                    <ul className="flex gap-4 text-lg font-nunito items-center">
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