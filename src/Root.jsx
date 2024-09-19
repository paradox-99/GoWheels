import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-2 lg:mx-5 xl:mx-auto">
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default Root;