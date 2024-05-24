import React from 'react'
import "./Admin.css"
const Admin = () => {
    return (
        <div className='admin'>
            <h1>Admin Dashboard</h1>
            <div className='admin-form'>
                <h2>To Add a New Product</h2>
                <input type="text" placeholder='Enter the Product Name' />
                <input type="text" placeholder='Enter the Product Price' />
                <input type="text" placeholder='Enter the Product ImageUrl' />
                <select>
                    <option value="Grocery">Grocery</option>
                    <option value="Home Appliances">Home Appliances</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Electronics">Electronics</option>
                </select>
                <button className='product-btn' style={{color:"white"}}>Save</button>
            </div>
        </div>
    )
}

export default Admin