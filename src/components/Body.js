import RestaurantCard from "../components/RestaurantCard"
import { useEffect, useState } from "react";
import Shimmmer from "../components/Shimmer";


const Body = () =>{

    const [restaurantList,setrestaurantList] = useState([]);
    const [SearchResult,SetSearchResult] = useState("");
    const [SwiggyList,SetSwiggyList] = useState([]);

    useEffect(() => {
      fetchData();
    } , []);

    const fetchData = async() => {
      
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.038566436472486&lng=73.0702755600214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
      const json = await data.json();
      setrestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      SetSwiggyList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      
    }

    return restaurantList.length === 0 ? (<Shimmmer/>) : (
        <div className="body">  
          <div className="filter">
            <div className="search-bar">
              <input type="text" className="search-Box" value={SearchResult} onChange={(e)=>SetSearchResult(e.target.value)}></input>
                 <button onClick={() =>{console.log(SearchResult)
                  
                  const searchRes = SwiggyList.filter((res) => res.info.name.toLowerCase().includes(SearchResult.toLowerCase()));

                  setrestaurantList(searchRes); 

                 }}>
                    Search
                 </button>
            </div>
            <button className="filter-btn" onClick={() =>
                {const SetList = restaurantList.filter((res) => res.info.avgRating >= 4.2);        
                setrestaurantList(SetList);
            }
            }>Filter Top Rated Restaurant</button>
            <button className="filter-btn" onClick={() =>
                {        
                  setrestaurantList(SwiggyList);
                }
            }>Reset</button>
          </div>
          <div className="res-container">   
            {restaurantList.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
          </div>
        </div>
      );    
}

export default Body;