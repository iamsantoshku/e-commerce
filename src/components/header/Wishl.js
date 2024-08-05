import React, { useEffect, useState } from "react";
import './Wish.css'
import { NavLink } from "react-router-dom";
const Wishl = () => {

  const [products, setproduct] = useState([]);
  // const [countprod, setcountprod] = useState([4]);
  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    // console.log(response);
    setproduct(await response.json());
    // console.log(data);
  }
  // console.log(products.length);
   
 const handlefun = () => {
  // if(products.size() < )
  // if(products.length == 4){
  //   setproduct(4);
  // }
  let prd = products.slice(0, 5);
  // console.log(prd);
  setproduct(prd);
 }
//  const handlefun1 = () =>{
//   setproduct(prd2);
//  }
  useEffect(() => {
    getProducts();
  }, []);
  return (          
        <> 
       <div className="ited">
            <h2>WishList(4)</h2>
            <button>Move TO Bag</button>
           </div> 
      { 
        products.map((currel) => {
          return (
           <>           
            <div className="card-img">
              <div className="card-img1">               
                <NavLink to="/detai"><img src={currel.image} alt="" /></NavLink>
                <div className="but5">
                   <button>Add to Cart</button>
               </div>
               <div className="itedet">
                  <h6>{currel.title.length<40?currel.title:currel.title.length/2}</h6>
                  <p>{currel.price}</p>
             </div>
             <div className="ico-icon">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
              
            </div>
           </>           
              )
          })
        }
        <div className="butt3">                
            <button onClick={handlefun}>show less</button>
            <button onClick={getProducts}>View ALL</button>         
        </div>

            </>
          )
      }
export default Wishl;