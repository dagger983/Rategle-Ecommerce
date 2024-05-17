import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./ProductView.css";
import TotalProductsList from "../../assets/TotalProductsList"; // Import the product list

function ProductView() {
  const { id } = useParams();
  const product = TotalProductsList.find(product => product.id === parseInt(id));
  let similarProducts = TotalProductsList.filter(item => item.category === product.category && item.id !== product.id);

  if (!product) {
    // Add more informative error handling
    return (
      <div className='ProductViewMain'>
        <h4 className='ProductViewHead'>Product Not Found</h4>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  // Limit the similarProducts array to only show up to 4 products
  similarProducts = similarProducts.slice(0, 4);

  return (
    <div className='ProductViewMain'>
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
          <button className='product-btn'>Add To Cart</button>
          <button className='product-btn2'>Buy Now</button>
        </div>
      </div>
      {similarProducts.length > 0 && (
        <div className="similar-products">
          <h3>Similar Products</h3>
          <div className="similar-products-container">
            {similarProducts.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div className="similar-product-card">
                  <img src={item.imageUrl} className='similar-img' alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>Price: {item.price}</p>
                  <p>View Details</p>
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
