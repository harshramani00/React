import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";

const Header = () =>{
    const [btnName, setBtnName] = useState("Login");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header-container">
            <div className="logo-container">
                <img
                    alt="Logo.jpg"
                    className="logo"
                    src= {LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                        className="login-btn"
                        onClick={() =>{
                            setIsLoggedIn(!isLoggedIn);
                            setBtnName(isLoggedIn ? "Login" : "Logout");
                        }}
                        >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
};
export default Header;