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
// Assuming you have this component
import Dashboard from "../Dashboard/Dashboard";
import UserHome from "../Dashboard/User/UserHome";
import Bookings from "../Dashboard/User/Bookings";
import UserRatings from "../Dashboard/User/UserRatings";
import AgencyHome from "../Dashboard/Agency/AgencyHome";
import AdminHome from "../Dashboard/Admin/AdminHome";
import UserProfile from "../Dashboard/User/UserProfile";
import BookingHistory from "../Dashboard/User/BookingHistory";
import FavouriteCars from "../Dashboard/User/FavouriteCars";
import OwnerInfo from "../Dashboard/Agency/OwnerInfo";
import AddVehicleInfo from "../Dashboard/Agency/AddVehicleInfo";
import ReviewFromCustomer from "../Dashboard/Agency/ReviewFromCustomer";
import VehicleInfo from "../Dashboard/Agency/VehicleInfo";
import BookingRequest from "../Dashboard/Agency/BookingRequest";
import ActiveBooking from "../Dashboard/Agency/ActiveBooking";
import Filter from "../pages/Filter/Filter";
import ModeratorProfile from "../Dashboard/Moderator/ModeratorProfile";
import AgencyApprove from "../components/AgencyApprove/AgencyApprove";
import AgencyDeatils from "../components/AgencyApprove/AgencyDeatils";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
<<<<<<< HEAD
          {
            path: "/join",
            element: <SignIn />,
          },
          {
            path: "/join/signUpPartOne",
            element: <SignUpPartOne />,
          },
          {
            path: "/join/signUpPartTwo",
            element: <SignupPartTwo />,
          },
          {
            path: "/join/signUpPartThree",
            element: <SignUpPartThree />,
          },
          {
            path: "/join/signUpFour",
            element: <SignUpPartFour />,
          },
          {
            path: "/join/signUpFive",
            element: <SignUpPartFive />,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "user-bookings",
        element: <Bookings />,
      },
      {
        path: "user-ratings",
        element: <UserRatings />,
      },
      // AGENCY ---------------
      {
        path: "agency-home",
        element: <AgencyHome />,
      },
      {
        path: "agency/owner-info/update",
        element: <OwnerInfo />,
      },
      {
        path: "agency/add-vehicle-info",
        element: <AddVehicleInfo />,
      },
      {
        path: "agency/booking-management",
        element: <BookingManagement />,
      },
      {
        path: "agency/review-from-customers",
        element: <ReviewFromCustomer />,
      },
      {
        path: "agency/staff-management",
        element: <AgencyStaffManagement />,
      },
      // ADMIN
      {
        path: "admin-home",
        element: <AdminHome />,
      },

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
=======
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
                path: "user-booking-history",
                element: <BookingHistory></BookingHistory>
            },
            {
                path: "user-ratings",
                element: <UserRatings></UserRatings>
            },
            // AGENCY ---------------
            {
                path: "user-favourite",
                element: <FavouriteCars></FavouriteCars>
            },
            {
                path: "user-profile",
                element: <UserProfile></UserProfile>
            },
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

            // ADMIN
            {
                path: "admin-home",
                element: <AdminHome></AdminHome>
            },
        ]
    }
>>>>>>> 2066154c123826fe08e189416c14ac27b0aeceae
]);

export default router;
