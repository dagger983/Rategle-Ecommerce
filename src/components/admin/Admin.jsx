import React, { useState } from 'react';
import './Admin.css';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import AddProduct from '../admin/AddProduct';

const Admin = () => {
    const yearforcopy = new Date().getFullYear();
    const [showForm, setShowForm] = useState(false);
    const [isBlurred, setIsBlurred] = useState(true);

    const toggleForm = () => {
        setShowForm(!showForm);
        setIsBlurred(showForm); // Set isBlurred to the opposite value of showForm
    };

    return (
        <div className='admin'>
            <div className={`sidebar ${showForm ? 'sidebar-left' : 'sidebar-right'}`}>
                <h1 style={{ padding: '20px', fontSize: '25px' }}>
                    <BiMenuAltLeft className='admin-icon' onClick={toggleForm} />&nbsp; &nbsp; 
                    {showForm && (<span>Admin Dashboard</span>)}
                </h1>
                {showForm && (
                    <div className='sidebar2'>
                        <h3>Add a New Product</h3>
                        <h3>Product List</h3>
                        <h3>Update the Product</h3>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h3>My Site</h3></Link>
                    </div>
                )}
                {showForm && (
                    <div className='copyright'>
                        <p>© {yearforcopy} &#160; Rategle Technologies <br /> All rights reserved&#160; |&#160; Designed and Developed by Rategle Technologies&#160; </p>
                    </div>
                )}
            </div>
            <AddProduct isBlurred={isBlurred} />
        </div>
    );
}

export default Admin;
