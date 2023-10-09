



const Carddetailsshow = ({card}) => {

    const {category,image,category_details,id} = card;
    return (
        <div className="bg-[#720A4C]">
 <div className="card w-96 bg-gradient-to-b from-rose-100 to-rose-900 text-white  shadow-xl mx-auto">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title ">{category}</h2>
    <p>{category_details} </p>
    
    </div>
  </div>
</div>
            
        
    );
};

export default Carddetailsshow;