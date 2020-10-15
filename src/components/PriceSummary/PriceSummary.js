import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../../common/card";

const PriceSummary = (props) => {
  return (
    <div>
        <Card title="SubTotal" value={props.subTotal} />
        <Card title="Pickup Savings" value={props.savings} />
        <Card title="Est. taxes and fees" value={props.taxes} />
        <hr />
        <Card title="Est. Total" value={props.total} />
    </div>
  );
};

const mapStateToProps = state=>{
    return{
        subTotal:state.subTotal,
        savings:state.savings,
        taxes:state.taxes,
    }
}

export default connect(mapStateToProps)(PriceSummary);
