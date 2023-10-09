import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Cards from "./Cards/Cards";


const Home = () => {

    const allcards = useLoaderData()
   
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="text-center bg-[#720A4C] text-white">
                <h1  className="text-6xl font-bold mb-4">ABOUT</h1>
                <p className="text-2xl font-medium text-orange-500">Party Location</p>
                <p className="text-2xl font-medium mb-4">2415 Gordon St, New Orleans LA 70123</p>
                <p className="text-2xl font-medium mb-3">Halloween, celebrated on October 31st, is a spooky and festive holiday with deep historical roots. It originated from ancient Celtic traditions, particularly the festival of Samhain, marking the end of the harvest season and the beginning of winter.</p>
                <Link><button className="bg-[#8E136D]  text-white font-bold text-xl px-2 py-1 rounded-md mb-5">Read More</button></Link>
            </div>
            <div className="grid grid-cols-3 gap-10 pt-20 bg-[#720A4C]">
                {
                    allcards.map(singlecard => <Cards key={singlecard.id} card={singlecard}></Cards> )
                }
            </div>
            <div>
                <h1 className= 'text-3xl font-semibold pt-10'>Our photo</h1>
                <p>Gallery</p>
            </div>
        </div>
    );
};

export default Home;