import { TbLayoutDashboardFilled } from "react-icons/tb";
import MenuItem from "./MenuItem";
import { FaCar, FaCarSide, FaHistory } from "react-icons/fa";
import { MdOutlineBook, MdOutlineRateReview } from "react-icons/md";
import { GiRadioactive } from "react-icons/gi";

const AgencyMenuItems = () => {
    return (
        <div>
            <MenuItem label={"Dashboard "} address={'/dashboard/agency-home'} icon={TbLayoutDashboardFilled}></MenuItem>
            <MenuItem label={"Add Vehicle "} address={'/dashboard/agency/add-vehicle-info'} icon={FaCarSide}></MenuItem>
            <MenuItem label={"Vehicle Information "} address={'/dashboard/agency/vehicle-info'} icon={FaCar}></MenuItem>
            <MenuItem label={"Booking History "} address={'/dashboard/agency/booking-history'} icon={FaHistory}></MenuItem>
            <MenuItem label={"Booking Request "} address={'/dashboard/agency/booking-request'} icon={MdOutlineBook}></MenuItem>
            <MenuItem label={"Active Booking "} address={'/dashboard/agency/active-booking'} icon={GiRadioactive}></MenuItem>
            <MenuItem label={"Review & Feedback "} address={'/dashboard/agency/review-from-customers'} icon={MdOutlineRateReview}></MenuItem>
        </div>
    );
};

export default AgencyMenuItems;
