import Shimmer from "./Shimmer";
import {useRestaurantMenu} from "../utils/useCustomHooks"
const RestaurantMenu = () =>{

    const MenuList = useRestaurantMenu(); //custom Hook used to make code split 

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