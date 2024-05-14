import React from 'react'
import "./Categories.css"
function Category() {
  return (
    <div className='category-card'>
      <div className='category-card-main'>
      <div className='cat-card' >
          <img src="./src/assets/grocery.png" alt="" className='cate-card-img'/>
          <p>Grocery</p>
      </div>
      <div  className='cat-card' >
          <img src="./src/assets/mobiles.png" alt="" className='cate-card-img'/>
          <p>Mobiles</p>
      </div>
      <div  className='cat-card' >
          <img src="./src/assets/fashion.png" alt="" className='cate-card-img'/>
          <p>Fashion</p>
      </div>
      <div  className='cat-card' >
          <img src="./src/assets/laptop.png" alt="" className='cate-card-img'/>
          <p>Electronics</p>
      </div>
  
    </div>

    </div>
    
  )
}

export default Category;