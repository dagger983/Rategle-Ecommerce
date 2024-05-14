import React from 'react'
import BannerImg from "./banner"
import "./banner.css"
function Banners() {
    return (
        <div className='BannerSec'>
            <div className='banners'>
                {BannerImg.map(bannersrc => (
                    <img className='banner-img' src={bannersrc.imageSrc} alt="" />
                ))}
            </div>
        </div>

    )
}

export default Banners