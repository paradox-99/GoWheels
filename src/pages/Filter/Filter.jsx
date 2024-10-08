import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Address from "../../components/address/Address";
import { useEffect, useRef, useState } from "react";
import FeaturedCarts from "../../components/cart/FeaturedCarts";
import { top_brands } from "../../../public/locationData";
import toast from "react-hot-toast";
import { calculateHoursDifference, calculateMaxUntilDate, calculateMinUntilTime, calculateTimeDifference, getMaxDate, getNowTime, getTodayDate } from "../../api/dateTime/dateTimeUtilities";

const Filter = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [address, setAddress] = useState();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [carBookingInfo, setCarBookingInfo] = useState(null);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  // from date and time states
  const [todayDate, setTodayDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [nowTime, setNowTime] = useState("");

  // to date and time states
  const [selectUntilDate, setSelectUntildate] = useState("");
  const [maxUntilDate, setMaxUntilDate] = useState("");
  const [minUntilTime, setMinUntilTime] = useState("");

  // from date and time functions starts
  useEffect(() => {
    setTodayDate(getTodayDate());
    setMaxDate(getMaxDate());
  }, []);

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setSelectedDate(dateValue);
    setMaxUntilDate(calculateMaxUntilDate(dateValue));
  };

  useEffect(() => {
    setNowTime(getNowTime());
  }, []);


  const handleBlur = () => {
    const selectedTime = ref2.current.value;
    if (selectedDate === todayDate && selectedTime <= nowTime) {
      toast.error("Don`t select previous or current time ");
      ref2.current.value = "";
      return
    }
    ref2.current.type = "text";
  };

 const handleTimeChange = (e) => {
    const selectedTimeValue = e.target.value;
    setSelectedTime(selectedTimeValue);

    if (selectedDate === selectUntilDate) {
      setMinUntilTime(calculateMinUntilTime(selectedTimeValue));
    } else {
      setMinUntilTime('');
    }
  };
  // from date and time functions ends

  const isUntilFieldsEnabled = selectedDate && selectedTime;

  // to time and date functionality starts
  const handleUntilDateChange = (e) => {
    const untilDateValue = e.target.value;
    setSelectUntildate(untilDateValue);

    if (selectedDate === untilDateValue && selectedTime) {
      setMinUntilTime(calculateMinUntilTime(selectedTime));
    } else {
      setMinUntilTime('');
    }
  };

  const handTimeleBlur = () => {
    const selectedUntilTime = ref4.current.value;

    const minDiffTime = calculateHoursDifference(selectedDate, selectedTime, selectUntilDate, selectedUntilTime)
    const timeDiff = calculateTimeDifference(selectedTime, selectedUntilTime)

    if (selectedDate === selectUntilDate && timeDiff < 10) {
      toast.error("you have to select time at least ten hours ahed of from time");
      ref4.current.value = "";
      return
    }
    else if (minDiffTime < 10) {
      toast.error("The minimum time difference should be 10 hours");
      ref4.current.value = "";
      return;
    }
    ref4.current.type = "text";
  }
// to time and date functionality ends


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
    <div className="my-20 w-full">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleFilter}
          className="flex justify-center items-center flex-col w-fit lg:flex-row px-5 rounded-lg py-5"
        >
          <div className="flex justify-between items-center flex-col lg:flex-row rounded-full gap-10">
            <div className="">
              <p className="text-lg font-semibold mb-3">Pickup Location</p>
              <div className="flex justify-between gap-4 items-center">
                <Address getAddress={getAddress}></Address>
              </div>
            </div>
            <div className="">
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
            <div className="">
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
                  // onChange={handleUntilTimeChange}
                  min={minUntilTime}
                />
              </div>
            </div>
          </div>
          <div className="ml-4">
            <button className="bg-primary hover:bg-transparent hover:border-2 font-nunito border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 p-2 text-background rounded-full font-semibold">
              <FaSearch className="text-xl" />
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-3 gap-10">
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
        <div className="mt-10 flex gap-5">
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
