import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navlinks = <>
     <li>
     <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive && 'underline text-orange-600' 
                        
                    }
                  >
                   <p className="text-xl font-medium">HOME</p>
                  </NavLink>
     </li>
     <li>
     <NavLink
                    to='/tickets'
                    className={({ isActive }) =>
                      isActive && 'underline text-orange-600' 
                        
                    }
                  >
                   <p className="text-xl font-medium">TICKETS</p>
                  </NavLink>
     </li>
     <li>
     <NavLink
                    to='/program'
                    className={({ isActive }) =>
                      isActive && 'underline text-orange-600' 
                        
                    }
                  >
                   <p className="text-xl font-medium">PROGRAM</p>
                  </NavLink>
     </li>
     <li>
     <NavLink
                    to='/about'
                    className={({ isActive }) =>
                      isActive && 'underline text-orange-600' 
                        
                    }
                  >
                   <p className="text-xl font-medium">ABOUT</p>
                  </NavLink>
     </li>
     <li>
     <NavLink
                    to='/login'
                    className={({ isActive }) =>
                      isActive && 'underline text-orange-600' 
                        
                    }
                  >
                   <p className="text-xl font-medium">LOGIN</p>
                  </NavLink>
     </li>
     
     
    
    </>
    return (
        <div>
            <h1 className="text-3xl fon text-center mt-2">HalloWeen</h1>
            <h3 className="text-xl font-semibold text-center">P a r t y</h3>
            <div>
            <div className="navbar bg-base-100 mb-20">
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
  <div className="navbar  hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
</div>
            </div>
        </div>
    );
};

export default Navbar;