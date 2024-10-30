import { useState } from "react";
import Address from "../../components/address/Address";
import TimePicker from "../../components/address/TimePicker";
import { IconButton } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HandleSearch = () => {

    const [address, setAddress] = useState();
    const [time, setTime] = useState();
    const navigate = useNavigate();

    const getAddress = (address) => {
        setAddress(address);
    }
    const getTime = (timeAndDate) => {
        setTime(timeAndDate)
    }

    const searchPage = () => {
        const division = address.selectedDivision;
        const district = address.selectedDistrict;
        const upazilla = address.selectedUpazilla;
        const keyArea = address.keyArea;
        const fromDate = time.fromDate;
        const fromTime = time.fromTime;
        const untilDate = time.untilDate;
        const untilTime = time.untilTime;
        
        const location = new URLSearchParams({division: division, district: district, upazilla: upazilla, keyArea: keyArea});
        const date = new URLSearchParams({fromDate: fromDate, fromTime: fromTime, untilDate: untilDate, untilTime: untilTime});
        navigate(`/search/queries?${location}&${date}`)
    }

    return (
        <div className="flex gap-5 flex-col min-[1220px]:flex-row justify-center items-center">
            <div className="">
                <p className="font-nunito lg:mb-4 font-semibold text-lg text-center md:text-left">Location</p>
                <div className="flex gap-4 lg:items-center w-full">
                    <Address getAddress={getAddress}></Address>
                </div>
            </div>
            <div>
                <h3 className="font-nunito lg:mb-2 font-semibold text-lg text-center md:text-left">Booking Date</h3>
                <TimePicker getTime={getTime}></TimePicker>
            </div>
            <div className=" min-[1222px]:mt-10">
                <IconButton onClick={searchPage}>
                    <FaSearch className="w-5 md:w-7"/>
                </IconButton>
            </div>
        </div>
    );
};

export default HandleSearch;