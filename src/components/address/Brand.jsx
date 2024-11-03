import { FormControl, InputLabel, MenuItem, Select, ThemeProvider } from "@mui/material";
import useVehicleData from "../../hooks/useVehicleData";
import { customTheme2 } from "../theme/Theme";
import { useState } from "react";


const Brand = ({ getBrand }) => {

    const { cars } = useVehicleData();
    const brands = [...new Set(cars.map((car) => car.brand))];
    const [selectedBrand, setSelectedBrand] = useState("");

    const handleBrandChange = (e) => {
        const brandName = e.target.value;
        setSelectedBrand(brandName)
        getBrand(brandName)
    }


    return (
        <div>
            <ThemeProvider theme={customTheme2}>
                <FormControl variant="outlined" sx={{
                    width: {
                        xs: 280,
                        md: 150,
                    },
                    fontWeight: 500,
                }}>
                    <InputLabel>Brand</InputLabel>
                    <Select
                        name="brand"
                        value={selectedBrand}
                        onChange={handleBrandChange}
                        label="Brand"
                        variant="outlined"
                    >
                        {brands.map((brand) => (
                            <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </ThemeProvider>
        </div>
    );
};

export default Brand;