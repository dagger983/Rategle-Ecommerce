import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Category from './components/category/Categories';
import SearchResult from "./components/searchResult/seacrhResult";
import ProductView from './components/productview/ProductView';
import TotalProductsList from './assets/TotalProductsList';
import CarouselFlipkart from './components/carousel/carousel';
import BestDealsMobiles from "./components/bestdeals_mobiles/bestdealsmobiles";
import Banners from './components/banners/banners';
import Filter from "./components/filter/Filter";
import Footer from './components/footer/footer';
import CartPage from './components/cartPage/CartPage';
import Grocery from './components/category/grocery/grocery';
import HomeAppliances from './components/category/home_appliances/home_appliances';
import Fashion from './components/category/fashion/fashion';
import Electronics from './components/category/electronics/electronics';
function App() {
    const [searchValue, setSearchValue] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [filter, setFilter] = useState({ priceRange: [0, 10000], sortType: '' });
    const [cartItems, setCartItems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        // Retrieve cart items from localStorage when the component mounts
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    useEffect(() => {
        // Save cart items to localStorage whenever it changes
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

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

    const addToCart = (product) => {
       
        const isProductInCart = cartItems.some(item => item.id === product.id);
        
        if (!isProductInCart) {
            setCartItems([...cartItems, product]);
       
            alert(`${product.name} added to cart!`);
        } else {
           
            console.log("Product is already in the cart!");
        }
    };

    const removeFromCart = (productToRemove) => {
        setCartItems(cartItems.filter(item => item.id !== productToRemove.id));
    };

    const showNavbarAndCategory = !location.pathname.startsWith("/product");

    return (
        <div>
            {showNavbarAndCategory && <Navbar onSearch={handleSearch} />}
            {showNavbarAndCategory && <Category />} 
            <Routes>
                <Route path="/" element={
                    <>
                        {!showSearchResults ? (
                            <>
                                <CarouselFlipkart />
                                <BestDealsMobiles />
                                <Banners />
                            </>
                        ) : (
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
                        )}
                    </>
                } />
                <Route path="/category/:id" element={<ProductView products={TotalProductsList} cartItems={cartItems} addToCart={addToCart} />} />
                <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
                <Route path="/category/grocery" element={<Grocery/>} />
                <Route path="/category/homeappliances" element={<HomeAppliances/>} />
                <Route path="/category/fashion" element={<Fashion/>} />
                <Route path="/category/electronics" element={<Electronics/>} />
                
            </Routes>
            {showNavbarAndCategory && <Footer />}
        </div>
    );
}

export default App;
