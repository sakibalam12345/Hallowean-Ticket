import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";


const Root = () => {
    return (
        <div className="font-roboto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;