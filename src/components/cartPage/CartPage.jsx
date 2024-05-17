import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./CartPage.css"

function CartPage({ removeFromCart }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage when the component mounts
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product); // Call the removeFromCart function passed as prop
    // Update cart items in state and localStorage after removing item
    setCartItems(cartItems.filter(item => item.id !== product.id));
    localStorage.setItem('cartItems', JSON.stringify(cartItems.filter(item => item.id !== product.id)));
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li className='cart-product-container' key={index}>
              <Link to={`/product/${item.id}`} key={item.id}>
                <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                <p>{item.name} - {item.price} </p>
              </Link>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
