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
import OwnerInfo from "../Dashboard/Agency/OwnerInfo";
import AddVehicleInfo from "../Dashboard/Agency/AddVehicleInfo";
import BookingManagement from "../Dashboard/Agency/BookingManagement";
import ReviewFromCustomer from "../Dashboard/Agency/ReviewFromCustomer";
import AgencyStaffManagement from "../Dashboard/Agency/AgencyStaffManagement";
import Filter from "../pages/Filter/Filter";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ManageModaretors from "../Dashboard/Admin/ManageModaretors";
import ManageAgencies from "../Dashboard/Admin/ManageAgencies";

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
        path: "/view-details",
        element: <ViewDetails />,
      },
      {
        path: "/join",
        element: <Background />,
        children: [
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
      }
    ],
  },
]);

export default router;
