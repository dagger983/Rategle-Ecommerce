import React from 'react';
import TotalProductsList from "../../../assets/TotalProductsList";
import "../../category/category-display.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function HomeAppliances() {
    const filterProductsByCategory = (category) => {
        return TotalProductsList.filter(product => product.category === category);
    };

    const HomeAppliancesProducts = filterProductsByCategory("HomeAppliances");
   

    return (
        <div>
            <div className='category-content'>
                <h2>{HomeAppliancesProducts[0].category} </h2>
                {HomeAppliancesProducts.map(product => (
                    <Link to={`/category/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className='category-content-card'>
                            <img className='category-content-img' src={product.imageUrl} alt="" />
                            <h3>{product.name}</h3>
                            <h4>{product.price}</h4>
                            <h5>View Details</h5>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HomeAppliances;
