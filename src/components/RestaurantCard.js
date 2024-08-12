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
      deliveryTime,
    } = resData?.data;

  //resData?.data uses optional chaining to safely access the data property of resData. 
  //If resData is null or undefined, the expression will return undefined instead of throwing an error. 
  //This prevents runtime errors in case resData is not available.
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            {CDN_URL} +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;