import React from "react";
import './Header.css';
import {NavLink} from 'react-router-dom'
// import Wishl from "./Wishl";

const Header = () =>{
    // const wishlist = () => {
    //     console.log("this is wish list");
    //     <Wishl/>

    // }
    return(
        <>
         <div className="head">
            {/* <h1>hii</h1> */}
            <ul>
                <li><h5>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h5></li>
                <li id="now"><NavLink to='/wish'>shop-now</NavLink></li>
                {/* <li className="shop"><a href="Shop now">shop now</a></li> */}
                <li>
                    <select id="sele">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </li>
            </ul>                     
            
        </div>
        <div className="senav">
        <div className="second">
            <h3>Exclusive</h3>
            <div>
            <ul className="nav-ul">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                 {/* <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/logout">Logout</NavLink></li> */}
                <li><NavLink to="signup">Sign-up</NavLink></li>
            </ul>
        </div>       
        </div>
        <div className="search">
            <div className="text2">
            <input type="text"  placeholder="search"/>
            <i class="fa fa-search" aria-hidden="true"></i>

            </div>           

        </div>
        <div className="font">            
        <NavLink to='wish'><i class="fa-regular fa-heart "></i></NavLink>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-user"></i>      
        </div>

        </div>
        <div className="line">
            
        </div>
        
        </>           

    )
}
export default Header