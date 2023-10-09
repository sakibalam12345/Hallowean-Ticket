import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Provider/Authprovider";
import { FaGithub} from 'react-icons/fa';



const Login = () => {

    const location = useLocation();
    const Navigate = useNavigate();

    const {login,githublogin} = useContext(Authcontext);

    const handlegithublogin = ()  =>{
      
        githublogin()
        .then(result=>{
            console.log(result.user)
            Navigate('/')
        })
        .catch(error=>{
            console.error(error)
        })

    }

    const handlelogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        console.log(form,email,password)

        login(email,password)
        .then(result=>{
            
            Navigate(location?.state ? location.state : '/')
            

        } )
        .catch(error=>{
            console.error(error)
        })

      




    } 
    return (
        <div>
            <div className="hero min-h-screen  bg-[#720A4C]">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center pb-5">Do not have an account? please <Link to='/registration' className="text-red-500"> Registration</Link></p>
      <div>
        <button onClick={handlegithublogin}>
        <p className="text-center pb-4 flex justify-center items-center gap-2 ml-32">Login with github <FaGithub></FaGithub> </p>
        </button>
      
      </div>
    </div>
    
  </div>
 
</div>

        </div>
    );
};

export default Login;