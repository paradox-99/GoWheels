import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [scroll, setScroll] = useState(false);

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
        <li className="bg-primary px-5 py-2 text-white text-lg rounded font-semibold ml-7 font-merriweather"><NavLink>JOIN</NavLink></li>
    </>

    return (
        <div className={`font-medium fixed z-10 flex justify-between w-full items-center py-3 px-2 lg:px-16 xl:px-28 transition-colors duration-300`}>
            <div className="flex gap-1 items-center justify-center">
                <figure><img src="/favicon.png" alt="logo" className="w-12" /></figure>
                <h1 className="text-4xl font-nunito font-bold">GoWheels</h1>
            </div>
            <div>
                <ul className="flex gap-4 text-lg font-nunito items-center">
                    {routes}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;