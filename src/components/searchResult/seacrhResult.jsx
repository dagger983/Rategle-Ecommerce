import React from 'react';
import { Link } from 'react-router-dom';
import "./searchResult.css";
import TotalProductsList from '../../assets/TotalProductsList'; // Import the product list

function SearchResult({ searchValue, sortType }) {
    // Convert searchValue to lowercase for case-insensitive comparison

    const searchValueLower = searchValue.split(" ").join("").toLowerCase();

    // Filter products based on searchValue
    let filteredProducts = TotalProductsList.filter(product =>
        product.name.toLowerCase().includes(searchValueLower) ||
        product.category.toLowerCase().includes(searchValueLower)
    );

    // Sort products based on sortType
    switch (sortType) {
        case 'lowToHigh':
            filteredProducts.sort((a, b) => parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, "")));
            break;
        case 'highToLow':
            filteredProducts.sort((a, b) => parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.price.replace(/[^0-9.-]+/g, "")));
            break;
        case 'random':
            filteredProducts = shuffleArray(filteredProducts);
            break;
        default:
            break;
    }

    // If searchValue is empty, return a message
    if (!searchValue) {
        return <div className='searchResult'>Please provide a search value</div>;
    }

    // If no matching products found, return a message
    if (filteredProducts.length === 0) {
        return <div className='searchResult'>No results found for "{searchValue}"</div>;
    }

    // Render the filtered and sorted products
    return (
        <div className='searchResult'>
            <p className='result-text'>Results for: {searchValue} and Totally {filteredProducts.length} results</p>
            {filteredProducts.map(product => (
                <Link to={`/category/${product.id}`} key={product.id} className='search-product-link'>
                    <div className='search-product-card'>
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

// Function to shuffle array randomly
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export default SearchResult;
