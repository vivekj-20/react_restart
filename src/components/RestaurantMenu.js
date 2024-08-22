import { useEffect, useState } from "react";
import { resUrl } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const RestaurantMenu = () =>{
    const[MenuList,setMenuList] = useState(null);

    const {resId} = useParams();

    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async() =>{

        const data = await fetch(resUrl + resId);
        const json = await data.json();
        setMenuList(json.data);
        console.log(json.data);
    };

    if (MenuList === null) return <Shimmer/>;

    const {name,costForTwoMessage,cuisines,avgRating } = MenuList?.cards[2]?.card?.card?.info;

    const {itemCards} = MenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    return(
        <div>
            <h1>{name} - {costForTwoMessage}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h4>{avgRating}</h4>
            <h3>MENU</h3>
            <ul>
                {itemCards.map((item) => 
                    <li key={item.card.info.id}>{item.card.info.name} - {"Rs ."} {item.card.info.price == null ? item.card.info.defaultPrice/100 : item.card.info.price/100}</li>
                )}
            </ul>
        </div>
    )
};

export default RestaurantMenu;