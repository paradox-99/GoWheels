import { CiLogout } from "react-icons/ci";
import MenuItem from "../menuItem/MenuItem";

const CommonItems = () => {
    return (
        <div className="space-y-4">
            <MenuItem label={'Logout'}  icon={CiLogout}> </MenuItem>
        </div>
    );
};

export default CommonItems;