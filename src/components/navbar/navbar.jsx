import React from 'react';
import "./navbar.css";
import { IoCart, IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import SearchBar from '../searchbar/searchbar';

function Navbar() {
  return (
    <div className='navbar-main'>
      <div className='navbar'>
        <img src='https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718549/flipkart-logo_thsshh.png' alt='logo' className='logo' />
        <SearchBar />
        <p className='cart'>Cart <IoCart className='nav-icon' /></p>
        <p className='login'>Login <CgProfile className='nav-icon' /></p>
      </div>
      <div className='navbar-search'>
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className='searchBar2'
        />
        <button type="submit" className='searchBtn2'><IoSearch className='icon' /></button>
      </div>
    </div>
  );
}

export default Navbar;
