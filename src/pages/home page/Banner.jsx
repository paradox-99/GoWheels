import { useState, useEffect } from "react";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://demo.xpeedstudio.com/carrental/onepage/wp-content/uploads/sites/6/2020/07/car21.png",
    "https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/banner_car.png",
    "https://july.finestwp.com/newwp/carola/wp-content/uploads/2024/07/car.png",
    "https://demo.xpeedstudio.com/carrental/home-v3/wp-content/uploads/sites/3/2020/07/car11.png"
  ];


  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <main className="bg-[#F8F8F8] h-[600px] relative overflow-hidden container mx-auto -mt-2 lg:px-6 lg:py-8">
      <div className="flex flex-col sm:flex-row relative items-center overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row relative py-10 lg:py-16">
          <div className="w-full sm:w-2/3 lg:w-2/5 flex flex-col relative">
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
          <div className="w-full sm:w-1/3 lg:w-3/5 mt-8 sm:mt-0 relative">
            <img
              src={images[currentImage]}
              className="m-auto w-[700px] transition-opacity duration-1000 ease-in-out"
              alt="Car"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
