import React,{useState} from 'react'
import "./Filter.css"
import { ImMenu3 } from "react-icons/im";
import { Prev } from 'react-bootstrap/esm/PageItem';

function Filter() {
    const [filterclick,setFilterclick] = useState(false);

    return (
        <div className='filter'>
            <hr />
            
            <h4 className='filter-head' onClick={()=>{
                setFilterclick((event) => !event)
            }}><ImMenu3 className='filter-icon'/> &nbsp; &nbsp;Filter</h4>
            <hr />
            {filterclick ? (<div>
                <br />
                <br />
                <hr />
                <div className='filter-sec'>
                    <h6 className='filter-head2'>Price</h6>
                    <div className='filter-range-box'></div>
                    <input className='filter-range' type="range" name="" id="" />
                </div>
                <div className='round-filter'>
                    <div className='filter-round'></div>
                    <div className='filter-round'></div>
                    <div className='filter-round'></div>
                    <div className='filter-round'></div>
                    <div className='filter-round'></div>
                    <div className='filter-round'></div>
                    <div className='filter-round'></div>

                </div>
                <div className='price-range'>
                    <p>0</p>
                    <p>10000</p>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <hr />
                <div className='sortBy'>
                    <p>Price : Low To High</p>
                    <p>Price : Back To Normal</p>
                    <p>Price : High To Low</p>
                </div>

                <hr />
            </div>) : null }
            



        </div>
        
    )
}

export default Filter;