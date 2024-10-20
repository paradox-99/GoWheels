import { TbLayoutDashboardFilled } from "react-icons/tb";
import MenuItem from "./MenuItem";
import { FaUsers } from "react-icons/fa";
import { GiTentacleHeart } from "react-icons/gi";


const AdminMenuItems = () => {
    return (
        <div>
            <MenuItem label={"Home "} address={'/dashboard/admin-home'} icon={TbLayoutDashboardFilled}></MenuItem>
            <MenuItem label={"Users "} address={'/dashboard/manage-users'} icon={FaUsers}></MenuItem>
            <MenuItem label={"Moderators "} address={'/dashboard/manage-moderators'} icon={GiTentacleHeart}></MenuItem>
            <MenuItem label={"Agencies "} address={'/dashboard/manage-agencies'} icon={GiTentacleHeart}></MenuItem>
        </div>
    );
};

export default AdminMenuItems;
