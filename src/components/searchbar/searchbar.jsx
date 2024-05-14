import React from 'react'
import { IoSearch } from "react-icons/io5";
import "./searchbar.css"
function SearchBar() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search for Products, Brands and More"

        className='searchBar'
      />
      <button type="submit" className='searchBtn'><IoSearch className='icon' />
      </button>
    </form>
  )
}

export default SearchBar