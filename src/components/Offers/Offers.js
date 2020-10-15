import React from "react";
import { connect } from "react-redux";
import * as actionCreators from '../../store/actions/actions';

const Offers = (props) => {

  const toggleOffers = () => {
    const showOItem = !props.showOffers;
    props.toggleOffers(showOItem);
  };

  return (
    <div>
      <div className="row">
        <div className="column-75">
          <h4>
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={toggleOffers}
            >
              Show Offer Details {props.showOffers ? "-" : "+"}
            </span>
          </h4>
        </div>
        <div className="column-25"></div>
      </div>
      {props.showOffers
        ? props.offers.map((item) => {
            return (
              <div className="row">
                <div className="column-75">
                  <input type="checkbox" />
                  {item.offerName}
                </div>
                <div className="column-25">{item.price}</div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showOffers: state.showOffers,
    offers: state.offers,
  };
};
const mapDispatchToProps = dispatch =>{
  return{
    toggleOffers : showOffer => dispatch(actionCreators.toggleOffers(showOffer))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Offers);
