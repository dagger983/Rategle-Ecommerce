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
import Login from './components/login/Login';
import Register from './components/login/Register';
<<<<<<< HEAD
import Admin from './components/admin/Admin';
=======
>>>>>>> d689d1f2a52dbf955f9fea358eba07b107690024

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
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

    const showSearchResultsComponent = searchValue !== '';
    const isProductView = location.pathname.startsWith('/category');
    const isLoginPage = location.pathname === '/category/login';
    const isRegisterPage = location.pathname === '/category/register';

    return (
        <div>
            {!isLoginPage && !isRegisterPage && !isProductView && <Navbar onSearch={handleSearch} />}
            {!isLoginPage && !isRegisterPage && <Category />}
            <Routes>
                <Route path="/" element={
                    <>
                        {!showSearchResultsComponent && !isLoginPage && !isRegisterPage && (
                            <>
                                <CarouselFlipkart />
                                <BestDealsMobiles />
                                <Banners />
                            </>
                        )}
                        {showSearchResultsComponent && !isLoginPage && !isRegisterPage && (
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
                        {isLoginPage && <Login />}
                        {isRegisterPage && <Register />}
                    </>
                } />
                <Route path="/category/:id" element={<ProductView products={TotalProductsList} cartItems={cartItems} addToCart={addToCart} />} />
                <Route path="/category/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
                <Route path="/category/grocery" element={<Grocery />} />
                <Route path="/category/homeappliances" element={<HomeAppliances />} />
                <Route path="/category/fashion" element={<Fashion />} />
                <Route path="/category/electronics" element={<Electronics />} />
                <Route path="/category/register" element={<Register />} />
                <Route path="/category/login" element={<Login />} />
<<<<<<< HEAD
                <Route path="/admin" element={<Admin />} />
            </Routes>
         <Footer />
         
=======
            </Routes>
         <Footer />
>>>>>>> d689d1f2a52dbf955f9fea358eba07b107690024
        </div>
    );
}

export default App;
