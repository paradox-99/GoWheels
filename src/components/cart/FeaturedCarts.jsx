import { BsFuelPumpFill } from "react-icons/bs";
import { FaCarSide, FaStar } from "react-icons/fa";
import { PiSeatFill } from "react-icons/pi";
import { TbManualGearboxFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
const FeaturedCarts = ({ car }) => {
  return (
    <div>
      <div className="w-full p-5 rounded-lg bg-background shadow-2xl">
        <figure className="h-60">
          <img src={car.image} alt="" className="rounded-lg h-full w-full" />
        </figure>
        <div className="pt-5 flex justify-between items-center pb-3">
          <h2 className="text-3xl font-bold">{car.name}</h2>
          <p className="text-xl font-semibold flex items-center gap-2">
            <FaStar className="text-primary" /> <span>{car.rating}</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xl font-medium py-4 ">
          <p className="flex gap-1 lg:gap-4 items-center">
            <FaCarSide className="text-primary" />{" "}
            <span className="pl-4 border-l-2 border-l-primary border-secondary">
              {car.brand}
            </span>
          </p>
          <p className="flex gap-1 lg:gap-4 items-center">
            <BsFuelPumpFill className="text-primary" />{" "}
            <span className="pl-4 border-l-2 border-l-primary border-secondary">
              {car.fuel}
            </span>
          </p>
          <p className="flex gap-1 lg:gap-4 items-center">
            <PiSeatFill className="text-primary" />
            <span className="pl-4 border-l-2 border-l-primary border-secondary">
              {car.seat}
            </span>
          </p>
          <p className="flex gap-1 lg:gap-4 items-center">
            <TbManualGearboxFilled className="text-primary" />
            <span className="pl-4 border-l-2 border-l-primary border-secondary">
              {car.gear}
            </span>
          </p>
        </div>
        <hr className="h-[3px] bg-secondary" />
        <div className="flex justify-between items-center py-3">
          <div>
            <p className="text-xl font-semibold">Daily rate from</p>
            <h2 className="text-4xl font-semibold">
              <span className="text-primary">$</span>
              <span>{car.price}</span>
            </h2>
          </div>
          <div>
            <Link to={'/view-details'} className="bg-primary hover:bg-transparent hover:border-2 border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-4 py-2 text-background rounded-lg font-nunito font-semibold">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarts;
