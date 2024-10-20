import { GiTentacleHeart } from "react-icons/gi";
import MenuItem from "./MenuItem";


const ModeratorMenuItems = () => {
    return (
        <div>
            <MenuItem label={"Moderator "} address={'/dashboard/moderator-profile'} icon={GiTentacleHeart}></MenuItem>
            <MenuItem label={"Approve Agency "} address={'/dashboard/approve-agency'} icon={GiTentacleHeart}></MenuItem>
        </div>
    );
};

export default ModeratorMenuItems;