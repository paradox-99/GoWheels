// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { CiStar } from "react-icons/ci";
import BasicHeading from "../../../src/components/BasicHeading";

const CustomerTestimonial = () => {
  // const {data: testimonials =[], isLoading, error} = useQuery({
  //     queryKey: ["testimonial"],
  //     queryFn: async ()=>{
  //         const response = await axios.get("/testimonial");
  //         console.log(response.data);
  //         return response.data;
  //     }
  // });
  // if (isLoading) return <div>Loading surveys...</div>;
  // if (error) return <div>Error loading surveys</div>;

  return (
    <div className="max-w-6xl mt-20 mx-auto lg:mt-32 px-4">
      <BasicHeading
        title="TESTIMONIAL"
        heading={"What Our Client Say About Us"}
        desc="Don’t just take our word for it—hear what our satisfied customers have to say about their rental experiences with us!"
      ></BasicHeading>
      <div className="max-w-screen-xl mx-auto lg:p-16">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          <div className="hover:bg-[#ff4c30] hover:text-white transition duration-300 max-w-sm rounded-3xl overflow-hidden shadow-lg">
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://tailwindcss.com/img/jonathan.jpg"
                    className="rounded-full h-12 w-12 mb-4"
                    alt="Profile"
                  />
                  <h1 className="font-bold">Farzana</h1>
                </div>
              </div>
              <a href="#"><h4 className="text-sm mb-3 font-semibold">Booked :  2/3/2023 - 12-12-2023 </h4>
              </a>
              <p className="mb-2 text-sm text-justify">
              I needed a last-minute rental, and GoWheels delivered! The rates were affordable, and the car was in excellent shape. Their customer service team was very helpful as well.
              </p>
            </div>
          </div>
          <div className="hover:bg-[#ff4c30] hover:text-white transition duration-300 max-w-sm rounded-3xl overflow-hidden shadow-lg">
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://tailwindcss.com/img/jonathan.jpg"
                    className="rounded-full h-12 w-12 mb-4"
                    alt="Profile"
                  />
                  <h1 className="font-bold">Name</h1>
                </div>
              </div>
              <a href="#"><h4 className="text-sm mb-3 font-semibold">Booked :  2/3/2023 - 12-12-2023 </h4>
              </a>
              <p className="mb-2 text-sm text-justify">
              Fantastic experience! The vehicle was well-maintained and clean.
              </p>
            </div>
          </div>
          <div className="hover:bg-[#ff4c30] hover:text-white transition duration-300 max-w-sm rounded-3xl overflow-hidden shadow-lg">
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://tailwindcss.com/img/jonathan.jpg"
                    className="rounded-full h-12 w-12 mb-4"
                    alt="Profile"
                  />
                  <h1 className="font-bold">Name</h1>
                </div>
              </div>
              <a href="#"><h4 className="text-sm mb-3 font-semibold">Booked :  2/3/2023 - 12-12-2023 </h4>
              </a>
              <p className="mb-2 text-sm text-justify">
              Good experience overall. Customer support was responsive.
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonial;
