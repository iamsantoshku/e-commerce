import React from "react";
import {Routes,Route } from 'react-router-dom';
import Signup from "../components/header/Signup";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../components/header/Login";
// import Home from "../pages/Home";
import Home from "../pages/Home";
import Wishl from "../components/header/Wishl";
import Image from "../detail/Image";


const AppRoutes = ()=>{
    return(
        <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        {/* <Route path='/profile' element={<h1>this is profile page</h1>}></Route>
        <Route path='/logout' element={<h1>this is logout page</h1>}></Route>  */}
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/wish' element={<Wishl/>}></Route>
        <Route path='/detai' element={<Image/>}></Route>
        </Routes>   
        
    )
}
export default AppRoutes