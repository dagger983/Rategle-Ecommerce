import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./CartPage.css";

function CartPage({ removeFromCart }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState("0");

  useEffect(() => {
  
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {

    const sum = cartItems.reduce((total, item) => {
     
      const priceWithoutCurrency = parseFloat(item.price.replace(/[^\d.]/g, ''));
      return total + priceWithoutCurrency;
    }, 0);
    setTotalAmount(sum.toString());
  }, [cartItems]);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product); 
    const updatedCartItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className='cartPage'>
      <h1>Shopping Cart</h1>
      <p style={{ marginTop: '20px' }}>A shopping cart is a virtual basket or container within an online retail platform where users can add, view, and manage selected items for purchase before proceeding to checkout.</p>
      {cartItems.length === 0 ? (
        <p className='err-cart'>Your cart is empty. . .</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li className='cart-product-container' key={index}>
                <Link to={`/category/${item.id}`} key={item.id}>
                  <img src={item.imageUrl} alt={item.name} />
                </Link>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <p className='Total_amount'>Total Amount&nbsp;:&nbsp;  ₹ &nbsp;  {totalAmount}</p>
        </>
      )}
    </div>
  );
}

export default CartPage;
