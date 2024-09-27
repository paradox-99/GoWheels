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
import AgencyRegister from "../pages/Agency/AgencyRegister";
import AgencyInfo from "../pages/Agency/AgencyInfo";
import CarInfo from "../pages/Agency/CarInfo";

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
                    },
                ]
            },
            {
                path: '/join',
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
                    },
                    {
                        path:'/join/agencyRegister',
                        element:<AgencyRegister></AgencyRegister>
                    },
                    {
                        path:'/join/agencyInfo',
                        element:<AgencyInfo></AgencyInfo>
                    },
                    {
                        path: '/join/addCarInfo',
                        element:<CarInfo></CarInfo>
                    }
                ]
            },
        ]
    },
]);

export default router;
