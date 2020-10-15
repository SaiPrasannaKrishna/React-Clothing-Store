import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./ProductCard.css";
import * as actionCreators from "../../store/actions/actions";

const ProductCard = (props) => {
  useEffect(() => {
    let cloneitems = [...props.items];
    let subTotal = 0;
    for (let i = 0; i < cloneitems.length; i++) {
      subTotal += cloneitems[i].price * cloneitems[i].quant;
    }
    let tax = Math.floor((subTotal * 1) / 100);
    props.setTotal(subTotal + tax);
  }, [props]);

  const showQuantity = (itemId) => {
    props.showQuantity(true);
    props.setItemForQuantity(itemId);
  };

  const removeItem = (itemId) => {
    let cloneitems = [...props.items].filter((x) => x.id !== itemId);
    props.refreshItem(cloneitems);
  };

  const product = props.items.map((product, index) => {
    return (
      <div className="product-container">
        <div className="product-card">
          <div className="row">
            <div className="column-25">
              <img style={{ width: "75%" }} src={product.url} />
            </div>
            <div className="column-75">
              <div className="product-info">
                <p>
                  <b>{product.name}</b>
                </p>
                <p>{product.desc}</p>
                <span className="seller">{product.seller}</span>
              </div>
              <div className="size-info">
                <p>
                  <b>SIZE</b>
                </p>
                <p>{product.size}</p>
                <p>
                  <b>Qty</b>
                </p>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    showQuantity(product.id);
                  }}
                >
                  {product.quant}&nbsp;
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </p>
              </div>
              <div className="price-info">
                <b>&#x20b9; {product.price}/-</b>
              </div>
            </div>
          </div>
        </div>
        <div className="product-footer">
          <div
            onClick={() => {
              removeItem(product.id);
            }}
          >
            REMOVE
          </div>
          <div className="wishlist">MOVE TO WISH LIST</div>
        </div>
      </div>
    );
  });

  const noData = (
    <div className="no-data">
      <img src="https://cdn.metorik.com/assets/blog-posts/empty-cart-1572317053.png" style={{width:'100%'}} />
      <b>Your Cart is Empty</b>
    </div>
  );

  return props.items.length > 0 ? product : noData;
};
const mapStateToProps = (state) => {
  return {
    items: state.items,
    showQuant: state.showQuant,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showQuantity: (showQuant) =>
      dispatch(actionCreators.showQuantity(showQuant)),
    setItemForQuantity: (itemId) =>
      dispatch(actionCreators.setItemForQuantity(itemId)),
    refreshItem: (clonedItems) =>
      dispatch(actionCreators.refreshItem(clonedItems)),
    setTotal: (total) => dispatch(actionCreators.setTotal(total)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
