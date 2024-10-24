import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Address from "../../components/address/Address";
import { useState } from "react";
import FeaturedCarts from "../../components/cart/FeaturedCarts";
import { top_brands } from "../../../public/locationData";
import { Helmet } from "react-helmet-async";
import TimePicker from "../../components/address/TimePicker";
import useVehicleData from "../../hooks/useVehicleData";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { MdError } from "react-icons/md";


const Filter = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [address, setAddress] = useState();
  const [time, setTime] = useState();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [carBookingInfo, setCarBookingInfo] = useState(null);

  const { cars } = useVehicleData();
  const brands = [...new Set(cars.map((brand) => brand.brand))];

  // const models = cars.map((car) => car.model)


  const handleBrandChange = (e) => {
    e.preventDefault();
    const brand = e.target.value;
    setSelectedBrand(brand)

  }

  const handleFilter = async (e) => {
    e.preventDefault();

    setErrorMessage("")

    const division = address.selectedDivision;
    const district = address.selectedDistrict;
    const upazilla = address.selectedUpazilla;

    const initailDate = time.fromDate;
    const initalTime = time.fromTime;
    const toDate = time.untilDate;
    const toTime = time.untilTime;

    let area = "";
    if (address.keyArea) {
      area = address.keyArea
    }

    const filterData = {
      initailDate,
      initalTime,
      toDate,
      toTime,
      division,
      district,
      upazilla,
      area,
      selectedBrand
    };

    try {
      const { data } = await axiosPublic.get('/carsRoute/getSearchData', { params: filterData });

      console.log

      if (data.message === "No car found with the provided details") {
        setErrorMessage(data.message);
        setSearchResult([]);
        return;
      }

      setSearchResult(data)
      setCarBookingInfo(filterData)
    }

    catch (error) {
      console.log(error)
    }

  };

  const handleBrand = brand_name => {
    navigate(`/brand/${brand_name}`)
  }

  const getAddress = (address) => {
    setAddress(address);
  }

  const getTime = (getTime) => {
    setTime(getTime)
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
          <div className="flex justify-center items-center flex-col lg:flex-row gap-6">
            {/* addres */}
            <div>
              <p className="text-lg font-semibold mb-3">Location</p>
              <div className="flex justify-between gap-4 items-center w-full">
                <Address getAddress={getAddress}></Address>
              </div>
            </div>
            {/* time and date */}
            <div>
              <h3 className="font-nunito mb-2">Booking Range</h3>
              <TimePicker getTime={getTime}></TimePicker>
            </div>
            {/* car brand */}
            <div >
              <InputLabel className="font-nunito mb-2">Brand</InputLabel>
              <Select
                name="brand"
                value={selectedBrand}
                onChange={handleBrandChange}
                label="Brand"
                variant="outlined"
              >
                {brands.map((brand, index) => (
                  <MenuItem key={index} value={brand}>{brand}</MenuItem>
                ))}
              </Select>
            </div>

          </div>
          <div className="lg:ml-4 mt-8 lg:mt-0">
            <button className="bg-primary hover:bg-transparent hover:border-2 font-nunito border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 p-2 text-background rounded-full font-semibold">
              <FaSearch className="text-xl" />
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 flex justify-center">
        {
          errorMessage && <>
            <h1 className="text-4xl font-nunito font-semibold text-primary flex items-center gap-1" >{errorMessage}! <MdError /></h1>
          </>
        }
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {
          searchResult && <>
            <FeaturedCarts
              searchResult={searchResult}
              carBookingInfo={carBookingInfo}
            ></FeaturedCarts>
          </>
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
