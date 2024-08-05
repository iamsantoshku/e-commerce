import React from "react";
import './Footer.css'
// import{NavLink} from react-router-dom
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import {faFacebookF} from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
const Footer = ()=>{
    return(
        <>
        <div className="container">
            {/* h1hhh */}
            <div className="container1">
                {/* <h2>Exclusive</h2> */}
                <div className="data1">
                    <h3>Exclusive</h3>
                    <h4>Subscribe</h4>
                    <h6>Get 10% off on your first oreder</h6>
                    <input type="text" placeholder="Enter your email"/>
                    <i class="fa-regular fa-paper-plane"></i>

                </div>

            </div>
            <div className="container2">
            <div className="data2">
                <h3>support</h3>
                <h6>rohini sector-22,new delhi</h6>
                <h6>email@gmail.com</h6>
                <h6>7033825196</h6>
                    
                </div>
                

            </div>
            <div className="container3">
             <div className="data3">
                <h3>Account</h3>
                <h6>My Account</h6>
                <h6>Login/signup</h6>
                <h6>Cart</h6>
                <h6>Wishlist</h6>
                <h6>shop</h6>
                    
                </div>

            </div>
            <div className="container4">
            <div className="data4">
                <h3>Quicklink</h3>
                <NavLink><h6>privacy polycy</h6></NavLink>
                <NavLink><h6>Term of use</h6></NavLink>
                <NavLink><h6>FAQ</h6></NavLink>
                <NavLink><h6>Contact</h6></NavLink>                   
                    </div>

            </div>
            <div className="container5">
            <div className="data5">
                <h3>Download-app</h3>
                <h6>save $3 for new user only</h6>
                <img className="img1"  src="https://media.istockphoto.com/id/1322805937/vector/bar-code.jpg?s=2048x2048&w=is&k=20&c=mdGh56JZi0cCDybmNA1Kr2JN8XqF0SLXB1pA5bMWM5I=" alt="" /><br />
                {/* <FontAwesomeIcon icon={faPenNib} />
                <FontAwesomeIcon icon={faEnvelope} /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
                {/* <FontAwesomeIcon icon={faFacebookF} /> */}
               
                {/* <img className="img2"  src="https://t3.ftcdn.net/jpg/04/04/98/88/240_F_404988825_ll3zGQ8u7Q0l4amW0GpOAVjH6PzcltlM.jpg" alt="" />
                <img className="img2"  src="data:image/jpeg;base64,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" alt="" /> */}
                {/* <img  className="img2" src="data:image/png;base64,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" alt="" /> */}
                <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
                </div>

            </div>
        </div>
        {/* <p>@ Copy right rimel 2024. All Right Reserved</p> */}
        </>

    )
}
export default Footer;