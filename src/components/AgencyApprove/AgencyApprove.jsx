import { useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "./agencyApprove.css";
import { Link } from "react-router-dom";

const AgencyApprove = () => {
  // const [allCars, setAllCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  // const axiosSecure = useAxiosSecure();

  // const { data: cars = [], refetch } = useQuery({
  //   queryKey: ["Car"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/Car`);
  //     return res.data;
  //   },
  // });

  // useEffect(() => {
  //   const d = async () => {
  //     const res = await axiosSecure.get(
  //       `/car?page=${currentPage}&size=${itemsPerPage}`
  //     );
  //     return setAllCars(res.data);
  //   };
  //   d();
  // }, [axiosSecure, currentPage]);

  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  const handleprevpage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/carCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  // useEffect(() => {
  //   setAllCars(cars);
  // }, [cars]);

  // console.log(allCars);
  // console.log(cars);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[black] mb-6">Agency Approve</h1>
      <div className="overflow-x-auto">
        <table className="table w-full min-w-full bg-secondary text-background">
          <thead className="bg-primary text-background text-xl">
            <tr className="">
              <th>No.</th>
              <th>Agency Name</th>
              <th>Agency Address</th>
              <th>Agency Identity</th>
            </tr>
          </thead>
          <tbody className="text-center w-full">
            {/* row 1 */}
            <tr>
              <th>
                <label>1</label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar"
                        className="rounded-full w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="text-center w-full">
                    <h3 className="font-bold">Name</h3>
                  </div>
                </div>
              </td>
              <td>
                <p>Address</p>
              </td>

              <th>
                <Link
                  to={`/dashboard/approve-agency/agencyDetails/${1}`}
                  className="hover:bg-transparent hover:border-2 border-primary  hover:bg-primary hover:text-white duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-4 py-2 text-background rounded-lg font-nunito font-semibold"
                >
                  Details
                </Link>
              </th>
            </tr>
            <tr>
              <th>
                <label>1</label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar"
                        className="rounded-full w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="text-center w-full">
                    <h3 className="font-bold">Name</h3>
                  </div>
                </div>
              </td>
              <td>
                <p>Address</p>
              </td>

              <th>
                <Link
                  to={`/dashboard/approve-agency/agencyDetails/${1}`}
                  className="hover:bg-transparent hover:border-2 border-primary  hover:bg-primary hover:text-white duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-4 py-2 text-background rounded-lg font-nunito font-semibold"
                >
                  Details
                </Link>
              </th>
            </tr>
            <tr>
              <th>
                <label>1</label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar"
                        className="rounded-full w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="text-center w-full">
                    <h3 className="font-bold">Name</h3>
                  </div>
                </div>
              </td>
              <td>
                <p>Address</p>
              </td>

              <th>
                <Link
                  to={`/dashboard/approve-agency/agencyDetails/${1}`}
                  className="hover:bg-transparent hover:border-2 border-primary  hover:bg-primary hover:text-white duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-4 py-2 text-background rounded-lg font-nunito font-semibold"
                >
                  Details
                </Link>
              </th>
            </tr>
            <tr>
              <th>
                <label>1</label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar"
                        className="rounded-full w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="text-center w-full">
                    <h3 className="font-bold">Name</h3>
                  </div>
                </div>
              </td>
              <td>
                <p>Address</p>
              </td>

              <th>
                <Link
                  to={`/dashboard/approve-agency/agencyDetails/${1}`}
                  className="hover:bg-transparent hover:border-2 border-primary  hover:bg-primary hover:text-white duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-4 py-2 text-background rounded-lg font-nunito font-semibold"
                >
                  Details
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center pt-5">
        <div className="flex justify-end items-center gap-5">
          <button
            className="bg-primary hover:bg-transparent hover:border-2 border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-4 py-2 text-background rounded-lg font-nunito font-semibold"
            onClick={handleprevpage}
          >
            <FaLongArrowAltLeft className="text-xl" />
          </button>

          <button
            className="bg-primary hover:bg-transparent hover:border-2 border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-4 py-2 text-background rounded-lg font-nunito font-semibold"
            onClick={handleNextPage}
          >
            <FaLongArrowAltRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgencyApprove;
