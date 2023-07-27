import { style } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import NavBar from "../Home/NavBar";
import { removeCart } from '../Redux/action/Action';
import '../Shop/Shop.css'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart(){

    const prod=useSelector(state=>state)
    const dispatch=useDispatch()
    const source=prod.allProducts.cartProduct;
    console.log(localStorage.getItem("lists"));
    const[total,setTotal]=useState(0);
    useEffect(()=>{
      source.map((product)=>
      setTotal(total=>total+product.dprice))
    },[source])

    return(
        <div>
            <NavBar/>
        <ToastContainer/>
      <div className='products'>
        {source.map((product)=>
          <div className='product' key={product.id}>
              <img src={product.link} className='image'></img>
              <p>{product.desc}</p>
              <div className='prices'>
                  <p id='price'> ₹{product.price}</p>
                  <p id='dprice'> ₹{product.dprice}</p>
                  <p id='dprice'> (Save{product.save}%)</p>
                </div>
                <div className='quantity1'>
                <label for="quantity">Quantity:</label>
                  <input type="number" id="quantity" name="quantity" min="1" max="1000"/>
                  <input type="submit" style={{'marginLeft':'10px','backgroundColor':'#146C94','color':'whitesmoke','padding':'5px'}}></input>
                  </div>
              <div className='btns'>
                <h2 className='btnshop1' 
                  onClick={()=>{
                    dispatch(removeCart(product))
                  toast.error('Item Removed Sucessfully')
                  }}
                >Remove from cart</h2>
              </div>
              
          </div>
        )}
      </div>
      <center>
        <div className='cartprice'>
          <h1>
            
            Total Price:{total}
            </h1>
  
            
        </div>
        </center>
        </div>
    )
}