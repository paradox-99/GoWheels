import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../pages/home page/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            }
        ]
    },
]);

export default router;
