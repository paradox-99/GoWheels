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
import PaymentPage from "../pages/paymentPage/PaymentPage";
import Dashboard from "../Dashboard/Dashboard";
import UserHome from "../Dashboard/User/UserHome";
import Bookings from "../Dashboard/User/Bookings";
import BookingHistory from "../Dashboard/User/BookingHistory";
import UserRatings from "../Dashboard/User/UserRatings";
import FavouriteCars from "../Dashboard/User/FavouriteCars";
import UserProfile from "../Dashboard/User/UserProfile";
import AgencyHome from "../Dashboard/Agency/AgencyHome";
import OwnerInfo from "../Dashboard/Agency/OwnerInfo";
import AddVehicleInfo from "../Dashboard/Agency/AddVehicleInfo";
import VehicleInfo from "../Dashboard/Agency/VehicleInfo";
import BookingRequest from "../Dashboard/Agency/BookingRequest";
import ActiveBooking from "../Dashboard/Agency/ActiveBooking";
import ReviewFromCustomer from "../Dashboard/Agency/ReviewFromCustomer";
import AgencyStaffManagement from "../Dashboard/Agency/AgencyStaffManagement";
import CustomerManagement from "../Dashboard/Agency/CustomerManagement";
import AdminHome from "../Dashboard/Admin/AdminHome";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ManageModaretors from "../Dashboard/Admin/ManageModaretors";
import ManageAgencies from "../Dashboard/Admin/ManageAgencies";
import ModeratorProfile from "../Dashboard/Moderator/ModeratorProfile";
import AgencyApprove from "../components/AgencyApprove/AgencyApprove";
import AgencyDeatils from "../components/AgencyApprove/AgencyDeatils";

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
                path: "/view-details/:id",
                element: <ViewDetails />,
            },
            {
                path: "/bookingInfo",
                element: <BookingInfo></BookingInfo>
            },
            {
                path: '/payment-page',
                element: <PaymentPage></PaymentPage>
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
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [

            // user routes
            {
                path: "user-home",
                element: <UserHome></UserHome>
            },
            {
                path: "user-bookings",
                element: <Bookings></Bookings>
            },
            {
                path: "user-booking-history",
                element: <BookingHistory></BookingHistory>
            },
            {
                path: "user-ratings",
                element: <UserRatings></UserRatings>
            },
            {
                path: "user-favourite",
                element: <FavouriteCars></FavouriteCars>
            },
            {
                path: "user-profile",
                element: <UserProfile></UserProfile>
            },
<<<<<<< HEAD
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
                element: <ActiveBooking></ActiveBooking>
            },
            {
                path: "/dashboard/agency/review-from-customers",
                element: <ReviewFromCustomer></ReviewFromCustomer>
            },
            // ----------------
=======
>>>>>>> 82bcd6f1c1a180117a437255301a8d47b7e7dfa5

      // AGENCY ---------------
      {
        path: "agency-home",
        element: <AgencyHome></AgencyHome>
      },
      {
        path: "/dashboard/agency/owner",
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
        element: <ActiveBooking></ActiveBooking>
      },
      {
        path: "/dashboard/agency/review-from-customers",
        element: <ReviewFromCustomer></ReviewFromCustomer>
      },
      {
        path: "/dashboard/agency/stuff-managment",
        element: <AgencyStaffManagement></AgencyStaffManagement>,
      },
      {
        path: "/dashboard/agency/customer-management",
        element: <CustomerManagement></CustomerManagement>
      },
            // admin routes
            {
                path: "admin-home",
                element: <AdminHome />,
            },
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>,
            },
            {
                path: 'manage-moderators',
                element: <ManageModaretors></ManageModaretors>,
            },
            {
                path: 'manage-agencies',
                element: <ManageAgencies></ManageAgencies>
            },

            // MODERATOR
            // Moderator
            {
                path: "moderator-profile",
                element: <ModeratorProfile />,
            },
            // Approve Agency
            {
                path: "approve-agency",
                element: <AgencyApprove />,
            },
            {
                path: "approve-agency/agencyDetails/:id",
                element: <AgencyDeatils />,
            },
        ],
    },
],
)

export default router;