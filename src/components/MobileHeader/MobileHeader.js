import React from 'react';
import './MobileHeader.css';

const MobileHeader = ()=>{
    return(
    <header className="mobile-header">
        <div className="mobile-icons">
            <i class="fa fa-wifi" aria-hidden="true"></i>
            <i class="fa fa-signal" aria-hidden="true"></i>
            <i class="fa fa-battery-half" aria-hidden="true"></i>
        </div>
    </header>
    );
}

export default MobileHeader;