import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <div>Home</div>
            }
        ]
    },
]);

export default router;
