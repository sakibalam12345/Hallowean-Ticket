import { Link } from 'react-router-dom';
import bg from './banner.css'

const Banner = () => {
    return (
        <div className='bg'>
            <h1 className="text-5xl text-center text-white pt-5">HalloWeeN</h1>
            <p className="font-extrabold text-9xl text-white text-center ">PARTY</p>
          
            <div className='bg-orange-600 ml-[1000px]  w-28 h-28 rounded-full flex justify-center items-center font-semibold text-xl'>
                <Link><p>Buy  <br /> Tickets</p></Link>
            </div>
        </div>
    );
};

export default Banner;