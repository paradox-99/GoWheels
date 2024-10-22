import HandleSearch from "./HandleSearch";
const Banner = () => {
  return (
    <div className="bg-[#efefef] flex flex-col items-center p-14">
      <div className="bg-white p-6 rounded-md">
        <HandleSearch></HandleSearch>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-10 md:mt-14 lg:mt-20">
        <span className="w-20 h-2 bg-black mb-5 lg:mb-8"></span>
        <h1 className="font-bebas-neue text-black uppercase text-6xl sm:text-7xl font-black flex flex-col leading-none">
          Book Your Ride Today
        </h1>
        {/* <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-4">
          Explore the latest models with cutting-edge technology, safety features, and luxurious designs.
        </p> */}
      </div>
    </div>
  );
};

export default Banner;