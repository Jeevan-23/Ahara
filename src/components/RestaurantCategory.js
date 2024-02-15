import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showitems, setshowindex }) => {
    {/* 
    Rather thank showing only one type and if you want to show multiple accorians then we have to give the feature to the child 
    itself rather than giving to its parent it is also called as lifting the control or lifting state up 
    here if the individual child has the property then we can do multiple accordians
    */}
    const handleclick = () => {
        setshowindex();
    };
    return ( 
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-5">
                <div className="flex justify-between cursor-pointer" onClick={handleclick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
                <span>🔽</span>
                </div>
                {showitems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;