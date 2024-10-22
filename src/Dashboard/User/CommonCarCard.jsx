import { BsFuelPumpFill } from 'react-icons/bs';
import { FaCarSide } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { PiSeatFill } from 'react-icons/pi';
import { TbManualGearboxFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const CommonCarCard = ({car}) => {
    return (
        <div className="bg-white shadow-md group rounded-lg p-4">
            <img
                src={car.vehicle_info.photo}
                alt={`${car.vehicle_info.brand} ${car.vehicle_info.model}`}
                className="w-full group-hover:scale-105 duration-500 h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">
                {car.vehicle_info.brand} {car.vehicle_info.model} ({car.vehicle_info.build_year})
            </h2>
            <div className="grid grid-cols-2 gap-3  font-medium py-4 ">
                <p className="flex gap-1 lg:gap-4 items-center">
                    <FaCarSide className="text-primary" />{" "}
                    <span className="pl-1">
                        {car.vehicle_info.brand}
                    </span>
                </p>
                <p className="flex gap-1 lg:gap-4 items-center">
                    <BsFuelPumpFill className="text-primary" />{" "}
                    <span className="pl-1">
                        {car.vehicle_info.fuel}
                    </span>
                </p>
                <p className="flex gap-1 lg:gap-4 items-center">
                    <PiSeatFill className="text-primary" />
                    <span className="pl-1">
                        {car.vehicle_info.seats}
                    </span>
                </p>
                <p className="flex gap-1 lg:gap-4 items-center">
                    <TbManualGearboxFilled className="text-primary" />
                    <span className="pl-1">
                        {car.vehicle_info.gear}
                    </span>
                </p>
            </div>
            <div className='flex justify-end hover:translate-x-1 duration-300'>
                <Link className='text-primary flex items-center gap-1 font-semibold px-2 py-1 text-sm' to={`/view-details/${car._id}`}>
                    View Details <MdKeyboardArrowRight className='text-lg mt-[1px]' />
                </Link>
            </div>
        </div>
    );
};

export default CommonCarCard;