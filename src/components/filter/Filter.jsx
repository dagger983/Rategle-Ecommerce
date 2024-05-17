import React, { useState, useEffect } from 'react';
import "./Filter.css";
import TotalProductsList from '../../assets/TotalProductsList'; // Import the product list
import { ImMenu3 } from "react-icons/im";
import { set } from '@cloudinary/url-gen/actions/variable';
function Filter({ onFilterChange }) {
    const [priceRange, setPriceRange] = useState([0, 10000]); // Initial price range with default maximum value

    const [dropdown,setDropDown] = useState(false)

    useEffect(() => {
        console.log("TotalProductsList:", TotalProductsList); // Check TotalProductsList
        if (TotalProductsList && TotalProductsList.length > 0) {
            const maxPrice = Math.max(...TotalProductsList.map(product => parseInt(product.price.replace("₹ ", "").replace(",", ""))));
            console.log("Max Price:", maxPrice); // Log max price
            setPriceRange([0, maxPrice]);
        } else {
            // Set default maximum value if TotalProductsList is empty
            setPriceRange([0, 10000]);
        }
    }, []);

    const handlePriceRangeChange = (event) => {
        const newPriceRange = [+event.target.value, priceRange[1]]; // Keep the max price unchanged
        console.log("New Price Range:", newPriceRange); // Log new price range
        setPriceRange(newPriceRange);
        onFilterChange({ priceRange: newPriceRange });
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
            {dropdown ? (<div>
                <br />
                <br />
                <hr />
                <div className='filter-sec'>
                    <h6 className='filter-head2'>Price</h6>
                    <div className='filter-range-box'></div>
                    <input 
                        className='filter-range' 
                        type="range" 
                        min={0} 
                        max={priceRange[1]} 
                        step={100} 
                        value={priceRange[0]} // Add value attribute to display current value
                        onChange={handlePriceRangeChange} 
                    />
                </div>
                <div className='price-range'>
                    <p>{priceRange[0]}</p>
                    <p>{priceRange[1]}</p>
                </div>
                <br />
                <br />
                <hr />
            </div>) : null }
            
        </div>
    );
}

export default Filter;
