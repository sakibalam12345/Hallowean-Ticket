import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";




const Root = () => {
    return (
        <div className="font-roboto">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;