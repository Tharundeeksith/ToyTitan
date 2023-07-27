import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App'
import shop1 from '../Assests/shop1.webp'
import shop2 from '../Assests/shop2.webp'
import shop3 from '../Assests/shop3.webp'
import shop4 from '../Assests/shop4.webp'
import shop5 from '../Assests/shop5.webp'
import shop6 from '../Assests/shop6.webp'
import shop7 from '../Assests/shop7.webp'
import shop8 from '../Assests/shop8.webp'
import shop9 from '../Assests/shop9.webp'
import shop10 from '../Assests/shop10.webp'

import "./Search.css"
import NavBar from '../Home/NavBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Search() {
    const source=[
      {"id":1,"link":shop1,"category":"Building Kit/Toy","brand":"Lego","age":"3+","desc":"Lego City Stunt Plane Building Set","price":1140},
      {"id":2,"link":shop2,"category":"Castle Toy","brand":"Lego/Disney","age":"13+","desc":"Build & Display Ideas The Globe Building Set by Lego","price":1140}, 
      {"id":3,"link":shop3,"category":"Electric Toys","brand":"Paw Petrol","age":"6+","desc":"Paw Patrol Basic Vehicle Marshall Chase Red 3Y+","price":960},
      {"id":4,"link":shop4,"category":"Puzzle Toys","brand":"Lego","age":"6+","desc":"Lego Batman Building Set","price":3050},
      {"id":5,"link":shop5,"category":"Girl Toys","brand":"Barbie","age":"6+","desc":"Barbie Malibu House, Fold & Store Barbie Playset, 3Y+, Multicolour","price":1700},
      {"id":6,"link":shop6,"category":"Electric Toys","brand":"HotWheels","age":"6+","desc":"Hotwheels Mercedes-Benz","price":1700},
      {"id":7,"link":shop7,"category":"Electric Toys","brand":"HotWheels","age":"6+","desc":"Hotwheels Mercedes-Benz","price":1700},
      {"id":8,"link":shop8,"category":"Superhero Toy","brand":"Marvel","age":"10+","desc":"Marvel IronMan-Toy","price":1700},
      {"id":9,"link":shop9,"category":"Electric Toys","brand":"UBoard","age":"10+","desc":"Uboard Infinity-Electric Vehicle","price":29000},
      {"id":10,"link":shop10,"category":"Electric Toys","brand":"Uboard","age":"13+","desc":"Uboard Drone","price":2500}
        ]
        const [search,setSearch]=useContext(UserContext);
        let prod=[];
        const url=window.document.location.href.split("/");
        const name=url[url.length-1].toLowerCase();
        console.log(name);
    
        const [arr,setArr]=useState();
    
        const[loading,setLoading]=useState(false);

        console.log(prod.length)
        useEffect(() => {
            for(let i=0;i<source.length;i++){
    
               
                if(source[i].desc.toLowerCase().includes(name)){
                    setLoading(true);
                    prod.push(source[i]);
                }
        
            }
            setArr(prod)
            // setLoading(flag);
        }, [])
        
        console.log(arr)
      return (
        <>
        
      <ToastContainer />
        <div className='searchproducts'>
          {/* <NavBar /> */}
          {
            loading ? arr.map((items)=>
            <div className='searchproduct'>
                <img src={items.link} className='image'></img>
                <p id='brand'>{items.brand}</p>
                <div className='prices'>
                <p id='desc'>{items.desc}</p>
      

                </div>
                <div className='price2'>
                  <p id='price'>${items.price}</p>
                  <h2 id='btnshop' onClick={() => {
                  toast.success('Item Added Successfully'); }}>Add To cart 🛍️</h2>
          </div>
            </div>
        ): "No results Found :)"
         }
        </div>
        </>
      )
}
