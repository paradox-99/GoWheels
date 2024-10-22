import { Helmet } from "react-helmet-async";

const BookingRequest = () => {
  return (
    <div className="dark:bg-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 justify-center p-6">
      <Helmet>
        <title>Booking Request</title>
      </Helmet>
      <div className=" dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
        <div className="flex items-center  gap-4">
          <img
            src="https://i.ibb.co/QDcX7Fm/c19.jpg"
            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
          />
          <div className="w-fit transition-all transform duration-500">
            <h1 className="text-black dark:text-gray-200 font-bold">
              Farzana Hossain
            </h1>
            <p className="text-black">Car Brand: Toyota</p>
            <a className="text-lg front-extrabold text-black group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
              want to Book from: 29th june 2024, <br /> To: 2 july, 2024
            </a>
          </div>
        </div>
        <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-[#ff4c30] dark:bg-gray-100 right-4 p-2 rounded-full">
          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white font-bold dark:text-black">
            Details
          </div>
        </div>
      </div>
      <div className=" dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
        <div className="flex items-center  gap-4">
          <img
            src="https://i.ibb.co/Bnf4zMj/c18.jpg"
            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
          />
          <div className="w-fit transition-all transform duration-500">
            <h1 className="text-black dark:text-gray-200 font-bold">
              Farzana Hossain
            </h1>
            <p className="text-black">Car Brand: Audi</p>
            <a className="text-lg front-extrabold text-black group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
              want to Book from: 29th june 2024, <br /> To: 2 july, 2024
            </a>
          </div>
        </div>
        <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-[#ff4c30] dark:bg-gray-100 right-4 p-2 rounded-full">
          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white font-bold dark:text-black">
            Details
          </div>
        </div>
      </div>
      <div className=" dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
        <div className="flex items-center  gap-4">
          <img
            src="https://i.ibb.co/v1mSm7K/c17.jpg"
            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
          />
          <div className="w-fit transition-all transform duration-500">
            <h1 className="text-black dark:text-gray-200 font-bold">
              Farzana Hossain
            </h1>
            <p className="text-black">Car Brand: Marcidis</p>
            <a className="text-lg front-extrabold text-black group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
              want to Book from: 29th june 2024, <br /> To: 2 july, 2024
            </a>
          </div>
        </div>
        <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-[#ff4c30] dark:bg-gray-100 right-4 p-2 rounded-full">
          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white font-bold dark:text-black">
            Details
          </div>
        </div>
      </div>
      <div className=" dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
        <div className="flex items-center  gap-4">
          <img
            src="https://i.ibb.co/JQZVL9Q/c16.jpg"
            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
          />
          <div className="w-fit transition-all transform duration-500">
            <h1 className="text-black dark:text-gray-200 font-bold">
              Farzana Hossain
            </h1>
            <p className="text-black">Car Brand: Toyota</p>
            <a className="text-lg front-extrabold text-black group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
              want to Book from: 29th june 2024, <br /> To: 2 july, 2024
            </a>
          </div>
        </div>
        <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-[#ff4c30] dark:bg-gray-100 right-4 p-2 rounded-full">
          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white font-bold dark:text-black">
            Details
          </div>
        </div>
      </div>

    </div>
  );
};

export default BookingRequest;
