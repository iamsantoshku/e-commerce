import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css'
// import 'Corsal.css'
import { Crosal } from '../components/corosel/Crosal';
import { useCarousel } from '../components/corosel/Corosallogic';

const Home = () => {

  const [item, setitems] = useState([]);
  const findprd = async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    setitems(await res.json());    
    // setitems(it);
  }

  
  useEffect(()=>{
    findprd()
   
  },[4])
  const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cC0q2AYpPFi_K41EfwRJtdUiC4qFPwEN2HZyHO_7HTGDJO-YqGBDK_ekuA&s","https://target.scene7.com/is/image/Target/GUEST_edb5eb6a-1a4f-4475-921b-8f5d8b2ff298?qlt=65&fmt=pjpeg&hei=350&wid=350","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rujOXUQjh0cEWjOWk9_0Yt6HDqFPhXkgywCKUUIo1Mj3mdjEjTnjoqkuSg&s"];
  const { currentIndex, goToSlide } = useCarousel(images);

  // const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <>
      <div className='home-nav'>
        <ul className="home-ul">
          <li><NavLink to="/womanf">Woman's fashion</NavLink></li>
          <li><NavLink to="/manf">Man-fashion</NavLink></li>
          <li><NavLink to="/elect">Electronics</NavLink></li>
          <li><NavLink to="/lisfes">Life-style</NavLink></li>
          <li><NavLink to="/medi">Medicine</NavLink></li>
          <li><NavLink to="toys">Toys </NavLink></li>
          <li><NavLink to="sports">Sports & Outdoor </NavLink></li>
          <li><NavLink to="groc">Groceries </NavLink></li>
          <li><NavLink to="health">Helth & Beauty </NavLink></li>
        </ul>
        <div className="line4">

        </div>
        <div className="corosel">
          <Crosal
           images={images}
           currentIndex={currentIndex}
           goToSlide={goToSlide}
   
          />



        </div>

      </div>

      <div className="flash">
        <div className="det">
          <h1>Todoy's</h1>
        </div>
        <div className="flashsell">
          <h1>Flash sells</h1>
        </div>

      </div>
      <div className="proddet">
        <div className="prod1">
          <img src="data:image/jpeg;base64,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" alt="" />

          <h3>product name</h3><br />
          <p>$23</p>
          <div className="icon2">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>

          </div>



          <div className="icin">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
          </div>


        </div>
        <div className="prod1">
          <img src="data:image/jpeg;base64,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" alt="" />
          <h3>product name</h3><br />
          <p>$23</p>
          <div className="icon2">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>

          </div>
          <div className="icin">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-eye"></i>

          </div>


        </div>
        <div className="prod1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5yvdAADUHsAcUeR274JbFuyKv0EihthSsQ&usqp=CAU" alt="" />
          <h3>product name</h3><br />
          <p>$23</p>
          <div className="icon2">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>

          </div>
          <div className="icin">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-eye"></i>

          </div>


        </div>
        <div className="prod1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDYYdLmh8XXF9S8hSaGiPLbNl78GE0Ds2jSvsV1RVNe8eWfMQuTIG5lSZDDDC5QZC_Gs&usqp=CAU" alt="" />
          <h3>product name</h3><br />
          <p>$23</p>
          <div className="icon2">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>

          </div>
          <div className="icin">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-eye"></i>

          </div>
        </div>
        <div className="prod1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNx3-9oJ1y6vgM9qTPR10-vNu7LS9NAy5xHg&usqp=CAU" alt="" />
          <h3>product name</h3><br />
          <p>$23</p>
          <div className="icon2">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>

          </div>
          <div className="icin">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-eye"></i>

          </div>

        </div>

      </div>
      <div className="butt1">
        <button >View All Product</button>
      </div>
      <div className="line2">

      </div>

      <div className="flash">
        <div className="det">
          <h1>Categories</h1>
        </div>
        <div className="flashsell">
          <h1>Brose By Categorie </h1>
        </div>
      </div>
      <div className="box2">
        <div className="boxite">
        <i class="fa-solid fa-mobile"></i>
        <div className="mob">
        <h2>Mobile</h2>

        </div>
        

        </div>
        <div className="boxite">
        <i class="fa-solid fa-computer"></i>
        <div className="mob">
        <h2>Computer</h2>

        </div>
          
        </div>
        <div className="boxite">
        <i class="fa-solid fa-headphones"></i>
        <h2>Headphones</h2>
          
        </div>
        <div className="boxite">
        <i class="fa-solid fa-camera-retro"></i>
        <div className="mob">
        <h2>Camera</h2>

        </div>
          
        </div>
        <div className="boxite">
        <i class="fa-solid fa-gamepad"></i>
        <div className="mob">
        <h2>Gamepad</h2>

        </div>
          
        </div>
        <div className="boxite">
        <i class="fa-solid fa-dice"></i>
        <div className="mob">
        <h2>Dice</h2>

        </div>
          
        </div>
        <div className="boxite">
        <i class="fa-solid fa-table-tennis-paddle-ball"></i>
        <h2>Table Tenis</h2>
          
        </div>
      </div>

      <div className="flash">
        <div className="det">
          <h1>This Months </h1>
        </div>
        <div className="flashsell">
          <h1>Best selling products</h1>
        </div>
      </div>
      {
        item.map((ite)=>{
          return( 
            <>
            <div className="prd">
              <div className="prodimg">
                <img src={ite.image} alt="" />
              </div>
            </div>           
            </>
          )

        })
      }
    </>

  )
}

export default Home;
