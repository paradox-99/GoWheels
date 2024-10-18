import Background from "../pages/background/Background";
import SignIn from "../pages/sign in page/SignIn";
import SignUpPartFive from "../pages/signup/SignUpPartFive";
import SignUpPartFour from "../pages/signup/SignUpPartFour";
import SignUpPartOne from "../pages/signup/SignUpPartOne";
import SignUpPartThree from "../pages/signup/SignUpPartThree";
import SignupPartTwo from "../pages/signup/SignupPartTwo";
import GoogleLogin from "../pages/sign in page/GoogleLogin";
import OtpRoute from "../pages/signup/OtpRoute";


export const SignUpRoutes = [
    {
        path: "/join",
        element: <Background />,
        children: [
            {
                path: '/join',
                element: <SignIn></SignIn>
            },
            {
                path: "/join/signUpOne",
                element: <SignUpPartOne></SignUpPartOne>
            },
            {
                path: '/join/signUpTwo',
                element: <SignupPartTwo></SignupPartTwo>
            },
            {
                path: '/join/signUpThree',
                element: <SignUpPartThree></SignUpPartThree>
            },
            {
                path: '/join/otpRoute',
                element: <OtpRoute></OtpRoute>
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
                path: "/join/login-Info",
                element: <GoogleLogin></GoogleLogin>
            },

        ]
    }
];