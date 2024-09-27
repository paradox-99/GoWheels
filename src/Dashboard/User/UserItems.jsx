import { FaHome } from "react-icons/fa";
import MenuItem from "../menuItem/MenuItem";
import { CiEdit } from "react-icons/ci";


const UserItems = () => {
    return (
        <div className="space-y-4">
            <MenuItem label={'User Home'} address={'user-home'} icon={FaHome}> </MenuItem>
            <MenuItem label={'Bookings'} address={'user-bookings'} icon={CiEdit}> </MenuItem>
            <MenuItem label={'All Reviews'} address={'user-ratings'} icon={CiEdit}> </MenuItem>
        </div>
    );
};

export default UserItems;