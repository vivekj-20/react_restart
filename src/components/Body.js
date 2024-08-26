import RestaurantCard from "../components/RestaurantCard"
import { useEffect, useState } from "react";
import Shimmmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import { useSwiggyList } from "../utils/useCustomHooks";

const Body = () =>{

    const [restaurantList,setrestaurantList] = useState([]); // complete restuarant list to polulate in the home screen.
    const [SearchResult,SetSearchResult] = useState(""); // filterd search response for UI to render

    const SwiggyList = useSwiggyList(); // custom hook which gives complete restaurant list , which remain unchange

    useEffect(() => {
      fetchData();
    } , []);

    const fetchData = async() => {
      
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.038566436472486&lng=73.0702755600214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      const json = await data.json();
      setrestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return restaurantList.length === 0 ? (<Shimmmer/>) : (
        <div className="body">  
          <div className="flex space-x-6 items-center">
            <div className="m-2 p-2">
              <input type="text" className="border border-solid border-black px-2" value={SearchResult} onChange={(e)=>SetSearchResult(e.target.value)}></input>
                 <button className="px-2 py-2 bg-green-100 m-4 rounded-lg"onClick={() =>{console.log(SearchResult)
                  
                  const searchRes = SwiggyList.filter((res) => res.info.name.toLowerCase().includes(SearchResult.toLowerCase()));

                  setrestaurantList(searchRes); 

                 }}>
                    Search
                 </button>
            </div>
            <button className="bg-green-100 m-14 rounded-lg" onClick={() =>
                {const SetList = restaurantList.filter((res) => res.info.avgRating >= 4.2);        
                setrestaurantList(SetList);
            }
            }>Filter Top Rated Restaurant</button>
            <button className="bg-green-100 m-14 rounded-lg" onClick={() =>
                {        
                  setrestaurantList(SwiggyList);
                }
            }>Reset</button>
          </div>
          <div className="flex flex-wrap">   
            {restaurantList.map((restaurant) => (
              <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
            ))}
          </div>
        </div>
      );    
}

export default Body;