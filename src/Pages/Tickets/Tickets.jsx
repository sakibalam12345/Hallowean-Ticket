import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Tickets = () => {
    return (
        <div>
           
            <div className="bg-[#720A4C] pt-10 text-center text-white">
                <h1 className="text-3xl font-semibold">Get your</h1>
                <p className="text-6xl font-bold">Tickets</p>
                <div className="flex justify-center items-center">
                <img className="w-[500px]" src="https://i.ibb.co/8j2Q0Ch/hero-01.png" alt="" />
                </div>
            </div>
            <div className="bg-[#720A4C] pb-20">
                <h1 className="text-center font-bold text-5xl">Ticket Categories</h1>
                <div className="flex justify-center items-center gap-5 mt-10">
                    <div className="card w-96 h-96 bg-base-100 shadow-xl">
 
  <div className=" card-body rounded-lg items-center text-center bg-gradient-to-b from-rose-100 to-rose-900 ">
    <h2 className="card-title ">Single Entry</h2>
    <p className="text-5xl font-extrabold"> $45 </p>
    <p>Capture memorable moments, explore at your leisure, and create your unique memories during your visit</p>
    <div className="card-actions justify-center">
      <Link>
      <button className="px-3  border-none bg-[#8E136D] text-white font-bold text-xl  py-2 rounded-md">Order Ticket</button>
      </Link>
    
    </div>
  </div>
</div>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl">
 
  <div className=" card-body rounded-lg items-center text-center bg-gradient-to-b from-rose-100 to-rose-900">
    <h2 className="card-title ">Couple Entry</h2>
    <p className="text-5xl font-extrabold"> $75 </p>
    <p>Capture memorable moments, explore at your leisure, and create your unique memories during your visit</p>
    <div className="card-actions justify-center">
      <Link>
      <button className="px-3  border-none bg-[#8E136D] text-white font-bold text-xl  py-2 rounded-md">Order Ticket</button>
      </Link>
    
    </div>
  </div>
</div>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl">
 
  <div className=" card-body rounded-lg items-center text-center bg-gradient-to-b from-rose-100 to-rose-900">
    <h2 className="card-title ">Family Entry</h2>
    <p className="text-5xl font-extrabold"> $95 </p>
    <p>Capture memorable moments, explore at your leisure, and create your unique memories during your visit</p>
    <div className="card-actions justify-center">
      <Link>
      <button className="px-3  border-none bg-[#8E136D] text-white font-bold text-xl  py-2 rounded-md ">Order Ticket</button>
      </Link>
    
    </div>
  </div>
</div>
                    </div>
            </div>
            
        </div>
    );
};

export default Tickets;