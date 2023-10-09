import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Tickets from "../Pages/Tickets/Tickets";
import About from "../Pages/About/About";


const router = createBrowserRouter([

    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('/maincard.json')
            },
            {
                path : '/tickets',
                element : <Tickets></Tickets>
            },
            {
                path: '/about',
                element : <About></About>
            }
           

        ]
    }
]);

export default router;