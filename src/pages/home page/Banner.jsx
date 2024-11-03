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
    <main style={{ backgroundSize: "600px" }} className="bg-[#F8F8F8] bg-[url('/banner_image.png')]  bg-no-repeat bg-[right_top]  -mt-10 lg:px-20 lg:py-8">
      <div className="flex items-center">
        <div className="mx-auto px-4 pt-10 md:pt-16 flex flex-col md:flex-row gap-10 lg:gap-20">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="font-sans w-[60px] font-medium bg-primary h-1 mb-5 text-2xl"></span>
            <h1 className="font-extrabold text-5xl lg:text-6xl xl:text-7xl leading-none text-gray-800 text-center md:text-left">
              Book Your <span className="text-primary">Ride</span> Today
            </h1>
            <p className="mt-4 text-center md:text-left">
              Explore the latest models with cutting-edge technology, safety features, and luxurious designs.
            </p>
            <div className="flex mt-8 justify-center md:justify-start">
              <a href="#" className="uppercase rounded py-1 md:py-2 px-2 md:px-4 bg-[#ff4c30] border-2 border-transparent text-white mr-4 hover:bg-[#161616] text-sm md:text-base"> Get started </a>
              <a href="#" className="uppercase py-1 md:py-2 px-2 md:px-4 border rounded border-secondary text-secondary hover:text-white hover:bg-secondary text-sm md:text-base" > Read more </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={images[currentImage]} className="w-2/3 md:w-full transition-opacity duration-1000 ease-in-out" alt="Car"/>
          </div>
        </div>
      </div>
      <div className="px-5 mt-10">
        <HandleSearch />
      </div>
    </main>
  );
};

export default Banner;
