import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Route, Link, withRouter } from "react-router-dom";
import ShippersImg from "../../../pictures/shippers.jpg";
class HowItWorks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="howItWorks">
        <div className="howItWorks-text">
          <div className="text-h1">
            <h1>SHIPPERS, MEET CARRIERS.</h1>
            <h1> CARRIERS, MEET SHIPPERS.</h1>
          </div>
          <div className="text-h1">
            <h1>
              We make shipping big stuff cheap and easy by helping customers
              directly connect with providers who have extra truck space.
            </h1>
          </div>
          <div className="btn">
            <Link to="/ship">
              <button className="btn-1">Get Free Estimate</button>
            </Link>
            <Link to="/join">
              <button className="btn-2"> Become a Carrier</button>
            </Link>
            <Link to="/ship">
              <button className="btn-3"> Become a Shipper</button>
            </Link>
          </div>
        </div>

        <div className="howItWorks-img">
          <img src={ShippersImg} />
        </div>
      </div>
    );
  }
}

export default HowItWorks;
