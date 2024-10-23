import { TbLayoutDashboardFilled } from "react-icons/tb";
import MenuItem from "./MenuItem";
import { CiHeart, CiStar } from "react-icons/ci";
import { RiListOrdered } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";

const UserMenuItems = () => {
    return (
        <div>
            <MenuItem label={"Dashboard "} address={'/dashboard/user-home'} icon={TbLayoutDashboardFilled}></MenuItem>
            <MenuItem label={"Bookings "} address={'/dashboard/user-bookings'} icon={RiListOrdered}></MenuItem>
            <MenuItem label={"Reviews "} address={'/dashboard/user-ratings'} icon={CiStar}></MenuItem>
            <MenuItem label={"Favourite Cars "} address={'/dashboard/user-favourite'} icon={CiHeart}></MenuItem>
            <MenuItem label={"Notifications "} address={'/dashboard/notifications'} icon={MdOutlineNotificationsActive}></MenuItem>
        </div>
    );
};

export default UserMenuItems;