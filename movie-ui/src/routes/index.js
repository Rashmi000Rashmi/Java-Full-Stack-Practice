import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home"; // Corrected import statement
import ExplorePage from "../pages/ExplorePage";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/> // Provided the element for the child route
            },
            {
                path: ":explore",
                element: <ExplorePage/>
            },
            {
                path : ":explore/:id",
                element: <DetailsPage/>
            },
            {
                path: "search",
                element: <SearchPage></>
            }
        ]
    }
]);

export default router;
