import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Root = () => {

    const location = useLocation()
    const noFooter = location.pathname.includes('signin') || location.pathname.includes('register') || location.pathname.includes('join')

    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-20 max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            {
                noFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Root;