import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiCarProfileLight, PiFacebookLogoBold } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import { GoMail } from "react-icons/go";




const Footer = () => {
    return (
        <div className=" mt-28 bg-[#161616] py-20 text-white">
            <div>
                <div>
                    <div className="lg:flex ml-5 space-y-4 lg:ml-0   lg:justify-around">
                        {/* phone */}
                        <div className="flex  items-center gap-4">
                            <BiPhoneCall  size={30} className="text-[#ff4c30]" />
                            <div>
                                <p>PHONE</p>
                                <p>+7345783456</p>
                            </div>
                        </div>
                        {/* email */}
                        <div className="flex items-center gap-4">
                        <GoMail size={30} className="text-[#ff4c30]" />

                            <div >
                                <p>Email</p>
                                <p>info@limo.com</p>
                            </div>
                        </div>
                        {/* input ;email */}
                        <div className="flex gap-4 flex-wrap">
                            <input className=" bg-[#3C3838]  w-[203px] h-10 py-3 px-3" type="text" name="" id="" placeholder="Your email" />
                            <p className="w-[119px] h-10 bg-[#ff4c30] text-sm flex items-center justify-center">SUBSCRIPTION</p>
                        </div>
                    </div>
                </div>

                {/* ********** */}
                <div className=" mt-10 px-5 lg:px-20">
                    <hr />
                </div>
                {/* ***** */}
                <div className="lg:flex text-center lg:text-left justify-around mt-10">
                    {/* div-2 */}
                    <div>
                        <p><PiCarProfileLight size={70}  className="text-[#ff4c30] mx-auto  lg:mx-0" /></p>
                        <p className="text-[#ff4c30] text-3xl font-bold">GoWheels</p>
                        <p className="w-[300px] mx-auto"> We offer a luxurious and stylish transportation option for various occasions and events. Whether you are planning a special celebration, corporate event, wedding, prom night, or simply desire a sophisticated ride.</p>
                    </div>
                    {/* div-2 */}
                    <div>
                        <p className="font-bold text-xl mt-5 lg:mt-0 ">LINKS</p>
                        <p className="mt-5">Home</p>
                        <p >Pages</p>
                        <p>Services</p>
                        <p>Shop</p>
                        <p>blogs</p>
                    </div>
                    {/* div-2 */}
                    <div>
                        <p className="font-bold text-xl mt-5 lg:mt-0">OUR SERVICES</p>
                        <p className="mt-5">Airport Transfer </p>
                        <p>Business Transfer</p>
                        <p>Luxury Vehicles </p>
                        <p>Events & Wedding </p>
                        <p>Chauffeur Services</p>
                    </div>
                    {/* div-2 */}
                    <div>
                        <p className="font-bold">ADDRESS</p>
                        <p className="w-[300px] mx-auto mt-5">1532 Park Serrena Street,Selgoes Park, Los Angeles90001, US</p>
                        <div className="flex justify-center lg:justify-start gap-4 mt-3">
                            <PiFacebookLogoBold className="text-[#ff4c30]  text-4xl" />
                            <FaLinkedin className="text-[#ff4c30]  text-4xl" />
                            <FaInstagram className="text-[#ff4c30]  text-4xl" />
                        </div>
                    </div>
                </div>
                <div className=" mt-10 px-5 lg:px-20">
                    <hr />
                </div>
                <div className="lg:flex text-center lg:px-36 justify-between mt-3">
                    <p>© Limodrive Car Rental. All Rights Reserved.</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;