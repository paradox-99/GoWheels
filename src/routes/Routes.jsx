import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../pages/home page/HomePage";
import SignIn from "../pages/sign in page/SignIn";
import AboutPage from "../pages/about/AboutPage";
import Contactpage from "../pages/contact/Contactpage";
import Background from "../pages/background/Background";
import SignUpPartFour from "../pages/sign in page/SignUpPartFour";

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
                path: "about",
                element: <AboutPage></AboutPage>
            },
            {
                path: "contact",
                element: <Contactpage></Contactpage>
            },
            {
                path: "join",
                element: <SignIn></SignIn>
            }
        ]
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
                path: '/join/signUpFour',
                element: <SignUpPartFour></SignUpPartFour>
            }
        ]
    }
]);

export default router;
