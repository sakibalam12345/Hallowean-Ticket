import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../Provider/Authprovider";

const Navbar = () => {

const {user,logout} = useContext(Authcontext);
    

    const handlelogout = ()=>{
        
        logout()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }



    const navlinks = <>
     <li>
     <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive && 'underline  text-white' 
                        
                    }
                  >
                   <p className="text-xl  font-medium">HOME</p>
                  </NavLink>
     </li>
     <li>
     <NavLink
                    to='/tickets'
                    className={({ isActive }) =>
                      isActive && 'underline text-white' 
                        
                    }
                  >
                   <p className="text-xl  font-medium">TICKETS</p>
                  </NavLink>
     </li>
     <li>
     <NavLink
                    to='/about'
                    className={({ isActive }) =>
                      isActive && 'underline text-white' 
                        
                    }
                  >
                   <p className="text-xl font-medium">ABOUT</p>
                  </NavLink>
     </li>
     <li>
     <NavLink
                    to='/login'
                    className={({ isActive }) =>
                      isActive && 'underline text-white' 
                        
                    }
                  >
                   <p className="text-xl  font-medium">LOGIN</p>
                  </NavLink>
     </li>
     
     
    
    </>
    return (
        <div className="bg-[#720A4C]">
            <h1 className="text-3xl  text-center pt-4 text-white">HalloWeen</h1>
            <h3 className="text-xl font-semibold text-center text-white">P a r t y</h3>
            <div>
            <div className="navbar  bg-[#720A4C]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navlinks}
      </ul>
    </div>
  
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="w-10 rounded-full">
        
        </div>
        {
            user ? 
            <>
              <img className="mr-4" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              <p>{user.displayName}</p>
              <p> <button onClick={handlelogout} className="bg-[#8E136D]  text-white font-bold text-xl px-2 py-1 rounded-md mr-2">Login out</button></p>
            </>
            
            :
            <Link to='/login'>
   <button className="bg-[#8E136D]  text-white font-bold text-xl px-2 py-1 rounded-md mr-2">Login</button>
    </Link>
        }
    
    
  </div>
</div>

            </div>
        </div>
    );
};

export default Navbar;