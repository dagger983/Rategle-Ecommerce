// Filter.jsx
import React, { useState } from 'react';
import "./Filter.css";
import { ImMenu3 } from "react-icons/im";

function Filter({ onFilterChange }) {
    const [dropdown, setDropDown] = useState(false);

    const handleSort = (sortType) => {
        // Call the onFilterChange function with the selected sort type
        onFilterChange({ sortType });
    };

    return (
        <div className='filter'>
            <hr />
            <h4 className='filter-head'>
                Filter &nbsp;  <ImMenu3 className='filter-icon' onClick={() => {
                    setDropDown((prev) => !prev);
                }}/>
            </h4>
            <hr />
            {dropdown ? (
                <div>
                    <br />
                    <br />
                    <hr />
                    <div className='filter-sec'>
                        <button onClick={() => handleSort('lowToHigh')}>Price: Low to High</button>
                        <button onClick={() => handleSort('highToLow')}>Price: High to Low</button>
                        <button onClick={() => handleSort('random')}>Price: Random</button>
                    </div>
                    <br />
                    <br />
                    <hr />
                </div>
            ) : null }
        </div>
    );
}

export default Filter;
