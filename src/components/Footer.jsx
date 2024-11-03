import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiCarProfileLight, PiFacebookLogoBold } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-10 bg-[#0e232b] pt-10 pb-5 text-white px-8 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row gap-5 md:justify-between md:items-center">
                <div className="flex items-center gap-4">
                    <BiPhoneCall size={30} className="text-[#ff4c30]" />
                    <div>
                        <p>PHONE</p>
                        <p>+7345783456</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <GoMail size={30} className="text-[#ff4c30]" />
                    <div >
                        <p>Email</p>
                        <p>info@gowheels.com</p>
                    </div>
                </div>
                <div className="flex ">
                    <input className=" bg-[#ffffff] text-black rounded-l-lg w-[150px]  md:w-[200px] h-10 px-3" type="text" name="" id="" placeholder="Your email" />
                    <p className="w-[119px] rounded-r-lg h-10 bg-[#ff4c30] text-sm flex items-center justify-center">Subscribe</p>
                </div>
            </div>

            {/* ********** */}
            <div className="mt-10">
                <hr />
            </div>
            <div className="flex flex-col gap-12 md:gap-20 my-10 lg:flex-row">
                <div className="w-full  lg:w-[500px]">
                    <div className="flex gap-1 items-center">
                        <figure><img src="/logo.gif" alt="logo" className="w-10 md:w-12" /></figure>
                        <Link to={'/'} className="text-2xl font-nunito font-bold">GoWheels</Link>
                    </div>
                    <p className="text-justify"> We offer a luxurious and stylish transportation option for various occasions and events. Whether you are planning a special celebration, corporate event, wedding, prom night, or simply desire a sophisticated ride.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6  w-full">
                    <div className="mt-3">
                        <p className="font-bold text-xl">LINKS</p>
                        <p><Link to={'/'} className="">Home</Link></p>
                        <p><Link to={'/about'} >About</Link></p>
                        <p><Link to={"/contact"}>Support</Link></p>
                        <p><Link to={"/filter"}>Search</Link></p>
                    </div>
                    <div className="mt-3">
                        <p className="font-bold text-xl">OUR SERVICES</p>
                        <p className="">Airport Transfer </p>
                        <p>Business Transfer</p>
                        <p>Luxury Vehicles </p>
                        <p>Events & Wedding </p>
                        <p>Chauffeur Services</p>
                    </div>
                    <div className="mt-3">
                        <p className="font-bold">ADDRESS</p>
                        <p className="">Road no 5, Block A, Gulsan 2, Dhaka</p>
                        <div className="flex justify-center md:justify-start gap-4 mt-8">
                            <PiFacebookLogoBold className="text-[#ff4c30] text-4xl" />
                            <FaLinkedin className="text-[#ff4c30] text-4xl" />
                            <FaInstagram className="text-[#ff4c30] text-4xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-7">
                <hr />
            </div>
            <div className="lg:flex text-center justify-between mt-3">
                <p>© Limodrive Car Rental. All Rights Reserved.</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;