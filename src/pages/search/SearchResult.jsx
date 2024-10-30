import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Address from "../../components/address/Address";
import TimePicker from "../../components/address/TimePicker";
import { IconButton } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { keyArea } from "../../../public/locationData";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SearchResult = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const axiosPublic = useAxiosPublic();


    const [division, setDivision] = useState(params.get("division"));
    const [district, setDistrict] = useState(params.get("district"));
    const [upazilla, setUpazilla] = useState(params.get("upazilla"));
    const [keyArea, setKeyArea] = useState(params.get("keyArea"));
    const [fromDate, setFromDate] = useState(params.get("fromDate"));
    const [fromTime, setFromTime] = useState(params.get("fromTime"));
    const [untilDate, setUntilDate] = useState(params.get("untilDate"));
    const [untilTime, setUntilTime] = useState(params.get("untilTime"));
    const [address, setAddress] = useState();
    const [time, setTime] = useState();

    const locationValues = { division, district, upazilla, keyArea };
    const timeValues = { fromDate, fromTime, untilDate, untilTime };

    const { data: cars, isPending } = useQuery({
        queryKey: ["cars"],
        queryFn: async () => {
            const filterData = {
                fromDate,
                fromTime,
                untilDate,
                untilTime,
                division,
                district,
                upazilla,
                keyArea
            };
            const response = await axiosPublic.get('/carsRoute/getSearchData', { params: filterData });
            return response.data;
        },
    })
    const getAddress = (address) => {
        setAddress(address);
    }
    const getTime = (timeAndDate) => {
        setTime(timeAndDate)
    }

    // console.log(typeof(KeyArea));
    // let keyPoint = []
    // if (KeyArea === 'Dhaka South') {
    //     keyPoint = keyArea["Dhaka South"]
    // }
    // else {
    //     keyPoint = keyArea["Dhaka North"]
    // }

    // console.log(keyPoint);

    const searchPage = () => {

    }

    return (
        <div className="mt-14 w-full">
            <div className="mb-10 w-full flex gap-5 flex-col min-[1220px]:flex-row justify-center items-center">
                <div className="">
                    <p className="font-nunito lg:mb-4 font-semibold text-lg text-center md:text-left">Location</p>
                    <div className="flex gap-4 lg:items-center w-full">
                        <Address getAddress={getAddress} location={locationValues}></Address>
                    </div>
                </div>
                <div>
                    <h3 className="font-nunito lg:mb-2 font-semibold text-lg text-center md:text-left">Booking Date</h3>
                    <TimePicker getTime={getTime} time={timeValues}></TimePicker>
                </div>
                <div className=" min-[1222px]:mt-10">
                    <IconButton onClick={searchPage}>
                        <FaSearch className="w-5 md:w-7" />
                    </IconButton>
                </div>
            </div>
            <div className="w-full">

            </div>
        </div>
    );
};

export default SearchResult;