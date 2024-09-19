import { FaCalendarAlt } from 'react-icons/fa';
import { LuArrowUpNarrowWide } from "react-icons/lu";
import { TfiGift } from "react-icons/tfi";


import image from '../../../public/asset/offerImage.jpg'
const SpecialOffer = () => {
    return (
        <div>
            <div className='lg:flex items-center justify-center lg:mt-20 mt-10 gap-5 container mx-auto'>
                <div className='w'>
                    <img className='lg:w-[600px] lg:h-[500px] rounded-tl-[150px] border-4 border-[#ff4c30] rounded-br-[150px]' src={image} alt="" />
                </div>
                <div className='lg:w-[50%] mx-auto '>
                    <div>
                        <div className='text-center'>
                            <h2 className='text-[#ff4c30] text-3xl mt-5 lg:text-5xl font-bold '>Our Special Offers</h2>
                            <p className='mt-5 text-black'>Unlock special savings just for you! Enjoy discounted weekend rates, free upgrades, and seasonal offers on car rentals. Book today and experience more value on your next trip with us!</p>
                        </div>
                        <div className='lg:flex px-4 lg:px-0 gap-5'>
                            <div>
                                {/* ***** */}
                                <div className='md:w-[300px] h-[190px]  px-2 py-3 rounded-lg  mt-5  space-y-3 bg-[#ff4c30] text-white text-center '>
                                    <h1 className='text-2xl'>Weekend Getaway</h1>
                                    <p className='px-3'>Book a car for the weekend, enjoy 30% off all rentals from Friday to Sunday.</p>
                                    <div className=' '>
                                        <p className='bg-[#f4705c] text-xs p-2 w-28 mx-auto rounded-lg mt-3'>BOOK NOW</p>
                                        <p className='absolute  lg:ml-[245px] ml-[280px]   -mt-10'><FaCalendarAlt size={35} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* ***** */}
                                <div className='md:w-[300px] h-[190px]  px-2 py-3 rounded-lg  mt-5  space-y-3 bg-[#ff4c30] text-white text-center '>
                                    <h1 className='text-2xl'>Free Upgrade</h1>
                                    <p>Rent an economy car and get a free upgrade to a mid-size vehicle.</p>
                                    <div className=' '>
                                        <p className='bg-[#f4705c] text-xs p-2 w-28 mx-auto rounded-lg mt-5'>BOOK NOW</p>
                                        <p className='absolute  lg:ml-[240px] ml-[280px]  -mt-10'><LuArrowUpNarrowWide size={40}/>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-4 lg:px-0'>
                            {/* ***** */}
                            <div className='md:w-[350px] px-3 mx-auto  py-3 rounded-lg  mt-5  space-y-3 bg-[#ff4c30] text-white text-center '>
                                <h1 className='text-2xl'>Holiday Special</h1>
                                <p className='px-3'>Save up to 25% on rentals during the holiday season.</p>
                                <div className=' '>
                                    <p className='bg-[#f4705c] uppercase text-xs p-2 w-28 mx-auto rounded-lg mt-5'>book now</p>
                                    <p className='absolute  lg:ml-[280px] ml-[280px]   -mt-10'><TfiGift size={40}/>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;