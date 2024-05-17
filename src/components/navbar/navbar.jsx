import React from 'react';
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import SearchBar from '../searchbar/searchbar';
import "./navbar.css";

function Navbar({ onSearch }) {
  return (
    <div className='navbar-main'>
      <div className='navbar'>
        <Link to="/">
          <img src='https://res.cloudinary.com/dvp17drdy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1715850120/ratagle_logo_zsspn7.jpg' className='logo' alt="Logo" />
        </Link>
        <SearchBar onSearch={onSearch} />
        <div className="navbar-icons">
          {/* Link to CartPage when cart icon is clicked */}
          <Link to="/cart" className='cart'><IoCart className='cart-icon' /></Link>
          <p className='login'>Login &nbsp;<CgProfile className='login-icon' /></p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
