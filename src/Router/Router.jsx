import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Tickets from "../Pages/Tickets/Tickets";
import About from "../Pages/About/About";
import Carddetails from "../Pages/Carddetails/Carddetails";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Privateroute from "../Privateroute/Privateroute";


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
                element :<Privateroute><Carddetails></Carddetails></Privateroute>    ,
                loader : ()=> fetch('/maincard.json')
            },
            {
                path : '/login',
                element: <Login></Login>
            },
            {
                path : '/registration',
                element : <Registration></Registration>
            }
           

        ]
    }
]);

export default router;