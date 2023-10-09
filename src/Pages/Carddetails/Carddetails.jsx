
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Carddetailsshow from "./Carddetailsshow";



const Carddetails = () => {
    const [cards,setcards] = useState({});

    const {id}= useParams();
    console.log(id)

    const maincard = useLoaderData();
    console.log(maincard)
    useEffect(()=>{
        const findcard = maincard.find(singlecard => singlecard.id === id)
        setcards(findcard)

    },[id,maincard]);

    console.log(cards)

   

    return (
        <div>
      
  <div>
            <Carddetailsshow card={cards}></Carddetailsshow>
        </div>
        </div>
      
    );
};

export default Carddetails;