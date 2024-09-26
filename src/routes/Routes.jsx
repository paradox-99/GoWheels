import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../pages/home page/HomePage";
import SignIn from "../pages/sign in page/SignIn";
import AboutPage from "../pages/about/AboutPage";
import Contactpage from "../pages/contact/Contactpage";
import Background from "../pages/background/Background";
import SignUp from "../pages/signup/SignUp";
import SignUpPartFour from "../pages/signup/SignUpPartFour";
import SignUpPartFive from "../pages/signup/SignUpPartFive";
import SignupPartTwo from "../pages/signup/SignupPartTwo";
import SignUpLastPage from "../pages/signup/SignUpLastPage";
import Filter from "../pages/Filter/Filter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/contact",
        element: <Contactpage></Contactpage>,
      },
      {
        path: "/filter",
        element: <Filter></Filter>,
      },
      {
        path: "/join",
        element: <Background></Background>,
        children: [
          {
            path: "/join",
            element: <SignIn></SignIn>,
          },
          {
            path: "/join/register-new",
            element: <SignUp></SignUp>,
          },
          {
            path: "/join/signUpTwo",
            element: <SignupPartTwo></SignupPartTwo>,
          },
          {
            path: "/join/signUpFour",
            element: <SignUpPartFour></SignUpPartFour>,
          },
          {
            path: "/join/signUpLastPage",
            element: <SignUpLastPage></SignUpLastPage>,
          },
          {
            path: "/join/signUpFive",
            element: <SignUpPartFive></SignUpPartFive>,
          },
        ],
      },
    ],
  },
]);

export default router;
