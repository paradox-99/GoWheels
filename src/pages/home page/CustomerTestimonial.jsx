// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { CiStar } from "react-icons/ci";

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
    <div>
      <div className="max-w-screen-xl mx-auto p-16">
        <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
          <div className="hover:bg-[#ff4c30] hover:text-white transition duration-300 max-w-sm rounded-3xl overflow-hidden shadow-lg">
            <div className="py-8 px-8">
              <div className="flex items-center justify-between">
                <CiStar />
                <div className="flex items-center gap-2">
                  <img
                    src="https://tailwindcss.com/img/jonathan.jpg"
                    className="rounded-full h-12 w-12 mb-4"
                    alt="Profile"
                  />
                  <h1 className="font-bold">Name</h1>
                  <h1 className="font-bold">Name</h1>
                </div>
              </div>
              <a href="#">
                <h4 className="text-lg mb-3 font-semibold">Booked: </h4>
              </a>
              <p className="mb-2 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </p>
              
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonial;
