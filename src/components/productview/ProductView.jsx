import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./ProductView.css";
import TotalProductsList from "../../assets/TotalProductsList"; // Import the product list

function ProductView() {
  // Retrieve the product ID from the URL
  const { id } = useParams();

  // Find the product with the matching ID
  const product = TotalProductsList.find(product => product.id === parseInt(id));

  // If product not found, display a message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='ProductViewMain'>
      <h4 className='ProductViewHead'>Product-Category : {product.category}</h4>
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
    </div>
  );
}

export default ProductView;
