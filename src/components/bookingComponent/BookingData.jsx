import { IoMdTime } from "react-icons/io";
import { MdOutlineMyLocation } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaMapLocation } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

const BookingData = ({ fromDate, formTime, toDate, toTime, division, district, upazila, area }) => {

    return (
        <div>
            <div className="border-b-[1px] border-dashed border-primary pb-2">
                <h1 className="text-lg font-bold font-merriweather">Booking information</h1>
                <p className="font-nunito font-medium">including date, time and location</p>
            </div>

            <div>
                <div className="mt-2 space-y-1">
                    <h1 className="flex items-center gap-2 font-nunito font-medium "><SlCalender className="text-xl text-primary" /> From Date: {fromDate}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><IoMdTime className="text-xl text-primary" />From Time: {formTime}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><SlCalender className="text-xl text-primary" />To Date: {toDate}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><IoMdTime className="text-xl text-primary" />To Time: {toTime}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><MdOutlineMyLocation className="text-xl text-primary" /> Division: {division}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><FaMapLocation className="text-xl text-primary" />District: {district}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><FaLocationArrow className="text-xl text-primary" />Upazila: {upazila}</h1>

                    {
                        area && <h1 className="flex items-center gap-2 font-nunito font-medium "><IoLocation className="text-xl text-primary" />Area: {area}</h1>
                    }
                </div>

                {/* <div className="mt-5 space-y-1">
                    <h1 className="flex items-center gap-2 font-nunito font-medium "><MdOutlineMyLocation className="text-xl text-primary" /> Division: {division}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><FaMapLocation className="text-xl text-primary" />District: {district}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><FaLocationArrow className="text-xl text-primary" />Upazila: {upazila}</h1>

                    {
                        area && <h1 className="flex items-center gap-2 font-nunito font-medium "><IoLocation className="text-xl text-primary" />Area: {area}</h1>
                    }

                </div> */}
            </div>

        </div>
    );
};

export default BookingData;