import HandleSearch from "./HandleSearch";
const Banner = () => {
  return (
    <div className="bg-[#efefef] flex flex-col items-center p-8">
      <div className="bg-white p-6 rounded-md">
        <HandleSearch></HandleSearch>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-8 md:mt-10 lg:mt-14">
        <span className="w-20 h-2 bg-black mb-5 lg:mb-8"></span>
        <h1 className="font-bebas-neue text-black uppercase text-center text-4xl md:text-6xl lg:text-7xl font-black flex flex-col leading-none">
          Book Your Ride Today
        </h1>
      </div>
    </div>
  );
};

export default Banner;