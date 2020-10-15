import React from "react";
import { connect } from "react-redux";
import "./Modal.css";
import * as actionCreators from "../../store/actions/actions";


const Modal = (props) => {
  const closeModal = ()=>{
    props.showQuantity(false)
  }
  const selectQuantity = (quantity)=>{
    const clonedItems = [...props.items];
    clonedItems.forEach((clonedItem)=>{
      if(clonedItem.id === props.selectedItemIdQuanity){
          clonedItem.quant = quantity;
      }
    });
    if(clonedItems){
      props.refreshItem(clonedItems);
    }
  }
  return (
    <div className="modal-container">
      <div className="modal-header">
        <span>Select a quantity</span>
        <span style={{float:'right'}} onClick={closeModal}>X</span>
      </div>
      <div className="modal">
        {props.quantities.map((quantity, index) => {
          return <span className="modal-item" onClick={()=>{selectQuantity(quantity)}}>{quantity}</span>;
        })}
      </div>
      <div className="modal-footer">
          <center><button className="done" onClick={closeModal}>DONE</button></center>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quantities: state.quantities,
    selectedItemIdQuanity:state.selectedItemIdQuanity,
    items:state.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showQuantity : showQuantity => dispatch(actionCreators.showQuantity(showQuantity)),
    refreshItem : clonedItems => dispatch(actionCreators.refreshItem(clonedItems))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
