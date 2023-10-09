import { Link } from "react-router-dom";


const Cards = ({card}) => {
    const {category,image,category_details} = card;
    
    return (
        <div>
            <div className="card w-96 bg-gradient-to-b from-rose-100 to-rose-900 text-white  shadow-xl mx-auto">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title ">{category}</h2>
    <p>{category_details.slice(0,80)} <span className="text-orange-600">...</span> </p>
    <div className="card-actions justify-center">
        <Link>
        <button className="px-3  border-none bg-[#8E136D] text-white font-bold text-xl  py-2 rounded-md">Show Details</button>
        </Link>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;