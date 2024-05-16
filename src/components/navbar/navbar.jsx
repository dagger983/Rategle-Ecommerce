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

  return (
    <div className='navbar-main'>
      <div className='navbar'>
        <h1 className='logo'>Logo</h1>
        <SearchBar onSearch={onSearch} onChange={handleChange} />
       
          <p className='cart'><IoCart className='cart-icon' /></p>
          <p className='login'><CgProfile className='login-icon' /></p>
        
      </div>
    </div>
  );
}

export default Navbar;
