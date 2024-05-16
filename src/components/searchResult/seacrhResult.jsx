import React from 'react';
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
                <div className='search-product-card' key={product.id}>
                    <img src={product.imageUrl} className='search-product-img' alt={product.name} />
                    <p>{product.name}</p>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default SearchResult;
