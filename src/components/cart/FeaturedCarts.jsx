import { BsFuelPumpFill } from "react-icons/bs";
import { FaCarSide, FaStar } from "react-icons/fa";
import { PiSeatFill } from "react-icons/pi";
import { TbManualGearboxFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";


const FeaturedCarts = ({ car, carBookingInfo }) => {

  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate(`/view-details/${car._id}`, { state: { carBookingInfo } });
  }

  return (
<<<<<<< HEAD
    <div>
      <div className="w-full p-5 rounded-lg shadow-2xl">
        <figure className="h-60">
          <img src={car?.vehicle_info?.photo} alt="" className="rounded-lg h-full w-full" />
        </figure>
        <div className="pt-5 flex justify-between items-center pb-3">
          <h2 className="text-3xl font-bold">{car?.vehicle_info?.brand} {car.ve}</h2>
=======
      <div className="max-w-80 p-5 rounded-lg shadow-2xl">
        <figure className="h-44 w-[280px]">
          <img src={car.vehicle_info.photo} alt="" className="rounded-lg h-full w-full" />
        </figure>
        <div className="pt-5 flex justify-between items-center pb-3">
          <h2 className="text-xl md:text-2xl font-bold">{car.vehicle_info.brand} {car.vehicle_info.model}</h2>
>>>>>>> 40bf332096fe5c3e027685f7624b6ed61bfa9235
          <p className="text-xl font-semibold flex items-center gap-2">
            <FaStar className="text-primary" /> <span>{car?.vehicle_info?.rating}</span>
          </p>
        </div>
<<<<<<< HEAD
        <div className="grid grid-cols-2 gap-3 text-xl font-medium py-4 ">
          <p className="flex gap-1 lg:gap-4 items-center">
            <FaCarSide className="text-primary" />{" "}
            <span className="pl-4 border-l-2 border-l-primary border-secondary">
              {car?.vehicle_info?.brand}
            </span>
          </p>
          <p className="flex gap-1 lg:gap-4 items-center">
            <BsFuelPumpFill className="text-primary" />{" "}
            <span className="pl-4 border-l-2 border-l-primary border-secondary">
              {car?.vehicle_info?.fuel}
=======
        <div className="grid grid-cols-2 gap-3 font-medium py-4 ">
          <p className="flex gap-1 lg:gap-2 items-center">
            <FaCarSide className="text-primary" />
            <span className="pl-2 border-l-2 border-l-primary border-secondary">
              {car.vehicle_info.brand}
            </span>
          </p>
          <p className="flex gap-1 lg:gap-2 items-center">
            <BsFuelPumpFill className="text-primary" />
            <span className="pl-2 border-l-2 border-l-primary border-secondary">
              {car.vehicle_info.fuel}
>>>>>>> 40bf332096fe5c3e027685f7624b6ed61bfa9235
            </span>
          </p>
          <p className="flex gap-1 lg:gap-2 items-center">
            <PiSeatFill className="text-primary" />
<<<<<<< HEAD
            <span className="pl-4 border-l-2 border-l-primary border-secondary">
              {car?.vehicle_info?.seats}
=======
            <span className="pl-2 border-l-2 border-l-primary border-secondary">
              {car.vehicle_info.seats}
>>>>>>> 40bf332096fe5c3e027685f7624b6ed61bfa9235
            </span>
          </p>
          <p className="flex gap-1 lg:gap-2 items-center">
            <TbManualGearboxFilled className="text-primary" />
<<<<<<< HEAD
            <span className="pl-4 border-l-2 border-l-primary border-secondary">
              {car?.vehicle_info?.gear}
=======
            <span className="pl-2 border-l-2 border-l-primary border-secondary">
              {car.vehicle_info.gear}
>>>>>>> 40bf332096fe5c3e027685f7624b6ed61bfa9235
            </span>
          </p>
        </div>
        <hr className="h-[3px] bg-secondary" />
        <div className="flex justify-between items-center py-3">
<<<<<<< HEAD
          <div>
            <p className="text-xl font-semibold">Daily rate from</p>
            <h2 className="text-4xl font-semibold">
              <span className="text-primary">$</span>
              <span>{car?.vehicle_info?.rental_price}</span>
=======
          <div className="flex gap-5">
            <p className="text-lg font-semibold">Daily rate</p>
            <h2 className="text-xl font-semibold">
              <span className="text-primary">৳ </span>
              <span>{car.vehicle_info.rental_price * 120 || 0}</span>
>>>>>>> 40bf332096fe5c3e027685f7624b6ed61bfa9235
            </h2>
          </div>
          <div>
            <Link onClick={handleNext} className="bg-primary hover:bg-transparent hover:border-2 border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-3 py-2 text-background rounded-lg font-nunito font-semibold">
              Details
            </Link>
          </div>
        </div>
      </div>
  );
};

export default FeaturedCarts;
