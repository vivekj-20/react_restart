import { CDN_URL } from "../utils/constant";
 
const RestaurantCard = (props) => {
    const { resData } = props;
  //destructuring the array object
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla
    } = resData?.info;

  //resData?.data uses optional chaining to safely access the data property of resData. 
  //If resData is null or undefined, the expression will return undefined instead of throwing an error. 
  //This prevents runtime errors in case resData is not available.
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg size-60"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg truncate">{name}</h3>
        <h4 className="truncate">{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    );
  };

  //Higher Order Component
  export const getDiscountLabel = (RestaurantCard) =>{
    return(props) =>{
      const { resData } = props;
      const {
         header,subHeader   
      } = resData?.info?.aggregatedDiscountInfoV3;
      console.log(header);
      return (
        <div>
          <label className="absolute border border-black bg-lime-600 text-slate-50 m-2 p-2 rounded-xl">
            {header}
             <div className="text-xs">{subHeader}</div>    
          </label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
  };

  export default RestaurantCard;