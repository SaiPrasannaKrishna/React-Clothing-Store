import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";

const CartProduct = (props) => {

  useEffect(()=>{
      computeTotals(props.items);
  },[]);

  const toggleItems = () => {
    const showItem = !props.showItems;
    props.toggleItems(showItem);
  };

  const removeItem = (item) => {
      let cloneitems = [...props.items].filter((x) => x.id !== item.id);
      computeTotals(cloneitems);
      props.refreshItem(cloneitems);
  };

  const computeTotals = (cloneitems)=>{
    let subTotal = Object.values(cloneitems).reduce(
      (t, { price }) => t + price,
      0
    );
    props.setSubTotal(subTotal);
    props.refreshTotal(subTotal + props.savings + props.taxes);
  }

  return (
    <div>
      <div className="row">
        <div className="column-75">
          <h4>
            <a
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={toggleItems}
            >
              Show Item Details {props.showItems ? "-" : "+"}
            </a>
          </h4>
        </div>
        <div className="column-25"></div>
      </div>
      {props.showItems
        ? props.items.map((item) => {
            return (
              <div className="row">
                <div className="column-75">
                  <img
                    src={item.url}
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div className="column-25">
                  {item.name} <b>{item.price}</b>
                </div>
                <div className="column-25">
                  &nbsp;
                  <button onClick={() => {removeItem(item)}}>delete</button>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    showItems: state.showItems,
    taxes:state.taxes,
    savings:state.savings
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleItems: (showItem) => dispatch(actionCreators.toggleItems(showItem)),
    refreshItem: (items)=> dispatch(actionCreators.refreshItem(items)),
    setSubTotal: (subTotal)=> dispatch(actionCreators.setSubTotal(subTotal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
