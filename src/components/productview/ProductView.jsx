import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./ProductView.css";
import TotalProductsList from "../../assets/TotalProductsList"; // Import the product list

function ProductView({ addToCart, cartItems }) {
  const { id } = useParams();
  const product = TotalProductsList.find(product => product.id === parseInt(id));
  let similarProducts = TotalProductsList.filter(item => item.category === product.category && item.id !== product.id);

  const [addedToCartMap, setAddedToCartMap] = useState({});

  const handleAddToCart = (productId) => {
    if (!cartItems.some(item => item.id === productId)) {
      addToCart(TotalProductsList.find(item => item.id === productId)); 
      setAddedToCartMap(prevState => ({ ...prevState, [productId]: true }));
    }
  };

  if (!product) {
    return (
      <div className='ProductViewMain'>
        <h4 className='ProductViewHead'>Product Not Found</h4>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  similarProducts = similarProducts.slice(0, 4);

  return (
    <div className='ProductViewMain'>
      <Link to="/">
        <img src="https://res.cloudinary.com/dvp17drdy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1715850120/ratagle_logo_zsspn7.jpg" alt="" className='productView-logo' />
      </Link>
      <h4 className='ProductViewHead'>Product-Category &nbsp; &gt;  &nbsp; {product.category} &nbsp; &gt;  &nbsp; {product.name}</h4>
      <div className='ProductView'>
        <Carousel showArrows={true} showThumbs={false}>
          <img src={product.imageUrl} alt={product.name} className="ProductViewImg" />
        </Carousel>
        <div className="product-description">
          <h1>{product.name}</h1>
          <h2>Price: {product.price}</h2>
          <h3>Highlights</h3>
          <ul>
            {product.description.split(',').map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
          <div className='product-btn-main'>
            {!cartItems.some(item => item.id === product.id) && !addedToCartMap[product.id] ? (
              <button className='product-btn' onClick={() => handleAddToCart(product.id)}>Add To Cart</button>
            ) : (
              <button className='product-btn added-to-cart'>Added to Cart</button>
            )}
            <button className='product-btn2'>Buy Now</button>
          </div>
        </div>
      </div>
      {similarProducts.length > 0 && (
        <div className="similar-products">
          <h3>Similar Products</h3>
          <div className="similar-products-container">
            {similarProducts.map((item) => (
              <Link to={`/category/${item.id}`} key={item.id}>
                <div className="similar-product-card">
                  <img src={item.imageUrl} className='similar-img' alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>Price: {item.price}</p>
                 
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductView;
