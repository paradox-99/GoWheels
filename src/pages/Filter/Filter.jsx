import { Autocomplete, FormControl, IconButton, InputLabel, Select, TextField, ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { customTheme2 } from "../../components/theme/Theme";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import { carBrands, district, upazillas } from "../../../public/locationData";
import useAxiosPublic from "../../hooks/useAxiosPublic"
import FeaturedCarts from "../../components/cart/FeaturedCarts";

const Filter = () => {

  const [searchValue, setSearchValue] = useState(null);
  const [value, setValue] = useState([""])
  const [search, setSearch] = useState(null)
  const axiosPublic = useAxiosPublic();
  const [result, getResult] = useState();

  const searchBy = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value === "District") {
      setValue(district);
      setSearch(null);
    }
    else if (value === "Brand") {
      setValue(carBrands);
      setSearch(null);
    }
    else if (value === "Upazilla") {
      setValue(upazillas);
      setSearch(null);
    }
  }

  const checkValue = () => {
    if (searchValue === null) {
      toast.error("Select a search criteria.")
    }
  }

  const getSearchResult = async () => {
    if (search !== null) {
      if (searchValue === "Brand") {
        const result = await axiosPublic.get(`/carsRoute/brand/${search}`);
        getResult(result.data);
      }
      else if (searchValue === "District") {
        const filterData = {
          district: search,
          upazilla: "",
        }
        const result = await axiosPublic.get(`/carsRoute/getCarByLocation`, {params: filterData});
        getResult(result.data);
      }
      else if (searchValue === "Upazilla") {
        const filterData = {
          district: "",
          upazilla: search,
        }
        const result = await axiosPublic.get(`/carsRoute/getCarByLocation`, {params: filterData});
        getResult(result.data);
      }
    }
    else {
      toast.error(`Please enter ${searchValue}`)
    }
  }

  console.log(result);
  

  return (
    <div className="my-20 w-full px-4">
      <Helmet>
        <title>Search</title>
      </Helmet>
      <div>
        <div className="bg-secondary w-10 h-1 mb-4"></div>
        <h1 className="text-4xl font-merriweather font-bold">Search</h1>
        <div className="flex items-center justify-center gap-5">
          <div className="w-1/2 flex justify-end">
            <ThemeProvider theme={customTheme2}>
              <FormControl sx={{ m: 1, width: 250 }}>
                <InputLabel htmlFor="grouped-native-select">Search by</InputLabel>
                <Select native defaultValue="" id="grouped-native-select" label="Grouping" onChange={searchBy}>
                  <option aria-label="None" value="" />
                  <optgroup label="Location">
                    <option value={"District"}>District </option>
                    <option value={"Upazilla"}>Upazilla/City</option>
                  </optgroup>
                  <option value={"Brand"}>Brand</option>
                </Select>
              </FormControl>
            </ThemeProvider>
          </div>
          <div className="w-1/2 flex items-center justify-start">
            <ThemeProvider theme={customTheme2}>
              <Autocomplete
                disablePortal
                options={value}
                onChange={(event, newValue) => {
                  setSearch(newValue?.label);
                }}
                value={search}
                sx={{ width: 250, marginRight: 1 }}
                renderInput={(params) => <TextField {...params} onClick={checkValue} label={`${searchValue ? "Enter " + searchValue : "Search"}`} />}
              />
              <IconButton disabled={searchValue ? false : true} onClick={getSearchResult}><FiSearch /></IconButton>
            </ThemeProvider>
          </div>
        </div>
      </div>
      {
        result &&
        <div className="mt-5">
          <h1 className="text-5xl font-merriweather font-bold mb-5">{search} Cars</h1>
          {
            result.length === 0 ? <div className="w-full h-[30vh] text-2xl font-nunito flex items-center justify-center">Sorry. No car found in {search}</div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 justify-items-center">
              {
                result?.map((car) => (<FeaturedCarts
                  key={car._id}
                  car={car}
                ></FeaturedCarts>))
              }
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Filter;
