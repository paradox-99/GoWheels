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
    console.log(address);
    console.log(time);

    const searchPage = () => {
        navigate('/search')
    }

    return (
        <div className="flex gap-5 flex-col min-[1220px]:flex-row">
            <div className="">
                <p className="text-lg font-semibold mb-3">Location</p>
                <div className="flex justify-between gap-4 items-center w-full">
                    <Address getAddress={getAddress}></Address>
                </div>
            </div>
            <div>
                <h3 className="font-nunito mb-2 ">Booking Range</h3>
                <TimePicker getTime={getTime}></TimePicker>
            </div>
            <div className="flex justify-end items-end">
                <IconButton aria-label="delete" onClick={searchPage}>
                    <FaSearch />
                </IconButton>
            </div>
        </div>
    );
};

export default HandleSearch;