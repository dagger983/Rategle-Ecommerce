import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Category from './components/category/Categories';
import SearchResult from "./components/searchResult/seacrhResult";
import ProductView from './components/productview/ProductView';
import TotalProductsList from './assets/TotalProductsList'; // Import the product list
import CarouselFlipkart from './components/carousel/carousel';
import BestDealsMobiles from './components/bestdeals(mobiles)/bestdealsmobiles';
import Banners from './components/banners/banners';
import Filter from "./components/filter/Filter";
import Footer from './components/footer/footer';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (value) => {
    setSearchValue(value);
    setShowSearchResults(true);
    setSelectedProduct(null); // Reset selected product when performing a new search
  };

  const handleProductClick = (productId) => {
    // Find the selected product from the product list
    const product = TotalProductsList.find(product => product.id === productId);
    setSelectedProduct(product);
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
                <Filter />
                <SearchResult searchValue={searchValue} products={TotalProductsList} onProductClick={handleProductClick} />
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
