import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../pages/home page/HomePage";
import SignIn from "../pages/sign in page/SignIn";
import AboutPage from "../pages/about/AboutPage";
import Contactpage from "../pages/contact/Contactpage";
import Background from "../pages/background/Background";

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
        path: '/signin',
        element: <Background></Background>,
        children: [
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            
        ]
    }
]);

export default router;
