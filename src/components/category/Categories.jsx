import React from 'react';
import groceryImage from '../../assets/grocery.png';
import mobilesImage from '../../assets/mobiles.png';
import fashionImage from '../../assets/fashion.png';
import laptopImage from '../../assets/laptop.png';
import "./Categories.css";
import { Link } from 'react-router-dom';
function Category() {
  return (
    <div className='category-card'>
      <div className='category-card-main'>
        <Link to="/category/grocery" style={{ textDecoration: 'none', color: 'inherit' }}><div className='cat-card' >
          <img src={groceryImage} alt="Grocery" className='cate-card-img'/>
          <p>Grocery</p>
        </div>
        </Link>
        <Link to="/category/homeappliances" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='cat-card' >
          <img src={mobilesImage} alt="Mobiles" className='cate-card-img'/>
          <p>Home Appliances </p>
        </div>
        </Link>

        <Link to="/category/fashion" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='cat-card' >
          <img src={fashionImage} alt="Fashion" className='cate-card-img'/>
          <p>Fashion</p>
        </div>
        </Link>
       
        <Link to="/category/electronics" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='cat-card' >
          <img src={laptopImage} alt="Electronics" className='cate-card-img'/>
          <p>Electronics</p>
        </div>
       </Link> 
      </div>
    </div>
  );
}

export default Category;
