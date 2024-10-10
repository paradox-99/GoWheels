import { useState } from "react";
import { locationData, keyArea } from "../../../public/locationData";

const Address = ({ getAddress }) => {

    const [selectedDivision, setSelectedDivision] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazilla, setSelectedUpazilla] = useState("");
    const [districts, setDistricts] = useState([]);
    const [upazillas, setUpazillas] = useState([]);
    const [keyAreas, setKeyAreas] = useState([]);
    const [visible, setVisible] = useState(false);


    const handleDivisionChange = (e) => {
        const division = e.target.value;
        setSelectedDivision(division);
        setSelectedDistrict("");
        setSelectedUpazilla("");
        setDistricts(Object.keys(locationData[division] || {}));
        setVisible(false);
        setKeyAreas([""]);
    };

    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        setUpazillas(locationData[selectedDivision][district] || []);
    };

    const handleUpazillaChange = (e) => {
        const upazilla = e.target.value;

        if (upazilla === "Dhaka North" || upazilla === "Dhaka South") {
            setVisible(true);
            if (upazilla === "Dhaka North") {
                setKeyAreas(keyArea["Dhaka North"]);
            } else {
                setKeyAreas(keyArea["Dhaka South"]);
            }
        } else {
            setKeyAreas('');

            const address = { selectedDivision, selectedDistrict, selectedUpazilla: upazilla }
            getAddress(address);
        }
        setSelectedUpazilla(upazilla);
    };

    const handleSubmit = (e) => {
        const keyArea = e.target.value;
        
        const address = {selectedDivision, selectedDistrict, selectedUpazilla, keyArea}

        getAddress(address);
    }

    return (
        <div className="flex flex-col md:flex-row justify-between w-full gap-4 items-center">
            {/* Division Selector */}
                <select name="division" className="outline-none font-nunito  w-[280px] md:w-[150px] bg-transparent border-b-primary border-b-2 py-1 lg:py-2" value={selectedDivision} onChange={handleDivisionChange}>
                    <option value="">Division</option>
                    {Object.keys(locationData).map((division) => (
                        <option key={division} value={division}>
                            {division}
                        </option>
                    ))}
                </select>

                {/* District Selector */}
                <select name="district" className="outline-none font-nunito w-[280px] md:w-[150px] bg-transparent border-b-primary border-b-2 py-1 lg:py-2" value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedDivision}>
                    <option value="">District</option>
                    {districts.map((district) => (
                        <option key={district} value={district}>
                            {district}
                        </option>
                    ))}
                </select>

                {/* Upazilla Selector */}
                {upazillas &&
                    <select name="upazilla" className="outline-none font-nunito w-[280px] md:w-[150px] bg-transparent border-b-primary border-b-2 py-1 lg:py-2" value={selectedUpazilla} onChange={handleUpazillaChange} disabled={!selectedDistrict || upazillas.length === 0}>
                        <option value="">Upazilla/City</option>
                        {upazillas.map((upazilla) => (
                            <option key={upazilla} value={upazilla}>
                                {upazilla}
                            </option>
                        ))}
                    </select>
                }

                {/* Key Areas Selector (If there are any city corporations) */}
                {keyAreas && (
                    <>
                        <select name="keyArea" id="keyArea" className={`${visible ? "block" : "hidden"} outline-none font-nunito w-[280px] md:w-[150px] bg-transparent border-b-primary border-b-2 py-1 lg:py-2`} onChange={handleSubmit} disabled={!selectedDistrict}>
                            <option value="">Area</option>
                            {keyAreas?.map((keyArea) => (
                                <option key={keyArea} value={keyArea}>
                                    {keyArea}
                                </option>
                            ))}
                        </select>
                    </>
                )}
        </div>
    );
};

export default Address;