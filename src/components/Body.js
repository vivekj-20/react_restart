import {resList} from "../utils/mockData";
import RestaurantCard from "../components/RestaurantCard"
import { useState } from "react";

const Body = () =>{

    const [restaurantList,setrestaurantList] = useState(resList);
    return (
        <div className="body">  
          <div className="filter">
            <button className="filter-btn" onClick={() =>
                {const SetList = restaurantList.filter((res) => res.data.avgRating > 4);        
                setrestaurantList(SetList);
            }
            }>Filter Top Rated Restaurant</button>
          </div>
          <div className="filter">
            <button className="filter-btn" onClick={() =>
                {        
                setrestaurantList(resList);
                }
            }>Reset</button>
          </div>  
          <div className="res-container">   
            {restaurantList.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
          </div>
        </div>
      );    
}

export default Body;