import { Link } from "react-router-dom";


const About = () => {
    return (
        <div>
            
            <div className="text-center bg-[#720A4C]  pt-10">
                <h3 className="text-2xl font-semibold ">What it is all</h3>
                <h1 className="text-9xl text-white font-extrabold">About</h1>
                <div className="lg:flex justify-center items-center">
                <img className="w-[500px]" src="https://i.ibb.co/8j2Q0Ch/hero-01.png" alt="" />
                </div>
                <div className="text-white lg:flex justify-center items-center  gap-32 pb-10">
                    <div>
                    <h1 className="text-xl font-semibold">Attention please... <br />
 <span className="lg:text-9xl font-extrabold text-orange-400">! Not your <br /> Classic <br /> Halloween <br /> p a r t y !</span>
</h1>
                    </div>
                    <div>
                        <img className="lg:w-[600px] rounded-lg md:ml-20 md: pt-5" src="https://i.ibb.co/TPs9KtY/gallery-04.jpg" alt="" />
                    </div>

                </div>
            </div>
            <div className="text-center relative bg-[#720A4C] ">
                <h1 className="text-3xl font-medium">Halloween Madness</h1>
                <p className="text-[100px] font-bold">Come join the </p>
                <p className="lg:text-[200px] font-bold "> party!</p>
            </div>
            <Link to='/tickets'>
            <div className="lg:flex items-center justify-center lg:absolute lg:-mt-28 lg:ml-[700px] lg:block md:hidden hidden">
                <div className="bg-orange-400  lg:w-24 lg:h-24  rounded-full ">
                   
                <p className="font-medium ml-8 pt-4">Get a</p>
                <p className="font-bold text-3xl ml-2 mt-1"> Ticket</p>
                </div>
              
            </div>  
                    </Link>
           
        </div>
    );
};

export default About;