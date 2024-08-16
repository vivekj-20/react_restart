import {LOGO_URL} from "../utils/constant";
import { useEffect, useState } from "react";

const Header = () =>{

    const[buttonState,SetButtonState] = useState("Login");


    // prints Hurry when ever the value of buttonState changes.
    useEffect (() =>{
        console.log("Hurry!!!")
      },[buttonState]);

    return(
    <div className="Header">
        <div className="logo-container">
            <img className = "logo" src = {LOGO_URL}>
            </img>
        </div>
        <div className = "Nav-bar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className ="login"onClick={() =>{buttonState === "Login" ? SetButtonState("Logout") : SetButtonState("Login")}}>{buttonState}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;