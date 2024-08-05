import React from 'react'
// import './Login.css'
import './Signup.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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

  return (
    <>
    <div className="sign">
    <div className="backimg">
       <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg" alt="" />

    </div>

    <div className="text-box">
        <h1>Login into Exclusive</h1>
        <p>Enter Your detail</p>
        <input className="text" type="text"
         value={name} onChange={(e)=>setname(e.target.value)}  placeholder="Enter Name"  />
        <input className="text" type="text"  value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email" />
        <input className="text" type="password" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="Enter Password"  />
        <button onClick={clickhand} className="butt">Login</button><br />
        {/* <button className="cret1">Create an Account</button><br /> */}
        {/* <button className="cret2">sign up with google</button><br /> */}
        {/* <p>Allready have Account <NavLink to='./login'>Login</NavLink></p> */}

    </div>

    </div>
    
    </>
  )
}

export default Login
