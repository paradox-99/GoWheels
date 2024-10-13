import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Root = () => {

    const location = useLocation()
    const noFooter = location.pathname.includes('signin') || location.pathname.includes('register') || location.pathname.includes('join')
    const hideNavbar = location.pathname === '/join/signUpFour' || location.pathname === '/join/signUpFive' || location.pathname === '/join/login-Info';

    return (
        <div>
            <Navbar></Navbar>
            <div className={`${hideNavbar ? 'pt-0' : 'pt-16 lg:pt-20'} ${noFooter || 'max-w-7xl mx-auto noFooter'}`}>
                <Outlet></Outlet>
            </div>
            {
                noFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Root;