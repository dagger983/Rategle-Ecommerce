import React from 'react';
import "./navbar.css";
import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import SearchBar from '../searchbar/searchbar';

function Navbar({ onSearch }) {
  const handleChange = (event) => {
    let value = event.target.value;
    onSearch(value);
  };
  const pageReload = () => {
    location.reload();
  }

  return (
    <div className='navbar-main'>
      <div className='navbar'>
        <img onClick={pageReload} src='https://res.cloudinary.com/dvp17drdy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1715850120/ratagle_logo_zsspn7.jpg' className='logo'/>
        <SearchBar onSearch={onSearch} onChange={handleChange} />
       
          <p className='cart'>Cart &nbsp;<IoCart className='cart-icon' /></p>
          <p className='login'>Login &nbsp;<CgProfile className='login-icon' /></p>
        
      </div>
    </div>
  );
}

export default Navbar;
