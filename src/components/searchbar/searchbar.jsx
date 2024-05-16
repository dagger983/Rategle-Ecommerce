import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import "./searchbar.css";

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the searchValue to the parent component via onSearch prop
    onSearch(searchValue);
  };

  return (
    <div>
      <form className='searchbar-container' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for Products . . ."
          className='searchBar'
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit" className='searchBtn'><IoSearch className='icon' /></button>
      </form>
    </div>
  );
}

export default SearchBar;
