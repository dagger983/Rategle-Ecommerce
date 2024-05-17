import React from 'react';
import { Link } from 'react-router-dom';
import "./searchResult.css";

function SearchResult({ searchValue, products, filter, onProductClick }) {
    // Convert searchValue to lowercase for case-insensitive comparison
    const searchValueLower = searchValue.toLowerCase();

    // Filter products based on searchValue and filter criteria
    const filteredProducts = products.filter(product =>
        (product.name.toLowerCase().includes(searchValueLower) ||
        product.category.toLowerCase().includes(searchValueLower)) &&
        parseInt(product.price.replace("₹ ", "").replace(",", "")) >= filter.priceRange[0] &&
        parseInt(product.price.replace("₹ ", "").replace(",", "")) <= filter.priceRange[1]
    );

    // If searchValue is empty, return a message
    if (!searchValue) {
        return <div className='searchResult'>Please provide a search value</div>;
    }

    // If no matching products found, return a message
    if (filteredProducts.length === 0) {
        return <div className='searchResult'>No results found for "{searchValue}"</div>;
    }

    return (
        <div className='searchResult'>
            <p className='result-text'>Results for: {searchValue} and Totally {filteredProducts.length} results</p>
            {filteredProducts.map(product => (
                <Link to={`/product/${product.id}`} key={product.id} className='search-product-link'>
                    <div className='search-product-card' onClick={() => onProductClick(product.id)}>
                        <img src={product.imageUrl} className='search-product-img' alt={product.name} />
                        <p className='search-product-name'>{product.name}</p>
                        <p className="search-product-price">Price: {product.price}</p>
                        <p className="search-product-details">View Details</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default SearchResult;
