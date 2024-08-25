import { useState , useEffect} from "react";
import { resUrl } from "../utils/constant";
import { useParams } from "react-router-dom";
export const useRestaurantMenu = (() => {

    const [MenuList,setMenuList] = useState(null);

    const {resId} = useParams();

    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async() =>{
        const data = await fetch(resUrl + resId);   
        const json = await data.json();
        setMenuList(json.data);
        console.log(json.data);
    }
    return MenuList;
});

export const useSwiggyList = (() => {
    const [SwiggyList,SetSwiggyList] = useState([]); // complete restaurant list used in search opertion.

    useEffect(() => {
        fetchData();
      } , []);
  
      const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.038566436472486&lng=73.0702755600214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        SetSwiggyList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      }
      return SwiggyList;
})