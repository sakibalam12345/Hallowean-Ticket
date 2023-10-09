import { Link } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="text-center">
                <h1  className="text-6xl font-bold mb-4">ABOUT</h1>
                <p className="text-2xl font-medium">Party Location</p>
                <p className="text-2xl font-medium mb-4">2415 Gordon St, New Orleans LA 70123</p>
                <p className="text-2xl font-medium mb-3">Halloween, celebrated on October 31st, is a spooky and festive holiday with deep historical roots. It originated from ancient Celtic traditions, particularly the festival of Samhain, marking the end of the harvest season and the beginning of winter.</p>
                <Link><button className="bg-orange-600 text-white font-bold text-xl px-2 py-1 rounded-md">Read More</button></Link>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Home;