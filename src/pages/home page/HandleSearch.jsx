import { useState } from "react";
import Address from "../../components/address/Address";
import TimePicker from "../../components/address/TimePicker";

const HandleSearch = () => {

    const [address, setAddress] = useState();

    const getAddress = (address) => {
        setAddress(address);
      }

    return (
        <div className="flex gap-5 flex-col min-[1220px]:flex-row ">
            <div className="">
                <p className="text-lg font-semibold mb-3">Location</p>
                <div className="flex justify-between gap-4 items-center w-full">
                    <Address getAddress={getAddress}></Address>
                </div>
            </div>
            <div>
                <h3 className="font-nunito mb-2 ">Booking Range</h3>
                <TimePicker></TimePicker>
            </div>
        </div>
    );
};

export default HandleSearch;