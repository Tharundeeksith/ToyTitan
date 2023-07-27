import React, { useContext,useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { UserContext } from '../App';
// import Dup from './Dup';
// import LoginPage from './Login';
import LoginDialog from './LoginDialog';
import './NavBar.css'
// import SignupPage from './Signup';

export default function NavBar() {
    const[search,setSearch]=useContext(UserContext);
    const[trigger,setTrigger]=useState(false);
    const[trigger1,setTrigger1]=useState(false);

    const navigate=useNavigate(); 
    const handleSearch=(()=>{
    navigate("/shop/"+search);
  })

  return (
    <div>
        <div className='nav'>
        <img src='https://images-platform.99static.com/lQHR0x--oITG--_UBtfwZoHrQVg=/2x0:1008x1006/500x500/top/smart/99designs-contests-attachments/120/120988/attachment_120988766'></img>
        <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/shop">Shop</Link>
    </li>
    <li>
      <Link to="/cart">Cart</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li id='btnsearch1'>
    <input type="text" placeholder="Search Here !" name="search" id="search-container1" onChange={(e)=>{setSearch(e.target.value)}} onk/>
    <button id='btnsearch' onClick={handleSearch}>🔍</button>
    </li>
    <li id='loginbutton'>
      <LoginDialog/>

     
       
    </li>
        </div>
        {/* <h2>🙍🏻‍♂️</h2> */}
        
      
    </div>
  )
}
