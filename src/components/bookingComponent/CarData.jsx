import { CiCalendarDate } from "react-icons/ci";
import { TbLicense } from "react-icons/tb";
import { FcExpired } from "react-icons/fc";
import { MdAirlineSeatReclineNormal, MdOutlinePriceCheck } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStick } from "react-icons/gi";
import { FaTachometerAlt } from "react-icons/fa";

const CarData = ({ carInformation }) => {
    const {
        brand,
        model,
        buildYear,
        fuel,
        gear,
        mileage,
        seat,
        rentalPrice,
        licenseNumber,
        expireDate
    } = carInformation

    return (
        <div>
            <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold font-merriweather">{brand}</h1>
                <p className="font-nunito font-medium">{model}</p>
            </div>

            <div className="mt-2">

                <div className="space-y-1">
                    <h1 className="flex items-center gap-2 font-nunito font-medium "><CiCalendarDate className="text-xl text-primary" /> Build Year: {buildYear}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><TbLicense className="text-xl text-primary" /> License Number: {licenseNumber}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><FcExpired className="text-xl text-primary" /> Expire Date: {expireDate}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><MdAirlineSeatReclineNormal className="text-xl text-primary" /> Seats: {seat}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><BsFillFuelPumpFill className="text-xl text-primary" /> Fuel: {fuel}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><GiGearStick className="text-xl text-primary" /> Gear: {gear}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><FaTachometerAlt className="text-xl text-primary" /> Mileage: {mileage}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><MdOutlinePriceCheck className="text-xl text-primary" /> Rental price: Per day ৳ {rentalPrice}</h1>
                </div>

            </div>
        </div>
    );
};

export default CarData;