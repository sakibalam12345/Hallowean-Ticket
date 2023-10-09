import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";


const router = createBrowserRouter([

    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('/maincard.json')
            }
        ]
    }
]);

export default router;