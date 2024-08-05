import React, { useEffect, useState } from "react";
import './Image.css'
const Image = ()=>{
    const [data, setdata] = useState([])
    const getdetail = async()=>{
        let det = await fetch('https://fakestoreapi.com/products');
        setdata(await det.json());
    }
    useEffect(()=>{
        getdetail()

    },[])  

    return(
        <>
        <div className="det1">
        {
            data.map((prod, prod2)=>{
                return(
                    <>
                    <div className="de2">
                        <img src={prod.id === prod2.id ? prod.imgage:" "} alt="" />
                    </div>
                    </>
                )

            })
        }
        
        </div>
        </>
    )
}
export default Image;