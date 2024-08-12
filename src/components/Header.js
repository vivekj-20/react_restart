import {LOGO_URL} from "../utils/constant";

const Header = () =>{
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
            </ul>
        </div>
    </div>
    )
}

export default Header;