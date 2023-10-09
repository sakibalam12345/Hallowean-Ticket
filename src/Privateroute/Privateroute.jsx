import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {

    const location = useLocation()

    const {user,loading} = useContext(Authcontext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
        
    ;
};

export default Privateroute;