import { useState } from "react";
import { locationData, keyArea } from "../../../public/locationData";
import { FormControl, InputLabel, MenuItem, Select, ThemeProvider } from "@mui/material";
import { customTheme2 } from "../theme/Theme";

const Address = ({ getAddress, location }) => {

    const [selectedDivision, setSelectedDivision] = useState(location?.division || "");
    const [selectedDistrict, setSelectedDistrict] = useState(location?.district || "");
    const [selectedUpazilla, setSelectedUpazilla] = useState(location?.upazilla || "");
    const [selectedKeyArea, setSelectedKeyArea] = useState(location?.keyArea || "");
    const [districts, setDistricts] = useState(Object.keys(locationData[location?.division] || {}));
    const [upazillas, setUpazillas] = useState((location && locationData[selectedDivision][location?.district]) || []);
    const [keyAreas, setKeyAreas] = useState((location?.keyArea === 'Dhaka North' ? keyArea["Dhaka South"] : keyArea["Dhaka North"]) || []);
    
    const [visible, setVisible] = useState(location?.keyArea && true);

    const handleDivisionChange = (e) => {
        const division = e.target.value;
        setSelectedDivision(division);
        setSelectedDistrict("");
        setSelectedUpazilla("");
        setDistricts(Object.keys(locationData[division] || {}));
        setVisible(false);
        setKeyAreas([]);
    };

    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        setUpazillas(locationData[selectedDivision][district] || []);
        setVisible(false);
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
            setKeyAreas([""]);
            setVisible(false);
            const address = { selectedDivision, selectedDistrict, selectedUpazilla: upazilla,  keyArea: "" };
            getAddress(address);
        }
        setSelectedUpazilla(upazilla);
    };

    const handleSubmit = (e) => {
        const keyArea = e.target.value;
        setSelectedKeyArea(keyArea)
        const address = { selectedDivision, selectedDistrict, selectedUpazilla, keyArea }
        getAddress(address);
    }

    return (
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap w-full gap-4 items-center">
            <ThemeProvider theme={customTheme2}>
                {/* Division Selector */}
                <FormControl variant="outlined" sx={{
                    width: {
                        xs: 250,
                        md: 150,
                    },
                    fontWeight: 500,
                }}>
                    <InputLabel>Division</InputLabel>
                    <Select
                        name="division"
                        value={selectedDivision}
                        onChange={handleDivisionChange}
                        label="Division"
                        variant="outlined"
                    >
                        {Object.keys(locationData).map((division) => (
                            <MenuItem key={division} value={division}>{division}</MenuItem>
                        ))}

                    </Select>
                </FormControl>

                {/* District Selector */}
                <FormControl variant="outlined" sx={{
                    width: {
                        xs: 280,
                        md: 150,
                    },
                    fontWeight: 500
                }}>
                    <InputLabel>District</InputLabel>
                    <Select
                        name="district"
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                        label="District"
                        variant="outlined"
                        disabled={!selectedDivision}
                    >
                        {districts.map((district) => (
                            <MenuItem key={district} value={district}>{district}</MenuItem>
                        ))}

                    </Select>
                </FormControl>
                {/* Upazilla Selector */}
                {upazillas &&
                    <FormControl variant="outlined" sx={{
                        width: {
                            xs: 280,
                            md: 160,
                        },
                        fontWeight: 500
                    }}>
                        <InputLabel>Upazilla</InputLabel>
                        <Select
                            name="upazilla"
                            value={selectedUpazilla}
                            onChange={handleUpazillaChange}
                            label="Upazilla"
                            variant="outlined"
                            disabled={!selectedDistrict || upazillas.length === 0}
                        >
                            {upazillas.map((upazilla) => (
                                <MenuItem key={upazilla} value={upazilla}>{upazilla}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                }
                {/* Key Areas Selector (If there are any city corporations) */}
                {keyAreas && (
                    <>
                        <FormControl variant="outlined" sx={{
                            width: {
                                xs: 280,
                                md: 130,
                            },
                            fontWeight: 500,
                            display: visible ? "flex" : "none"
                        }}
                        >
                            <InputLabel>Area</InputLabel>
                            <Select
                                name="keyArea"
                                onChange={handleSubmit}
                                label="KeyArea"
                                variant="outlined"
                                value={selectedKeyArea}
                            // disabled={!selectedDistrict || upazillas.length === 0}
                            >
                                {keyAreas.map((keyArea) => (
                                    <MenuItem key={keyArea} value={keyArea} >{keyArea}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </>
                )}
            </ThemeProvider>
        </div>
    );
};

export default Address;