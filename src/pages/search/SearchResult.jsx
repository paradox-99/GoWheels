import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Address from "../../components/address/Address";
import TimePicker from "../../components/address/TimePicker";
import { IconButton, Skeleton, Stack } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import FeaturedCarts from "../../components/cart/FeaturedCarts";

const SearchResult = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const axiosPublic = useAxiosPublic();

    const [division, setDivision] = useState(params.get("division"));
    const [district, setDistrict] = useState(params.get("district"));
    const [upazilla, setUpazilla] = useState(params.get("upazilla"));
    const [keyArea, setKeyArea] = useState(params.get("keyArea"));
    const [fromDate, setFromDate] = useState(params.get("fromDate"));
    const [fromTime, setFromTime] = useState(params.get("fromTime"));
    const [untilDate, setUntilDate] = useState(params.get("untilDate"));
    const [untilTime, setUntilTime] = useState(params.get("untilTime"));
    const [address, setAddress] = useState();
    const [time, setTime] = useState();
    const navigate = useNavigate();
    const [carBookingInfo, setCarBookingInfo] = useState(null);

    const locationValues = { division, district, upazilla, keyArea };
    const timeValues = { fromDate, fromTime, untilDate, untilTime };

    const { data: cars, isPending } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const filterData = {
                fromDate,
                fromTime,
                untilDate,
                untilTime,
                division,
                district,
                upazilla,
                keyArea
            };
            const response = await axiosPublic.get('/carsRoute/getSearchData', { params: filterData });
            const bookingInfo = {
                initailDate: fromDate,
                initalTime: fromTime,
                toDate: untilDate,
                toTime: untilTime,
                division,
                district,
                upazilla,
                area: keyArea,
            }
            setCarBookingInfo(bookingInfo)
            return response.data;
        },
    })

    const getAddress = (address) => {
        setAddress(address);
    }
    const getTime = (timeAndDate) => {
        setTime(timeAndDate)
    }

    const searchPage = () => {
        console.log(time);

        const division = address.selectedDivision;
        const district = address.selectedDistrict;
        const upazilla = address.selectedUpazilla;
        const keyArea = address.keyArea;
        const fromDate = time.fromDate;
        const fromTime = time.fromTime;
        const untilDate = time.untilDate;
        const untilTime = time.untilTime;

        const location = new URLSearchParams({ division: division, district: district, upazilla: upazilla, keyArea: keyArea });
        const date = new URLSearchParams({ fromDate: fromDate, fromTime: fromTime, untilDate: untilDate, untilTime: untilTime });
        navigate(`/search/queries?${location}&${date}`)
    }

    return (
        <div className="mt-14 w-full">
            <div className="mb-10 w-full flex gap-5 flex-col min-[1220px]:flex-row justify-center items-center">
                <div className="">
                    <p className="font-nunito lg:mb-4 font-semibold text-lg text-center md:text-left">Location</p>
                    <div className="flex gap-4 lg:items-center w-full">
                        <Address getAddress={getAddress} location={locationValues}></Address>
                    </div>
                </div>
                <div>
                    <h3 className="font-nunito lg:mb-2 font-semibold text-lg text-center md:text-left">Booking Date</h3>
                    <TimePicker getTime={getTime} time={timeValues}></TimePicker>
                </div>
                <div className=" min-[1222px]:mt-10">
                    <IconButton onClick={searchPage}>
                        <FaSearch className="w-5 md:w-7" />
                    </IconButton>
                </div>
            </div>
            <h1 className="text-5xl font-bold font-nunito text-center mt-10 md:mt-16 lg:mt-20">Search Results</h1>
            <div className="w-full flex gap-5 justify-center items-center flex-wrap my-8 md:my-12">
                {
                    isPending ? Array.from({ length: 3 }).map((_, index) => (
                        <Stack spacing={2} key={index}>
                            {/* For variant="text", adjust the height via font-size */}
                            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                            {/* For other variants, adjust the size with `width` and `height` */}
                            <Skeleton variant="circular" width={60} height={60} />
                            <Skeleton variant="rectangular" width={300} height={80} />
                            <Skeleton variant="rounded" width={300} height={80} />
                        </Stack>
                    )) :
                        cars?.map(car => <FeaturedCarts
                            key={car._id}
                            car={car}
                            carBookingInfo={carBookingInfo}
                        ></FeaturedCarts>)
                }
            </div>
        </div>
    );
};

export default SearchResult;