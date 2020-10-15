import React from 'react';
import { connect } from 'react-redux';
import './Footer.css';

const Footer = (props)=>{
    return(
        props.total ? <footer className="price-summary">
            <b><span>&#x20b9; {props.total}/-</span></b>
            <button>PLACE ORDER</button>
        </footer>:''
    )
}

const mapStateToProps = state =>{
    return{
        items:state.items,
        tax:state.tax,
        discount:state.discount,
        total:state.total
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);