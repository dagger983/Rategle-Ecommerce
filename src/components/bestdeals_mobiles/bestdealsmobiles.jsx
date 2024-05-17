import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./bestdealsmobiles.css";
import products from "./products";
import responsive from "./responsive";
import { Link } from 'react-router-dom';
const BestDealsMobiles = () => {
    return (
        <div className='bestdeals'>
            <h1>Best Deals on Smart Phones</h1>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="carousel-item"
                className='bestdeals'
                arrows={true}
            >

                {products.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id} className='search-product-link'>
                    <div className='carousel-card' key={product.id}>
                        <img src={product.imageUrl} className="bestdeal-img" alt={product.name} /> <br />
                        <h3>{product.name}</h3> <br />
                        <p>Price : {product.price}</p>
                    </div>
                    </Link>
                ))}
            </Carousel>
        </div>

    );
};

export default BestDealsMobiles;
