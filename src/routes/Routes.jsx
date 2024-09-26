import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../pages/home page/HomePage";
import SignIn from "../pages/sign in page/SignIn";
import AboutPage from "../pages/about/AboutPage";
import Contactpage from "../pages/contact/Contactpage";
import Background from "../pages/background/Background";
import SignUpPartFour from "../pages/signup/SignUpPartFour";
import SignUpPartFive from "../pages/signup/SignUpPartFive";
import SignupPartTwo from "../pages/signup/SignupPartTwo";
import SignUpPartOne from "../pages/signup/SignUpPartOne";
import SignUpPartThree from "../pages/signup/SignUpPartThree";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Dashboard from "../Dashboard/Dashboard";
import UserHome from "../Dashboard/User/UserHome";
import Bookings from "../Dashboard/User/Bookings";
import UserRatings from "../Dashboard/User/UserRatings";
import AgencyHome from "../Dashboard/Agency/AgencyHome";
import AdminHome from "../Dashboard/Admin/AdminHome";
import OwnerInfo from "../Dashboard/Agency/OwnerInfo";
import AddVehicleInfo from "../Dashboard/Agency/AddVehicleInfo";
import ReviewFromCustomer from "../Dashboard/Agency/ReviewFromCustomer";
import AgencyStaffManagement from "../Dashboard/Agency/AgencyStaffManagement";
import BookingHistory from "../Dashboard/Agency/BookingHistory";
import VehicleInfo from "../Dashboard/Agency/VehicleInfo";
import BookingRequest from "../Dashboard/Agency/BookingRequest";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            },
            {
                path: "/contact",
                element: <Contactpage></Contactpage>
            },
            {
                path: "/view-details",
                element: <ViewDetails></ViewDetails>
            },
            {
                path: '/join',
                element: <Background></Background>,
                children: [
                    {
                        path: '/join',
                        element: <SignIn></SignIn>
                    },
                    {
                        path: "/join/signUpPartOne",
                        element: <SignUpPartOne></SignUpPartOne>
                    },
                    {
                        path: '/join/signUpPartTwo',
                        element: <SignupPartTwo></SignupPartTwo>
                    },
                    {
                        path: '/join/signUpPartThree',
                        element: <SignUpPartThree></SignUpPartThree>
                    },
                    {
                        path: '/join/signUpFour',
                        element: <SignUpPartFour></SignUpPartFour>
                    },                    
                    {
                        path: '/join/signUpFive',
                        element: <SignUpPartFive></SignUpPartFive>,
                    }
                ]
            },
            
            
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "user-home",
                element: <UserHome></UserHome>
            },
            {
                path: "user-bookings",
                element: <Bookings></Bookings>
            },
            {
                path: "user-ratings",
                element: <UserRatings></UserRatings>
            },
            // AGENCY ---------------
            {
                path: "agency-home",
                element: <AgencyHome></AgencyHome>
            },
            {
                path: "/dashboard/agency/owner-info/update",
                element: <OwnerInfo></OwnerInfo>
            },
            {
                path: "/dashboard/agency/add-vehicle-info",
                element: <AddVehicleInfo></AddVehicleInfo>
            },
            {
                path: "/dashboard/agency/vehicle-info",
                element: <VehicleInfo></VehicleInfo>
            },
            {
                path: "/dashboard/agency/booking-history",
                element: <BookingHistory></BookingHistory>
            },
            {
                path: "/dashboard/agency/booking-request",
                element: <BookingRequest></BookingRequest>
            },
            {
                path: "/dashboard/agency/active-booking",
                element: <BookingRequest></BookingRequest>
            },
            {
                path: "/dashboard/agency/review-from-customers",
                element: <ReviewFromCustomer></ReviewFromCustomer>
            },
            
            // ----------------

            // ADMIN
            {
                path: "admin-home",
                element: <AdminHome></AdminHome>
            },
        ]
    }
]);

export default router;
