import React from "react";
import './Signup.css';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Signup = ()=>{
    // const[item,setitem] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const navigate = useNavigate();
    const clickhand = async ()=>{
        console.warn(name,email,pass);
        let result = await fetch('http://localhost:4000/register', {
            method:'post',
            body: JSON.stringify({name, email, pass}),
            headers: {
                'Content-Type':'application/json'
            },

        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result))    
        // if(result){
         navigate('/')

        // }
    }

    return(

        <>
        <div className="sign">
        <div className="backimg">
           <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg" alt="" />

        </div>

        <div className="text-box">
            <h1>Create Your Account</h1>
            <div className="textp">
            <p>Enter Your detail</p>
            </div>          
            <input className="text" type="text"
             value={name} onChange={(e)=>setname(e.target.value)}  placeholder="Enter Name"  />
            <input className="text" type="text"  value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email" />
            <input className="text" type="password" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="Enter Password"  />
            <button onClick={clickhand} className="butt">Create an Acount</button><br />
            {/* <button className="cret1">Create an Account</button><br /> */}
            {/* <i class="fa-brands fa-google"></i> */}
            <button  className="cret2">sign up with google</button><br />
            <div className="link">
            <p>Allready have Account <NavLink to='/login'>Login</NavLink></p>

            </div>
            
        </div>

        </div>
        
        </>
        
    )

}
export default Signup;