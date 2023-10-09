



const Carddetailsshow = ({card}) => {

    const {category,image,category_details} = card;
    return (
        <div className="bg-[#720A4C] pb-20">
 <div className="card w-full bg-gradient-to-b from-rose-100 to-rose-900 text-white  shadow-xl mx-auto">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title text-2xl font-bold ">{category}</h2>
    <p className="text-5xl font-semibold">{category_details} </p>
    
    </div>
  </div>
</div>
            
        
    );
};

export default Carddetailsshow;