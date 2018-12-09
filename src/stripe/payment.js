import React, { Component } from "react";
import { StripeProvider } from "react-stripe-elements";
import StripeApp from "./stripApp.js";
class Payment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        welcome to stripe payment...
        <StripeApp />
      </div>
    );
  }
}

export default Payment;
