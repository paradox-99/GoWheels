import { TbLayoutDashboardFilled } from "react-icons/tb";
import MenuItem from "./MenuItem";
import { GiTentacleHeart } from "react-icons/gi";
import { RiListOrdered } from "react-icons/ri";
import { MdManageHistory } from "react-icons/md";
import { CiHeart, CiStar } from "react-icons/ci";


const DriverMenuItems = () => {
    return (
        <div>
            <MenuItem label={"Dashboard "} address={'/dashboard/user-home'} icon={TbLayoutDashboardFilled}></MenuItem>
            <MenuItem label={"Driver Booking "} address={'/dashboard/driver-booking'} icon={GiTentacleHeart}></MenuItem>
            <MenuItem label={"Bookings "} address={'/dashboard/user-bookings'} icon={RiListOrdered}></MenuItem>
            <MenuItem label={"Booking History "} address={'/dashboard/user-booking-history'} icon={MdManageHistory}></MenuItem>
            <MenuItem label={"Reviews "} address={'/dashboard/user-ratings'} icon={CiStar}></MenuItem>
            <MenuItem label={"Favourite Cars "} address={'/dashboard/user-favourite'} icon={CiHeart}></MenuItem>
        </div>
    );
};

export default DriverMenuItems;