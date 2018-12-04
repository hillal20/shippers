import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import ShippersImg from "../../../pictures/shippers.jpg";
class HowItWorks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="howItWorks">
        <div className="howItWorks-text">
          <div>
            <h1>SHIPPERS, MEET CARRIERS.</h1>
            <h1> CARRIERS, MEET SHIPPERS.</h1>
          </div>
          <div>
            <h1>
              We make shipping big stuff cheap and easy by helping customers
              directly connect with providers who have extra truck space.
            </h1>
          </div>
        </div>

        <div>
          <img src={ShippersImg} />
        </div>
      </div>
    );
  }
}

export default HowItWorks;
