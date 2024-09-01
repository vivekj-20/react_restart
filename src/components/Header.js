import {LOGO_URL} from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import  useOnlineStatus from "../utils/useOnlineStatus";
import userInfo from "../utils/userInfo";
import { useSelector } from "react-redux";

const Header = () =>{

    const {loggedUser} = useContext(userInfo);

    const[buttonState,SetButtonState] = useState("Login");
    // prints Hurry when ever the value of buttonState
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);

    return(
    <div className="flex justify-between border bg-pink-300 shadow-lg sm:bg-yellow-300 lg:bg-green-300">
        <div className="size-20 m-4">
            <img className = "bg-transparent-image" src = {LOGO_URL}>
            </img>  
        </div>
        <div className = "flex">
            <ul className = "flex space-x-4 items-center">
                <li>Online Status: {onlineStatus ? "😁" : "🥲"}</li>
                <li>
                   <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/about">About Us</Link>
                </li>
                <li>
                   <Link to="/contact">Contact Us</Link>
                </li>
                <li className="font-bold">
                    <Link to="/Cart">Cart ({cartItems.length} items)</Link>
                </li>
                <li className="bg-blue-200 text-white font-bold py-2 px-4 rounded hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50">
                    <button onClick={() =>{buttonState === "Login" ? SetButtonState("Logout") : SetButtonState("Login")}}>{buttonState}</button>
                </li>
                <li className="font-bold">User : {loggedUser}</li>
                </ul>
        </div>
    </div>
    )
}

export default Header;