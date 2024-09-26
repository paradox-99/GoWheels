import { FaCarSide, FaHome } from "react-icons/fa";
import MenuItem from "../menuItem/MenuItem";
import { MdOutlineBook, MdOutlineEmojiPeople, MdOutlineRateReview } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";


const AgencyItems = () => {
    return (
        <div className="space-y-4">
            <MenuItem label={'Agency Home'} address={'agency-home'} icon={FaHome}> </MenuItem>
            <MenuItem label={'Edit Information'} address={'agency/owner-info/update'} icon={MdOutlineEmojiPeople}> </MenuItem>
            <MenuItem label={'Add Vehicle'} address={'agency/add-vehicle-info'} icon={FaCarSide}> </MenuItem>
            <MenuItem label={'Booking Management'} address={'agency/booking-management'} icon={MdOutlineBook}> </MenuItem>
            <MenuItem label={'Review & Feedback'} address={'agency/review-from-customers'} icon={MdOutlineRateReview}> </MenuItem>
            <MenuItem label={'Manage Staff'} address={'agency/staff-management'} icon={FaPeopleGroup}> </MenuItem>
        </div>
    );
};

export default AgencyItems;