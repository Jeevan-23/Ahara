import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
    const { resId } = useParams();
    // This is a custom hook
    const restroinfo = useRestaurantMenu(resId);

    const [showindex, setshowindex] = useState(null); 

    if(restroinfo === null ) return <Shimmer /> ;

    const { name , locality, cuisines, costForTwoMessage } = restroinfo?.cards[0]?.card?.card?.info;

    const categories = restroinfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter
    (c=> 
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories);
   
    return (
        <div className="text-center">
            <h1 className="font-bold mt-6 text-2xl">{name}</h1>
            <h3 className="font-bold md-4">{locality}</h3>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {
                categories.map((category, index) => 
                (
                <RestaurantCategory key={category?.card?.card?.title} 
                data={category?.card?.card} 
                showitems={ index === showindex ? true : false } 
                setshowindex={() => setshowindex(index)}
                />
                )
            )}
        </div>
    );
};

export default RestaurantMenu;
