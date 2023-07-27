import React, { useContext, useEffect, useState } from 'react'

import "./Home.css"
import imagebackground from "../Assests/boy-removebg.png"

import Slide from "../Assests/Slide.webp"
import Slide4 from "../Assests/Slide4.jpeg"
import down from '../Assests/down.svg'
import Footer from '../Footer/Footer'

import {Link,useNavigate} from 'react-router-dom'
import NavBar from './NavBar'
// import Contact from '../Assests/Contact/Contact'



export default function Home() {
  let arr=[Slide,Slide4];
  const[index,setIndex]=useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      if(index<=arr.length-1){
        setIndex(index+1);
      }else{
        setIndex(0);
      }
  
    },2000)
   
  },[index])

  return (
    <div className='whole'>
      <NavBar/>
        <div className='component1'>
            <img id='imgcomp' src='https://cdn.pixabay.com/photo/2020/03/26/21/08/park-4971822_1280.png'></img>
            <div className='heading'>HAPPINESS FOR YOUR LITTLE ONE</div>
            <div className='imgcomponent'>
                <img id='boy'  src={imagebackground}></img>


            </div>
            <div className='purchase'>
              
              <br></br>
                <Link to="/shop"><button id='purchasebutton' type='submit'>PURCHASE</button></Link>
            </div>
            <div className='downarrow'>
              <img src={down}></img>
            </div>
            <div className='ageclass'>
              <h1 id='ageheader'>SHOP NOW</h1>
              <p id='ptag'>WE  HAVE  PRODUCTS  FOR  ALL  AGES.  OUR  ASSISTANTS  ALWAYS  HELP  YOU  TO  DO  RIGHT  CHOICE.</p>
              </div>
        </div>
        <div className='cardss' style={{display:'flex',justifyContent:'space-evenly',marginTop:'30px'}}>
          <div >
            <img height={500} style={{borderRadius:'100px'}} src='https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/1-1.png'></img>
          </div>
          <div>
            <img height={500} style={{borderRadius:'100px'}} src='https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/2-1.png'></img>
          </div>
          {/* <img style={{width:'20%',borderRadius:'250px'}} src='https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/1-3-600x700.jpg'></img>  */}
        </div>
        {/* <div>
            <img src={arr[index]} id="slider" />
        </div> */}
        <div id='wholebrand'>

          <h1 id='ourbrand'>Our brands</h1>
        <div className='shopbybrand'>
          <div>
            <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1689163681sob.webp'></img>
          </div>
          <div>
            <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1658666245LEGO.webp'></img>
          </div>
          <div>
            <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1672213503WhatsApp_Image_2022-12-27_at_12.webp'></img>
          </div>
          <div>
            <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1672213649573X771_NERF.webp'></img>
          </div>
          <div>
            <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/16595218845.webp'></img>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
