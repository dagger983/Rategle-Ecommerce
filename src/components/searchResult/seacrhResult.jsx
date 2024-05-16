import React from 'react';
import { Link } from 'react-router-dom';
import "./searchResult.css";
import TotalProductsList from "../../assets/TotalProductsList"; 

function SearchResult({ searchValue }) {
    // Check if searchValue is undefined or null
    if (!searchValue) {
        return <div className='searchResult'>Please provide a search value</div>;
    }

    // Convert searchValue to lowercase for case-insensitive comparison
    const searchValueLower = searchValue.toLowerCase();

    // Filter products based on searchValue
    const matchingProducts = TotalProductsList.filter(product =>
        product.name.toLowerCase().includes(searchValueLower) || 
        product.category.toLowerCase().includes(searchValueLower)
    );

    if (matchingProducts.length === 0) {
        return <div className='searchResult'>No results found for "{searchValue}"</div>;
    }

    return (
        <div className='searchResult'>
            <p className='result-text'>Results for: {searchValue} and Totally {matchingProducts.length} results</p>
            {matchingProducts.map(product => (
                <Link to={`/product/${product.id}`} key={product.id} className='search-product-link'>
                    <div className='search-product-card'>
                        <img src={product.imageUrl} className='search-product-img' alt={product.name} />
                        <p className='search-product-name'>{product.name}</p>
                        <p className="search-product-price">Price: {product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default SearchResult;
