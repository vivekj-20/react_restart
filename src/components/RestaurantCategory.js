import CategoryItems from "./CategoryItems"
import { useState } from "react";

const RestaurantCategory = ({data , clickToggle , setshowItem}) =>{
    const {title,itemCards} = data?.card?.card;

    return(
        <div className="border bg-gray-200 shadow-lg w-6/12 mx-auto my-4 p-4">
            <div className="flex justify-between cursor-pointer" onClick={setshowItem}>
                <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                <span>{clickToggle ? '⇩' : '⇧'}</span>
            </div>
            {clickToggle && <CategoryItems dish={itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;