import { CiLogout } from "react-icons/ci";
import MenuItem from "../menuItem/MenuItem";
import { FaHome } from "react-icons/fa";

const CommonItems = () => {
    return (
        <div className="space-y-4">
            <MenuItem label={'Logout'}  icon={CiLogout}> </MenuItem>
            <MenuItem label={'Back to Home'} address= {'/'}  icon={FaHome }> </MenuItem>
        </div>
    );
};

export default CommonItems;