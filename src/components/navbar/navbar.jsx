import React from 'react';
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiHomeSmileFill } from "react-icons/ri";
import SearchBar from '../searchbar/searchbar';
import "./navbar.css";

function Navbar({ onSearch }) {
  const pageReload = () =>{
      window.location.reload();
  }
  return (
    <div className='navbar-main'>
      <div className='navbar'>
        <Link to="/">
          <img src='https://res.cloudinary.com/dvp17drdy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1715850120/ratagle_logo_zsspn7.jpg' className='logo' alt="Logo" />
        </Link>
        <SearchBar onSearch={onSearch} />
        <div className="navbar-icons">
         <Link onClick={pageReload} style={{ textDecoration: 'none', color: 'inherit' }}><span>Home</span><RiHomeSmileFill className='cart-icon'/></Link>
          <Link to="/category/cart" className='cart'><span>Cart</span><IoCart className='cart-icon' /></Link>
          <Link to="/category/login" className='login'><span>Login</span><CgProfile className='login-icon' /></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
