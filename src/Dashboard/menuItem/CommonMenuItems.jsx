
import { FaHome } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { GrUserAdmin } from "react-icons/gr";

const CommonMenuItems = () => {
    return (
        <div>
            <MenuItem label={"My Profile "} address={'/dashboard/profile'} icon={GrUserAdmin}></MenuItem>
            <MenuItem label={"Back to home "} address={'/'} icon={FaHome}></MenuItem>
        </div>
    );
};

export default CommonMenuItems;