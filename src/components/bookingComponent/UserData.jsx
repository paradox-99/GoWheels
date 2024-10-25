import { FaPhoneAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline, MdOutlineEmail } from "react-icons/md";
import { PiGenderIntersexFill } from "react-icons/pi";
import { HiMiniDocumentChartBar } from "react-icons/hi2";
import { GrLicense } from "react-icons/gr";

const UserData = ({ userInformation }) => {

    const {
        firstName,
        lastName,
        userEmail,
        phone,
        gender,
        nid,
        drivingLicense
    } = userInformation
    return (
        <div>
            <div className="border-b-[1px] border-dashed border-primary pb-2">
                <h1 className="text-lg font-bold font-merriweather">Your information appears here</h1>
                <p className="font-nunito font-medium">including name, email, phone, gender, NID, and driving lisence</p>
            </div>
            <div className="mt-2 space-y-1">
                <h1 className="flex items-center gap-2 font-nunito font-medium "><MdDriveFileRenameOutline className="text-xl text-primary" /> Full Name: {firstName} {lastName}</h1>

                <h1 className="flex items-center gap-2 font-nunito font-medium "><MdOutlineEmail className="text-xl text-primary" /> Email: {userEmail}</h1>

                <h1 className="flex items-center gap-2 font-nunito font-medium "><FaPhoneAlt className="text-xl text-primary" />Phone number: {phone}</h1>

                <h1 className="flex items-center gap-2 font-nunito font-medium "><PiGenderIntersexFill className="text-xl text-primary" />Gender: {gender}</h1>

                <h1 className="flex items-center gap-2 font-nunito font-medium "><HiMiniDocumentChartBar className="text-xl text-primary" />NID number: {nid? nid : "not available !"}</h1>

                <h1 className="flex items-center gap-2 font-nunito font-medium "><GrLicense className="text-xl text-primary" />Driving License: {drivingLicense? drivingLicense : "not available !"}</h1>
            </div>
        </div>
    );
};

export default UserData;