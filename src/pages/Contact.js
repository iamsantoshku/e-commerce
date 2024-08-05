
import React, { useState } from "react";
import './Contact.css'
const Contact = ()=>{

    const[name, setname] = useState('');
    const[email, setemail] = useState('');
    const[mob, setmob] = useState('');
    const[msg, setmsg] = useState('');
    // console.log("name",name);
    
    return(
        <>
        <div className="cont"> 
        <div className="cont1">
        <i class="fa-solid fa-phone-volume"></i>
        <h3>call to us</h3>
        <p>we are available 24/7,7 days a week</p>
        <p>phone:7033825186</p>

        <div className="line1">
            
        </div>


        <i class="fa-solid fa-envelope"></i>
        <h3>Write to us</h3>
        <p>Fill the form ,we will connect in 24 hours</p>
        <p>Email:santoshkr1592000@gmail.com</p>
        </div>
        <div className="cont2">
            <div className="input3">
                <input type="text" name="" id=""  placeholder="Enter name"value={name} onChange={(e)=>setname(e.target.value)} />
                <input type="email" name="" id="" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <input type="nmber" name="" id="" placeholder="Enter mob" value={mob} onChange={(e)=>setmob(e.target.value)}/>
            </div>
            <div className="mesg">
                <input type="text" placeholder="Enter your Message" value={msg} onChange={(e)=>setmsg(e.target.value)}/>
            </div>
            <div className="butt3">
                <button>Send Message</button>
            </div>

        </div>
        
        </div>
        
        


        
        </>
       

    )
}
export default Contact;