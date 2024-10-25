import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../pages/home page/HomePage";
import AboutPage from "../pages/about/AboutPage";
import Contactpage from "../pages/contact/Contactpage";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
// Assuming you have this component
import Filter from "../pages/Filter/Filter";
import AgencyRegister from "../pages/Agency/AgencyRegister";
import AgencyInfo from "../pages/Agency/AgencyInfo";
import CarInfo from "../pages/Agency/CarInfo";
import { SignUpRoutes } from "./SignUpRoutes";
import ShowBrandCars from "../pages/Filter/ShowBrandCars";
import BookingInfo from "../pages/bookingInfo/BookingInfo";
import { DashboardRoutes } from "./DashboardRoutes";
import PaymentFail from "../pages/paymentPage/PaymentFail";
import PaymentSuccess from "../pages/paymentPage/PaymentSuccess";
import DriverSignUp from "../pages/DriverPages/DriverSignUp";
import DriverInfo from "../pages/DriverPages/DriverInfo";
import DriverOTP from "../pages/DriverPages/DriverOTP";
import AgencyOTP from "../pages/Agency/AgencyOTP";
import DriverList from "../components/driverList/DriverList";
import SearchResult from "../pages/search/SearchResult";
import Messaging from "../pages/messaging/Messaging";
import AllAgency from "../pages/Agency/AllAgency";
import ViewAgencyDetails from "../pages/ViewDetails/ViewAgencyDetails";
import Message from "../pages/messaging/Message";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/contact",
                element: <Contactpage />,
            },
            {
                path: "/filter",
                element: <Filter />,
            },
            {
                path: "/search",
                element: <SearchResult></SearchResult>
            },
            {
                path: "/view-details/:id",
                element: <ViewDetails />,
            },
            {
                path: "/bookingInfo",
                element: <BookingInfo />
            },
            {
                path: "/send-message",
                element: <Messaging/>
            },
            {
                path: "/send-message/:url",
                element: <Message></Message>
            },
            {
                path: "/view-all-agencies",
                element: <AllAgency/>

            },
            {
                path: "/agencyDetails/:id",
                element: <ViewAgencyDetails/>
            },
            ...SignUpRoutes,
            {
                path: '/join/agencyRegister',
                element: <AgencyRegister></AgencyRegister>
            },
            {
                path: '/join/agencyInfo',
                element: <AgencyInfo></AgencyInfo>
            },
            {
                path: '/join/addCarInfo',
                element: <CarInfo></CarInfo>
            },
            {
                path: '/brand/:brand_name',
                element: <ShowBrandCars />
            },
            {
                path: "/payment/success/:tranId",
                element: <PaymentSuccess />
            },
            {
                path: "/payment/fail/:tranId",
                element: <PaymentFail />
            },
            {
                path:'/join/driverSignUp',
                element:<DriverSignUp></DriverSignUp>
            },
            {
                path:'/join/driverInfo',
                element:<DriverInfo></DriverInfo>

            },
            {
                path:'/join/driverOtp',
                element:<DriverOTP></DriverOTP>
            },
            {
                path:'/join/agencyOtp',
                element:<AgencyOTP></AgencyOTP>
            },
            {
                path:'/driverList',
                element:<DriverList></DriverList>
            }
        ]
    },
    ...DashboardRoutes,
],
)

export default router;