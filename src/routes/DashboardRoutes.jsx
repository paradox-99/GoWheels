import AgencyApprove from "../components/AgencyApprove/AgencyApprove";
import AgencyDeatils from "../components/AgencyApprove/AgencyDeatils";
import AdminHome from "../Dashboard/Admin/AdminHome";
import ManageAgencies from "../Dashboard/Admin/ManageAgencies";
import ManageModaretors from "../Dashboard/Admin/ManageModaretors";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ActiveBooking from "../Dashboard/Agency/ActiveBooking";
import AddVehicleInfo from "../Dashboard/Agency/AddVehicleInfo";
import AgencyHome from "../Dashboard/Agency/AgencyHome";
import AgencyStaffManagement from "../Dashboard/Agency/AgencyStaffManagement";
import BookingHistoryForAgency from "../Dashboard/Agency/BookingHistoryForAgency";
// import BookingRequest from "../Dashboard/Agency/BookingRequest";
import CustomerManagement from "../Dashboard/Agency/CustomerManagement";
import ReviewFromCustomer from "../Dashboard/Agency/ReviewFromCustomer";
import VehicleInfo from "../Dashboard/Agency/VehicleInfo";
import Dashboard from "../Dashboard/Dashboard";
import BookingHistory from "../Dashboard/User/BookingHistory";
import Bookings from "../Dashboard/User/Bookings";
import FavouriteCars from "../Dashboard/User/FavouriteCars";
import UserHome from "../Dashboard/User/UserHome";
import UserRatings from "../Dashboard/User/UserRatings";
import DriverProfile from "../Dashboard/Driver/DriverProfile";
import DriverBooking from "../Dashboard/Driver/DriverBooking";
import Notifications from "../Dashboard/User/Notifications";
import OwnerInfo from "../Dashboard/Agency/OwnerInfo";
import AgencyVehicleDetails from "../components/AgencyVehicleDetails/AgencyVehicleDetails";
import Ag from "../Dashboard/Agency/Ag";




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
                path: "profile",
                element: <OwnerInfo></OwnerInfo>
            },
            {
                path: "user-bookings",
                element: <Bookings></Bookings>
            },
            {
                path: "user-booking-history",
                element: <BookingHistory></BookingHistory>,
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
                path: "notifications",
                element:<Notifications></Notifications>
            },
            // AGENCY ---------------
            {
                path: "agency-home",
                element: <AgencyHome></AgencyHome>
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
                path: "/dashboard/agency/vehicle-details/:id",
                element: <AgencyVehicleDetails></AgencyVehicleDetails>
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
                path: "/dashboard/agency/stuff-managment",
                element: <AgencyStaffManagement></AgencyStaffManagement>,
            },
            {
                path: "/dashboard/agency/customer-management",
                element: <CustomerManagement></CustomerManagement>
            },
            {
                path: "/dashboard/ag",
                element: <Ag></Ag>,
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
            {
                path: "approve-agency",
                element: <AgencyApprove />,
            },
            {
                path: "approve-agency/agencyDetails/:id",
                element: <AgencyDeatils />,
            },

            // driver
            {
                path: 'driver-profile',
                element: <DriverProfile></DriverProfile>
            },
            {
                path: 'driver-booking',
                element: <DriverBooking></DriverBooking>
            },
            
        ],
    },
]
