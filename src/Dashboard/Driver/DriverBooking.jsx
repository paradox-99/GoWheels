import { Helmet } from "react-helmet-async";

const DriverBooking = () => {
    return (
        <div className="min-h-screen dark:bg-slate-800">
            <Helmet>
                <title>Active Bookings</title>
            </Helmet>
            <div className=" grid grid-cols-1 gap-6 justify-center p-6">
                <div className=" dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform flex justify-between items-center">
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
                            <a className="text-lg front-extrabold text-black">
                                want to Book <br /> from: 29th june 2024, <br /> To: 2 july, 2024
                            </a>
                        </div>
                    </div>
                    <div className="w-fit transition-all transform duration-500">
                        <h1 className="text-black dark:text-gray-200 font-bold">
                            User Details
                        </h1>
                        <p className="text-black">Car Brand: Toyota</p>
                        <a className="text-lg front-extrabold text-black">
                            want to Book <br /> from: 29th june 2024, <br /> To: 2 july, 2024
                        </a>
                    </div>
                    <div className=" bg-[#ff4c30] dark:bg-gray-100 px-5 py-1 rounded-xl  ">
                        <div className="flex justify-end items-end gap-2 text-xl text-white font-bold dark:text-black ">
                            Incomplete
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-20">
                <div className="p-10">
                    <h1 className="text-3xl font-bold text-[white] mb-6 border-b-2 pb-2">Complete Work here</h1>
                    <div className="overflow-x-auto">
                        <table className="table w-full min-w-full  ">
                            <thead className="bg-primary  text-xl">
                                <tr className="text-white">
                                    <th className="py-1">No.</th>
                                    <th>Car Name</th>
                                    <th>User Date</th>
                                    <th>User Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center w-full">
                                {/* row 1 */}
                                {/* {allAgency.map((agency, index) => ( */}
                                <tr className="border shadow-lg bg-[#374151]">
                                    <th>
                                        <label>1.</label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="text-center w-full">
                                                <h3 className="font-bold"> Car Name</h3>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>from: 29th june 2024, <br /> To: 2 july, 2024</p>
                                    </td>
                                    <td>
                                        <p>from: Dhaka <br /> to: Rangpur</p>
                                    </td>

                                    <th className="py-4">
                                        <button
                                            className="bg-green-500 px-4  text-lg text-black rounded-full"
                                        >
                                            completed
                                        </button>
                                    </th>
                                </tr>
                                <tr className="border shadow-lg bg-[#374151]">
                                    <th>
                                        <label>1.</label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="text-center w-full">
                                                <h3 className="font-bold"> Car Name</h3>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>from: 29th june 2024, <br /> To: 2 july, 2024</p>
                                    </td> 
                                    <td>
                                        <p>from: Dhaka <br /> to: Rangpur</p>
                                    </td>

                                    <th className="py-4">
                                        <button
                                            className="bg-green-500 px-4  text-lg text-black rounded-full"
                                        >
                                            completed
                                        </button>
                                    </th>
                                </tr>
                                <tr className="border shadow-lg bg-[#374151]">
                                    <th>
                                        <label>1.</label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="text-center w-full">
                                                <h3 className="font-bold"> Car Name</h3>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>from: 29th june 2024, <br /> To: 2 july, 2024</p>
                                    </td>
                                    <td>
                                        <p>from: Dhaka <br /> to: Rangpur</p>
                                    </td>

                                    <th className="py-4">
                                        <button
                                            className="bg-green-500 px-4  text-lg text-black rounded-full"
                                        >
                                            completed
                                        </button>
                                    </th>
                                </tr>
                                {/* ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverBooking;