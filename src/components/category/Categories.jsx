import React from 'react';
import groceryImage from './assets/grocery.png';
import mobilesImage from './assets/mobiles.png';
import fashionImage from './assets/fashion.png';
import laptopImage from './assets/laptop.png';
import "./Categories.css";

function Category() {
  return (
    <div className='category-card'>
      <div className='category-card-main'>
        <div className='cat-card' >
          <img src={groceryImage} alt="Grocery" className='cate-card-img'/>
          <p>Grocery</p>
        </div>
        <div className='cat-card' >
          <img src={mobilesImage} alt="Mobiles" className='cate-card-img'/>
          <p>Mobiles</p>
        </div>
        <div className='cat-card' >
          <img src={fashionImage} alt="Fashion" className='cate-card-img'/>
          <p>Fashion</p>
        </div>
        <div className='cat-card' >
          <img src={laptopImage} alt="Electronics" className='cate-card-img'/>
          <p>Electronics</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
