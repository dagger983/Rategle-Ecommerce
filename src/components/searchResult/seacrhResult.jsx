import React from 'react';
import "./searchResult.css";
import TotalProductsList from "../../assets/TotalProductsList"; 

function SearchResult({ searchValue }) {
    // Check if searchValue is undefined or null
    if (!searchValue) {
        return <div className='searchResult'>Please provide a search value</div>;
    }

    // Check if the search value is contained in any product name
    const nameFilteredProducts = TotalProductsList.filter(product =>
        product.name.toLowerCase().includes(searchValue.toLowerCase()) 
    );

    // Check if the search value is contained in any product category
    const categoryFilteredProducts = TotalProductsList.filter(product =>
        product.category.toLowerCase().includes(searchValue.toLowerCase()) 
    );

    // Combine both filtered arrays
    const matchingProducts = [...nameFilteredProducts, ...categoryFilteredProducts];

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
