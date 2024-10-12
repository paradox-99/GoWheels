import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiCarProfileLight, PiFacebookLogoBold } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import { GoMail } from "react-icons/go";

const Footer = () => {
    return (
        <div className="mt-10 bg-[#161616] pt-10 pb-5 text-white px-5 lg:px-20">
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
                        <p>info@limo.com</p>
                    </div>
                </div>
                <div className="flex gap-4 flex-wrap">
                    <input className=" bg-[#3C3838]  w-[203px] h-10 py-3 px-3" type="text" name="" id="" placeholder="Your email" />
                    <p className="w-[119px] h-10 bg-[#ff4c30] text-sm flex items-center justify-center">SUBSCRIPTION</p>
                </div>
            </div>

            {/* ********** */}
            <div className="mt-10">
                <hr />
            </div>
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:text-left mt-10">
                <div className="min-[400px]:col-span-2 md:col-span-3 xl:col-span-1 lg:mb-5">
                    <p><PiCarProfileLight size={70} className="text-[#ff4c30] mx-auto lg:mx-0" /></p>
                    <p className="text-[#ff4c30] text-3xl font-bold">GoWheels</p>
                    <p className="text-justify"> We offer a luxurious and stylish transportation option for various occasions and events. Whether you are planning a special celebration, corporate event, wedding, prom night, or simply desire a sophisticated ride.</p>
                </div>
                <div className="mt-5 lg:mt-0">
                    <p className="font-bold text-xl">LINKS</p>
                    <p className="">Home</p>
                    <p >Pages</p>
                    <p>Services</p>
                    <p>Shop</p>
                    <p>blogs</p>
                </div>
                <div className="mt-5 lg:mt-0">
                    <p className="font-bold text-xl">OUR SERVICES</p>
                    <p className="">Airport Transfer </p>
                    <p>Business Transfer</p>
                    <p>Luxury Vehicles </p>
                    <p>Events & Wedding </p>
                    <p>Chauffeur Services</p>
                </div>
                <div className="mt-5 lg:mt-0 min-[400px]:col-span-2 md:col-span-1 min-[400px]:flex md:block min-[400px]:flex-col min-[400px]:justify-center min-[400px]:items-center">
                    <p className="font-bold">ADDRESS</p>
                    <p className="">Road no 5, Block A, Gulsan 2, Dhaka</p>
                    <div className="flex justify-center md:justify-start gap-4 mt-8">
                        <PiFacebookLogoBold className="text-[#ff4c30] text-4xl" />
                        <FaLinkedin className="text-[#ff4c30] text-4xl" />
                        <FaInstagram className="text-[#ff4c30] text-4xl" />
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