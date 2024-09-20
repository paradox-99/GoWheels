
const Banner = () => {
    return (
        <main className="dark:bg-gray-800 bg-white relative overflow-hidden  container mx-auto lg:px-20 lg:py-8">
          <div className="bg-white dark:bg-gray-800 flex flex-col sm:flex-row relative items-center overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row relative py-16">
              <div className="w-full sm:w-2/3 lg:w-2/5 flex flex-col relative">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-7xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Book Your Ride 
                  <span className="text-5xl sm:text-7xl">Today</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-4">
                Explore the latest models with cutting-edge technology, safety features, and luxurious designs.
                </p>
                <div className="flex mt-8">
                  <a
                    href="#"
                    className="uppercase py-2 px-4 rounded-lg bg-[#ff4c30] border-2 border-transparent text-white text-md mr-4 hover:bg-[#161616]"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-[#ff4c30] text-[#ff4c30] dark:text-white hover:bg-[#ff4c30] hover:text-white text-md"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/3 lg:w-3/5 mt-8 sm:mt-0 relative">
                <img
                  src="https://i.ibb.co/9W5jp0G/98854.gif"
                  className=" m-auto"
                />
              </div>
            </div>
          </div>
        </main>
      );
};

export default Banner;