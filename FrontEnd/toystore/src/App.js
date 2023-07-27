import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

// import ResetPasswordPage from './Home/Resetpwd';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Search from './Search/Search';
import NavBar from './Home/NavBar';


import "./App.css"
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
// import Contact from './Assests/Contact/Contact';
// import Cart from './Cart';

export const UserContext=createContext();

const App = () => {
  const[search,setSearch]=useState();
  return (
  <UserContext.Provider value={[search,setSearch]}>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        {/* <Route path="/reset-password" element={<ResetPasswordPage />} /> */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop" element={<NavBar />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/:search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </UserContext.Provider>
  );
};

export default App;
