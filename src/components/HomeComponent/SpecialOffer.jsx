import { FaCalendarAlt } from "react-icons/fa";
import { LuArrowUpNarrowWide } from "react-icons/lu";
import { TfiGift } from "react-icons/tfi";

import image from "../../../public/asset/offerImage.jpg";
const SpecialOffer = () => {
  return (
    <div>
      <div className="lg:flex items-center justify-center lg:mt-14 mt-10 gap-5 container mx-auto">
        <div className="">
          <img
            className="lg:w-[600px] max-w-full lg:h-[380px] object-cover"
            src={"/image7.png"}
            alt=""
          />
        </div>
        <div className="lg:w-[50%] w-full mx-auto ">
          <div>
            <div className="text-center">
              <h2 className="text-[#ff4c30] text-3xl mt-5 lg:text-5xl font-bold ">
                Our Special Offers
              </h2>
              <p className="mt-5 text-black">
                Unlock special savings just for you! Enjoy discounted weekend
                rates, free upgrades, and seasonal offers on car rentals. Book
                today and experience more value on your next trip with us!
              </p>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-5 pt-5">
              <div className="w-[300px] h-[190px] relative py-3 rounded-lg  space-y-3 bg-[#ff4c30] text-white text-center ">
                <h1 className="text-2xl">Weekend Getaway</h1>
                <p className="px-3">
                  Book a car for the weekend, enjoy 30% off all rentals from
                  Friday to Sunday.
                </p>
                <div className=" ">
                  <p className="bg-[#f4705c] text-xs p-2 w-28 mx-auto rounded-lg mt-3">
                    BOOK NOW
                  </p>
                  <p className="absolute top-32 right-3">
                    <FaCalendarAlt size={35} />
                  </p>
                </div>
              </div>

              <div className="w-[300px] h-[190px] relative py-3 rounded-lg  space-y-3 bg-[#ff4c30] text-white text-center ">
                <h1 className="text-2xl">Free Upgrade</h1>
                <p>
                  Rent an economy car and get a free upgrade to a mid-size
                  vehicle.
                </p>
                <div className=" ">
                  <p className="bg-[#f4705c] text-xs p-2 w-28 mx-auto rounded-lg mt-5">
                    BOOK NOW
                  </p>
                  <p className="absolute top-28 right-3">
                    <LuArrowUpNarrowWide size={40} />
                  </p>
                </div>
              </div>

              <div className="w-[300px] h-[190px] relative mx-auto py-3 rounded-lg  space-y-3 bg-[#ff4c30] text-white text-center ">
                <h1 className="text-2xl">Holiday Special</h1>
                <p className="px-3">
                  Save up to 25% on rentals during the holiday season.
                </p>
                <div className="">
                  <p className="bg-[#f4705c] uppercase text-xs p-2 w-28 mx-auto rounded-lg mt-5">
                    book now
                  </p>
                  <p className="absolute top-28 right-3">
                    <TfiGift size={40} />
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
