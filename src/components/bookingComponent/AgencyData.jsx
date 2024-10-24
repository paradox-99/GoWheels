import { CiCalendarDate } from "react-icons/ci";
import { TbLicense } from "react-icons/tb";
import { FcExpired } from "react-icons/fc";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStick } from "react-icons/gi";



const AgencyData = ({ AgencyInformation }) => {

    const {
        agencyName,
        agencyAddress,
        businessRegNumber,
        insuranceLicenseNumber,
        numberOfVehicles,
        taxIdentificationNumber,
        transportLicenseNumber,
        agencyEmail,
        agency_id
    } = AgencyInformation

    return (
        <div>
            <div className="mt-2">

                <div className="space-y-1">
                    <h1 className="flex items-center gap-2 font-nunito font-medium "><CiCalendarDate className="text-xl text-primary" /> Agency name: {agencyName}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><CiCalendarDate className="text-xl text-primary" /> Agency Email: {agencyEmail}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><CiCalendarDate className="text-xl text-primary" /> Agency Id: {agency_id}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><TbLicense className="text-xl text-primary" /> License Divission: {agencyAddress?.division}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><TbLicense className="text-xl text-primary" /> License District: {agencyAddress?.district}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><TbLicense className="text-xl text-primary" /> License Upazila: {agencyAddress?.upazilla}</h1>
                    {
                        agencyAddress?.area && <>
                            <h1 className="flex items-center gap-2 font-nunito font-medium "><TbLicense className="text-xl text-primary" /> area: {agencyAddress?.area}</h1>
                        </>
                    }

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><TbLicense className="text-xl text-primary" /> License Registration no: {businessRegNumber}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><FcExpired className="text-xl text-primary" /> Expire Insurance: {insuranceLicenseNumber}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><MdAirlineSeatReclineNormal className="text-xl text-primary" /> Number Of Vehicles: {numberOfVehicles}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><BsFillFuelPumpFill className="text-xl text-primary" /> Tax Identification: {taxIdentificationNumber}</h1>

                    <h1 className="flex items-center gap-2 font-nunito font-medium "><GiGearStick className="text-xl text-primary" /> Transport lisence : {transportLicenseNumber}</h1>

                </div>

            </div>
        </div>
    );
};

export default AgencyData;