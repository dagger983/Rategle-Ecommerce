import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Category from './components/category/Categories';
import SearchResult from "./components/searchResult/seacrhResult";
import ProductView from './components/productview/ProductView';
import TotalProductsList from './assets/TotalProductsList'; 
import CarouselFlipkart from './components/carousel/carousel';
import BestDealsMobiles from './components/bestdeals(mobiles)/bestdealsmobiles';
import Banners from './components/banners/banners';
import Filter from "./components/filter/Filter";
import Footer from './components/footer/footer';

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [filter, setFilter] = useState({ priceRange: [0, 10000], sortType: '' }); 

    const handleSearch = (value) => {
        setSearchValue(value);
        setShowSearchResults(true);
        setSelectedProduct(null); 
        setFilter(prevFilter => ({ ...prevFilter, sortType: '' }));
    };

    const handleProductClick = (productId) => {
       
        const product = TotalProductsList.find(product => product.id === productId);
        setSelectedProduct(product);
    };

    const handleFilterChange = (newFilter) => {
        setFilter({ ...filter, ...newFilter });
    };

    return (
        <div>
            <Navbar onSearch={handleSearch} />
            <Category />
            <Routes>
                <Route path="/" element={
                    <>
                        {showSearchResults ? (
                            <>
                                <Filter onFilterChange={handleFilterChange} />
                                <SearchResult 
                                    searchValue={searchValue} 
                                    sortType={filter.sortType} 
                                    products={TotalProductsList} 
                                    filter={filter} 
                                    onProductClick={handleProductClick} 
                                />
                            </>
                        ) : (
                            <>
                                <CarouselFlipkart />
                                <BestDealsMobiles />
                                <Banners />
                            </>
                        )}
                    </>
                } />
                <Route path="/product/:id" element={<ProductView products={TotalProductsList} />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
