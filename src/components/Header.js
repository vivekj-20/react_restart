import {LOGO_URL} from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    const[buttonState,SetButtonState] = useState("Login");


    // prints Hurry when ever the value of buttonState
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
                <li>
                   <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/about">About Us</Link>
                </li>
                <li>
                   <Link to="/contact">Contact Us</Link>
                </li>
                <li>Cart</li>
                <button className ="login"onClick={() =>{buttonState === "Login" ? SetButtonState("Logout") : SetButtonState("Login")}}>{buttonState}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;