import { FaCar, FaCarSide, FaHistory, FaHome } from "react-icons/fa";
import MenuItem from "../menuItem/MenuItem";
import { MdOutlineBook, MdOutlineEmojiPeople, MdOutlineRateReview } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiRadioactive } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";


const AgencyItems = () => {
    return (
        <div className="space-y-4">
            <MenuItem label={'Agency Home'} address={'agency-home'} icon={FaHome}> </MenuItem>
            <MenuItem label={'Owner Information'} address={'/agency/owner/:email'} icon={MdOutlineEmojiPeople}> </MenuItem>
            <MenuItem label={'Add Vehicle'} address={'agency/add-vehicle-info'} icon={FaCarSide}> </MenuItem>
            <MenuItem label={'Review & Feedback'} address={'agency/review-from-customers'} icon={MdOutlineRateReview}> </MenuItem>
            <MenuItem label={'Manage Staff'} address={'agency/stuff-managment'} icon={FaPeopleGroup}> </MenuItem>
            <MenuItem label={'Vehicle Information'} address={'agency/vehicle-info'} icon={FaCar}> </MenuItem>
            <MenuItem label={'Booking History'} address={'agency/booking-history'} icon={FaHistory}> </MenuItem>
            <MenuItem label={'Booking Request'} address={'agency/booking-request'} icon={MdOutlineBook}> </MenuItem>
            <MenuItem label={'Active Booking'} address={'agency/active-booking'} icon={GiRadioactive}> </MenuItem>
            <MenuItem label={'Customer Management'} address={'agency/customer-management'} icon={IoIosPeople }> </MenuItem>
        </div>
    );
};

export default AgencyItems;
