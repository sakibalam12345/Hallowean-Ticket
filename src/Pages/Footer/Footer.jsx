import { FaTwitterSquare,FaYoutube,FaInstagramSquare,FaFacebookSquare} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="text-center bg-[#720A4C] text-white">
            <h2 className="font-bold text-6xl">Halloween</h2>
            <p className="font-medium text-3xl pb-6">Party</p>
            <p className='pb-8'>Find us on Social Media</p>
            <div className='flex justify-center items-center gap-16 pb-16'>
                <a href="">
                <FaTwitterSquare className='text-2xl'></FaTwitterSquare>
                </a>
                <a href=""><FaYoutube className='text-2xl'></FaYoutube></a>
                <a href=""><FaInstagramSquare className='text-2xl'></FaInstagramSquare></a>
                <a href=""><FaFacebookSquare className='text-2xl'></FaFacebookSquare></a>

            </div>
            <p>Copyright © 2023 Halloween Party | Powered by Halloween Party</p>
        </div>
    );
};

export default Footer;