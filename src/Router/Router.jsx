import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Tickets from "../Pages/Tickets/Tickets";
import About from "../Pages/About/About";
import Carddetails from "../Pages/Carddetails/Carddetails";
import Login from "../Pages/Login/Login";


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
            },
            {
                path : '/carddetails/:id',
                element : <Carddetails></Carddetails>,
                loader : ()=> fetch('/maincard.json')
            },
            {
                path : '/login',
                element: <Login></Login>
            }
           

        ]
    }
]);

export default router;