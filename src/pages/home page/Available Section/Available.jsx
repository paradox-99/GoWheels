import { PiSeatFill } from "react-icons/pi";
import Title from "../../../components/Title/Title";
import { BsFuelPumpFill } from "react-icons/bs";
import { FaCarSide, FaStar } from "react-icons/fa";
import { TbManualGearboxFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import "./available.css";

const Available = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./featuredAndAvaiable.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);


  return (
    <div className="pt-28">
      <Title title={"Available Cars"}></Title>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center justify-items-center lg:px-40">
        {data.map((car) => (
          <div
            key={car.name}
            className="hover w-full rounded-lg bg-background shadow-2xl relative h-[410px]"
          >
            <figure className="h-full">
              <img
                src={car.image}
                alt=""
                className="rounded-lg w-full h-full"
              />
            </figure>
            <div className="show absolute top-0 bg-[#161616c5] h-full w-full rounded-lg p-5 lg:px-10">
              <div className="pt-5 flex justify-between items-center pb-3">
                <h2 className="text-3xl font-bold text-background">
                  {car.name}
                </h2>
                <p className="text-xl font-semibold flex items-center gap-2 text-background">
                  <FaStar className="text-primary" /> <span>{car.rating}</span>
                </p>
              </div>
              <hr className="h-[3px] bg-secondary" />
              <div className="grid grid-cols-2 md:gap-3 gap-1 text-xl font-medium py-4 text-background">
                <p className="flex md:gap-4 gap-1 items-center flex-wrap">
                  <FaCarSide className="text-primary" />{" "}
                  <span className="pl-4 border-l-2 border-l-primary border-secondary">
                    {car.brand}
                  </span>
                </p>
                <p className="flex md:gap-4 gap-1 items-center flex-wrap">
                  <BsFuelPumpFill className="text-primary" />{" "}
                  <span className="pl-4 border-l-2 border-l-primary border-secondary">
                    {car.fuel}
                  </span>
                </p>
                <p className="flex md:gap-4 gap-1 items-center flex-wrap">
                  <PiSeatFill className="text-primary" />
                  <span className="pl-4 border-l-2 border-l-primary border-secondary">
                    {car.seat}
                  </span>
                </p>
                <p className="flex md:gap-4 gap-1 items-center flex-wrap">
                  <TbManualGearboxFilled className="text-primary" />
                  <span className="pl-4 border-l-2 border-l-primary border-secondary">
                    {car.gear}
                  </span>
                </p>
              </div>
              <hr className="h-[3px] bg-secondary" />
              <div className=" text-center py-3">
                <div className="text-background">
                  <p className="text-xl font-semibold py-1">Daily rate from</p>
                  <h2 className="text-4xl font-semibold">
                    <span className="text-primary">$</span>
                    <span>{car.price}</span>
                  </h2>
                </div>
                <div className="py-10">
                  <button className="bg-primary px-4 py-2 text-background rounded-lg font-nunito font-medium">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
            <div className="available absolute top-0 right-0">
                <p className="text-background bg-primary md:px-5 px-3 md:py-2 py-1 md:text-3xl text-xl rounded-tr-lg font-semibold">Available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Available;
