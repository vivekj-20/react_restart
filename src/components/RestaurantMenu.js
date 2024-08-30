import Shimmer from "./Shimmer";
import {useRestaurantMenu} from "../utils/useCustomHooks"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";
const RestaurantMenu = () =>{

    const MenuList = useRestaurantMenu(); //custom Hook used to make code split

    const [showItem,setshowItem] = useState(0);

    if (MenuList === null) return <Shimmer/>;

    const {name,costForTwoMessage,cuisines,avgRating } = MenuList?.cards[2]?.card?.card?.info;
    
    const categories = MenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (e) =>
        e.card?.["card"]?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    return(
        <div className="text-center">
            <h1 className="text-2xl font-bold m-2 p-2">{name}</h1>
            <h2 className="font-semibold">{cuisines.join(",")}</h2>
            <h4>{avgRating}</h4>
            <h3>MENU</h3>
            {categories.map((category , index) => (
                <RestaurantCategory key={category?.card?.card?.title} data={category} 
                clickToggle={index === showItem ? true : false}
                setshowItem = {() =>{setshowItem(index)}}
                />
            ))}
        </div>
    )
};

export default RestaurantMenu;