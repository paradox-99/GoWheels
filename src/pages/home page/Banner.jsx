import { useState, useEffect } from "react";

import HandleSearch from "./HandleSearch";
const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/image3.png",
    "/image4.png",
    "/image5.png",
    "/image6.png",
  ];


  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <main style={{ backgroundSize: "600px" }} className="bg-[#F8F8F8] bg-[url('/banner_image.png')]  bg-no-repeat md:bg-[right_top]  -mt-10 lg:px-20 lg:py-8">
      {/* <div className="absolute top-0 z-[1] right-0">
        <img src="/banner_image.png" className="w-[600px]" alt="" />
      </div> */}
      <div className="flex z-[2] flex-col h-[600px]  sm:flex-row  items-center ">
        <div className="  z-[2]  mx-auto px-4 flex flex-col sm:flex-row  py-10 lg:py-16">
          <div className="w-full sm:w-2/3 lg:w-2/5 flex flex-col ">
            <span className="font-sans w-[60px] font-medium bg-primary h-1 mb-5 text-2xl"></span>
            <h1 className="font-extrabold text-6xl sm:text-7xl leading-none text-gray-800">
              Book Your <span className="text-primary">Ride</span> Today
            </h1>
            <p className="text-sm sm:text-base mt-4">
              Explore the latest models with cutting-edge technology, safety features, and luxurious designs.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="uppercase py-2 px-4 bg-[#ff4c30] border-2 border-transparent text-white text-md mr-4 hover:bg-[#161616]"
              >
                Get started
              </a>
              <a
                href="#"
                className="uppercase py-2 px-4 border border-secondary text-secondary hover:text-white hover:bg-secondary text-md"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/3 lg:w-3/5 mt-8 sm:mt-0 ">
            <img
              src={images[currentImage]}
              className="m-auto w-[700px] transition-opacity duration-1000 ease-in-out"
              alt="Car"
            />
          </div>
        </div>
      </div>

      <div className="-mt-12 mx-auto z-[2] lg:w-[1200px] border border-gray-300 p-10">
        <HandleSearch />
      </div>
    </main>
  );
};

export default Banner;
