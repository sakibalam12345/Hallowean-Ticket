import { useContext, useState,} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Provider/Authprovider";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Registration = () => {

  const navigate = useNavigate();

  const [regisuccess,setregisuccess] = useState('');
  const [regierror,setregierror] = useState('');

  
    const {createuser} = useContext(Authcontext);
    const handleregistration = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name,photo,email,password)
        if(password.length < 6){
          setregierror(toast('password is less than 6 words'))
          return;
        }

        createuser(email,password)
        .then(result=>{
          setregisuccess(toast('registration successful'))
            console.log(result.user);
           navigate('/')


        })
        .catch(error=>{
            console.error(error);
            setregierror(toast(error.message))
        })


    }
    return (
        <div>
            <div className="hero min-h-screen bg-[#720A4C]">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Registration now!</h1>

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleregistration} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="Your photo" className="input input-bordered" required />
        </div>
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
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
      </form>
      <p className="text-center pb-5">Already have an account? please <Link to='/login' className="text-red-500">Login</Link></p>
    </div>
  </div>
</div>
<ToastContainer></ToastContainer>
        </div>
        
    );
};

export default Registration;