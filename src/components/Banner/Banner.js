import React from 'react';
import './Banner.css';

const Banner = ()=>{
    return(
        <div className="banner-card">
            <span className="banner-item">
                <i class="fa fa-truck" style={{color:'#02a787'}} aria-hidden="true"></i>
                <span>Yay! <span className="special">Free Delivery</span> on this order</span>
            </span>
        </div>
    )
}

export default Banner;