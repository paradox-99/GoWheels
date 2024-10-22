import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Address from "../../components/address/Address";
import { useState } from "react";
import FeaturedCarts from "../../components/cart/FeaturedCarts";
import { top_brands } from "../../../public/locationData";
import { Helmet } from "react-helmet-async";
import TimePicker from "../../components/address/TimePicker";

const Filter = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [address, setAddress] = useState();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [carBookingInfo, setCarBookingInfo] = useState(null);

  const handleFilter = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fromDate = form.fromDate.value;
    const fromTime = form.fromTime.value;
    const untilDate = form.untilDate.value;
    const untilTime = form.untilTime.value;

    const division = address.selectedDivision;
    const district = address.selectedDistrict;
    const upazilla = address.selectedUpazilla;
    let area = "";
    if (address.keyArea) {
      area = address.keyArea
    }

    const filterData = {
      fromDate,
      fromTime,
      untilDate,
      untilTime,
      division,
      district,
      upazilla,
      area
    };

    const { data } = await axiosPublic.get('/bookings/getSearchData', { params: filterData })
    console.log(data)
    setSearchResult(data)
    setCarBookingInfo(filterData)
  };

  const handleBrand = brand_name => {
    navigate(`/brand/${brand_name}`)
  }

  const getAddress = (address) => {
    setAddress(address);
  }

  return (
    <div className="my-20 w-full px-4">
      <Helmet>
        <title>Search</title>
      </Helmet>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleFilter}
          className="flex justify-center items-center flex-col w-fit lg:flex-row px-5 rounded-lg py-5"
        >
          <div className="flex justify-between items-center flex-col min-[1180px]:flex-row rounded-full gap-6">
            <div className="">
              <p className="text-lg font-semibold mb-3">Location</p>
              <div className="flex justify-between gap-4 items-center w-full">
                <Address getAddress={getAddress}></Address>
              </div>
            </div>
            <div>
              {/* <div>
                <p className="text-lg font-semibold mb-3">From</p>
                <div className="flex justify-center items-center gap-4">
                  <input
                    type="text" // Start as text to show placeholder
                    name="fromDate"
                    id="fromDate"
                    className="outline-none w-[130px] bg-transparent font-nunito border-b-primary py-1 lg:py-2 border-b-2"
                    placeholder="Select Date"
                    required
                    ref={ref1}
                    readOnly={true}
                    onFocus={() => {
                      ref1.current.type = "date";
                      ref1.current.readOnly = false;
                    }}
                    onBlur={() => {
                      ref1.current.type = "text";
                      ref1.current.readOnly = true;
                    }}
                    onKeyDown={(e) => {
                      e.preventDefault();
                    }}
                    onChange={handleDateChange}
                    min={todayDate}
                    max={maxDate}
                  />
                  <input
                    type="text"
                    name="fromTime"
                    id="fromTime"
                    className="outline-none w-[130px] bg-transparent font-nunito border-b-primary py-1 lg:py-2 border-b-2 cursor-pointer"
                    placeholder="Time"
                    required
                    ref={ref2}
                    onFocus={() => {
                      ref2.current.type = "time";
                    }}
                    onBlur={handleBlur}
                    onChange={handleTimeChange}
                    min={nowTime}
                  />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold mb-3">Until</p>
                <div className="flex justify-center gap-4 items-center">
                  <input
                    type="text"
                    name="untilDate"
                    id="untilDate"
                    className="outline-none w-[130px] bg-transparent font-nunito border-b-primary py-1 lg:py-2 border-b-2 cursor-pointer"
                    placeholder="Select Date"
                    required
                    ref={ref3}
                    readOnly={true}
                    onFocus={() => {
                      ref3.current.type = "date";
                      ref3.current.readOnly = false;
                    }}
                    onBlur={() => {
                      ref3.current.type = "text";
                      ref3.current.readOnly = true;
                    }}
                    onKeyDown={(e) => {
                      e.preventDefault();
                    }}
                    onChange={handleUntilDateChange}
                    disabled={!isUntilFieldsEnabled}
                    min={selectedDate}
                    max={maxUntilDate}
                  />
                  <input
                    type="text"
                    name="untilTime"
                    id="untilTime"
                    className="outline-none w-[130px] bg-transparent font-nunito border-b-primary py-1 lg:py-2 border-b-2 cursor-pointer"
                    placeholder="Time"
                    required
                    ref={ref4}
                    onFocus={() => {
                      ref4.current.type = "time";
                    }}
                    onBlur={handTimeleBlur}
                    min={minUntilTime}
                  />
                </div>
              </div> */}
              <h3 className="font-nunito mb-2">Booking Range</h3>
              <TimePicker></TimePicker>
            </div>
          </div>
          <div className="lg:ml-4 mt-8 lg:mt-0">
            <button className="bg-primary hover:bg-transparent hover:border-2 font-nunito border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 p-2 text-background rounded-full font-semibold">
              <FaSearch className="text-xl" />
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {
          searchResult?.map(car => <FeaturedCarts
            key={car._id}
            car={car}
            carBookingInfo={carBookingInfo}
          ></FeaturedCarts>)
        }
      </div>

      <div className="mt-28">
        <div className="bg-secondary w-20 h-2 mb-8"></div>
        <h1 className="text-5xl font-merriweather font-bold">Top Brands</h1>
        <div className="mt-10 flex flex-wrap lg:flex-nowrap lg:flex-row justify-center gap-5">
          {
            top_brands.map(brand =>
              <div key={brand.name}>
                <div className="bg-slate-200 rounded-md relative" onClick={() => handleBrand(brand.name)}>
                  <img src={brand.image} alt="" className="w-[300px] h-[200px] -z-10" />
                  <img src={brand.logo} alt="" className="w-[300px] h-[200px] hover:bg-secondary absolute top-0 left-0 rounded-md opacity-0 hover:opacity-100 transition ease-in-out duration-700 z-10" />
                </div>
                <h3 className="text-center font-nunito text-2xl font-semibold mt-4">{brand.name}</h3>
              </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Filter;
