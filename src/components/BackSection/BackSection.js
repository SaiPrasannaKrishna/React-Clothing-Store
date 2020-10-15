import React from 'react';
import './BackSection.css';

const BackSection = ()=>{
    return(
        <div className="back-section">
            <div className="left-section">
            <i class="fa  fa-long-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;
                <b>SHOPPING BAG</b>
            </div>
            <div className="right-section">
                <button className="wish-list">WISHLIST</button>
            </div>
        </div>
    )
}

export default BackSection;