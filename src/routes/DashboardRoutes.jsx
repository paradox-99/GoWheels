import { element } from "prop-types";
import AgencyApprove from "../components/AgencyApprove/AgencyApprove";
import AgencyDeatils from "../components/AgencyApprove/AgencyDeatils";
import AdminHome from "../Dashboard/Admin/AdminHome";
import ManageAgencies from "../Dashboard/Admin/ManageAgencies";
import ManageAgencyDetails from "../Dashboard/Admin/ManageAgencyDetails";
import ManageModaretors from "../Dashboard/Admin/ManageModaretors";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ActiveBooking from "../Dashboard/Agency/ActiveBooking";
import AddVehicleInfo from "../Dashboard/Agency/AddVehicleInfo";
import AgencyHome from "../Dashboard/Agency/AgencyHome";
import AgencyStaffManagement from "../Dashboard/Agency/AgencyStaffManagement";
// import BookingHistory from "../Dashboard/Agency/BookingHistory";
import BookingRequest from "../Dashboard/Agency/BookingRequest";
import CustomerManagement from "../Dashboard/Agency/CustomerManagement";
import OwnerInfo from "../Dashboard/Agency/OwnerInfo";
import ReviewFromCustomer from "../Dashboard/Agency/ReviewFromCustomer";
import VehicleInfo from "../Dashboard/Agency/VehicleInfo";
import Dashboard from "../Dashboard/Dashboard";
import ModeratorProfile from "../Dashboard/Moderator/ModeratorProfile";
import Bookings from "../Dashboard/User/Bookings";
import FavouriteCars from "../Dashboard/User/FavouriteCars";
import UserHome from "../Dashboard/User/UserHome";
import UserProfile from "../Dashboard/User/UserProfile";
import UserRatings from "../Dashboard/User/UserRatings";
import DriverProfile from "../Dashboard/Driver/DriverProfile";
import DriverBooking from "../Dashboard/Driver/DriverBooking";
import BookingHistoryForAgency from "../Dashboard/Agency/BookingHistoryForAgency";


export const DashboardRoutes = [
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
                element: <BookingHistoryForAgency></BookingHistoryForAgency>
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
            {
                path: "manage-agencies/agencyDetails/:id",
                element: <ManageAgencyDetails />,
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


            // Driver 
            {
                path: "driver-profile",
                element: <DriverProfile />
            },
            {
                path: "driver-booking",
                element: <DriverBooking />
            }
        ],
    },
]
