import React from 'react';
import './Admin.css';

const AddProduct = ({ isBlurred }) => {
    return (
        <div className={`admin-form ${isBlurred ? '' : 'blurred'}`}>
            <h2 style={{ textAlign: 'center' }}>To Add a New Product</h2>
            <input type="text" placeholder='Enter the Product Name (eg : HP LAPTOP)' />
            <input type="text" placeholder='Enter the Product Price (eg : ₹ 104,999)' />
            <input type="text" placeholder='Enter the Product ImageUrl (eg : https://sampleimage.jpg)' />
            <input type="text" placeholder='Enter the Product Description  (eg : Experience immersive gaming with the HP Victus Gaming Laptop)' />
            <input type="text" placeholder='Enter the Product Description  (eg : Featuring a powerful Intel Core i7 processor)' />
            <input type="text" placeholder='Enter the Product Description (eg : NVIDIA GeForce RTX 4060 graphics)' />
            <input type="text" placeholder='Enter the Product Description  (eg : 16GB DDR4 RAM and 512GB SSD storage)' />
            <select>
                <option selected disabled >Category</option>
                <option value="Grocery">Grocery</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Fashion">Fashion</option>
                <option value="Electronics">Electronics</option>
            </select>
            <button className='product-btn' style={{ color: 'white' }}>Save</button>
        </div>
    );
}

export default AddProduct;
