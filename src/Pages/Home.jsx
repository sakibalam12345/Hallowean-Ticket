import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";

import Cards from "./Cards/Cards";


const Home = () => {

    const allcards = useLoaderData()
   
    return (
        <div>
            
            <Banner></Banner>
            <div className="text-center bg-[#720A4C] text-white">
                <h1  className="text-6xl font-bold mb-4">ABOUT</h1>
                <p className="text-2xl font-medium text-orange-500">Party Location</p>
                <p className="text-2xl font-medium mb-4">2415 Gordon St, New Orleans LA 70123</p>
                <p className="text-2xl font-medium mb-3">Halloween, celebrated on October 31st, is a spooky and festive holiday with deep historical roots. It originated from ancient Celtic traditions, particularly the festival of Samhain, marking the end of the harvest season and the beginning of winter.</p>
                <Link to='/about'><button className="bg-[#8E136D]  text-white font-bold text-xl px-2 py-1 rounded-md mb-5">Read More</button></Link>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 md:gap-5 gap-3 pt-20 pb-10 bg-[#720A4C]">
                {
                    allcards.map(singlecard => <Cards key={singlecard.id} card={singlecard}></Cards> )
                }
            </div>
            <div className="bg-[#720A4C]">
                <h1 className= 'text-3xl font-semibold pt-10 text-white text-center'>Our photo</h1>
                <p className='text-7xl font-extrabold text-white text-center pb-16'>Gallery</p>   
                <div  className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 ml-20 md:mr-20 md:gap-3 mr-20 gap-3">
                  <img className="w-[400px] h-96 rounded-lg " src="https://i.ibb.co/RHBt6tv/gallery-03.jpg" alt="" />
                  <img className="w-[400px] h-96 rounded-lg" src="https://i.ibb.co/2FqP8Tz/gallery-06.jpg" alt="" />
                  <img className="w-[400px] h-96 rounded-lg" src="https://i.ibb.co/6mtk3Qs/gallery-01.jpg" alt="" />
                  <img className="w-[400px] h-96 rounded-lg" src="https://i.ibb.co/1TLtWMW/gallery-09.jpg" alt="" />
                  <img className="w-[400px] h-96 rounded-lg" src="https://i.ibb.co/TPs9KtY/gallery-04.jpg" alt="" />
                  <img className="w-[400px] h-96 rounded-lg" src="https://i.ibb.co/dgNMx0p/gallery-05.jpg" alt="" />
                  </div>        
               </div>
                 <div className="bg-[#720A4C] pb-12">
                    <h3 className="text-3xl font-semibold text-center pt-10">Get your</h3>
                    <p className="text-6xl font-semibold text-center">Tickets</p>

                    <div className=" lg:flex justify-center items-center md:flex ml-5 md:gap-3  lg:gap-5 mt-10">
                    <div className="card w-96 bg-base-100 shadow-xl">
 
  <div className=" card-body items-center text-center bg-gradient-to-b from-rose-100 to-rose-900 ">
    <h2 className="card-title ">Single Entry</h2>
    <p className="text-5xl font-extrabold"> $45 </p>
    <p>Capture memorable moments, explore at your leisure, and create your unique memories during your visit</p>
    <div className="card-actions justify-center">
      <Link to='/tickets'>
      <button className="px-3  border-none bg-[#8E136D] text-white font-bold text-xl  py-2 rounded-md">Order Ticket</button>
      </Link>
    
    </div>
  </div>
</div>
                    <div className="card w-96 bg-base-100 shadow-xl">
 
  <div className=" card-body items-center text-center bg-gradient-to-b from-rose-100 to-rose-900">
    <h2 className="card-title ">Couple Entry</h2>
    <p className="text-5xl font-extrabold"> $75 </p>
    <p>Capture memorable moments, explore at your leisure, and create your unique memories during your visit</p>
    <div className="card-actions justify-center">
      <Link to='/tickets'>
      <button className="px-3  border-none bg-[#8E136D] text-white font-bold text-xl  py-2 rounded-md">Order Ticket</button>
      </Link>
    
    </div>
  </div>
</div>
                    <div className="card w-96 bg-base-100 shadow-xl">
 
  <div className=" card-body items-center text-center bg-gradient-to-b from-rose-100 to-rose-900">
    <h2 className="card-title ">Family Entry</h2>
    <p className="text-5xl font-extrabold"> $95 </p>
    <p>Capture memorable moments, explore at your leisure, and create your unique memories during your visit</p>
    <div className="card-actions justify-center">
      <Link to='/tickets'>
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

export default Home;