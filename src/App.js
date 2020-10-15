import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import BackSection from "./components/BackSection/BackSection";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import Modal from "./components/Modal/Modal";
import ProductCard from "./components/ProductCard/ProductCard";

function App({ showQuant }) {
  return (
    <div className="container">
      <div className="project-card" >
        <div style={{filter:showQuant? 'brightness(0.5)':'initial'}}>
          <MobileHeader />
          <BackSection />
          <Banner />
          <div className="subsection">
            <ProductCard />
          </div>
          {!showQuant ? <Footer /> : null}
        </div>
        {showQuant ? <Modal /> : null}
      </div>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    showQuant: state.showQuant,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
