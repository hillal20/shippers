import React, { Component } from "react";
import NavBar from "../../navBar.js";
class FindShipments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickupAdd: "",
      deliveryAdd: ""
    };
  }

  addressInfo = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="findShipments">
        <div className="box-5">
          <p>PICKUP</p>
          <input
            placeholder="Anywhere"
            name="pickupAdd"
            value={this.state.pickupAdd}
            onChange={this.addressInfo}
          />
          <p>DELIVERY</p>
          <input />
        </div>
        <div className="box-6">
          {" "}
          <h1>bx2</h1>
        </div>
      </div>
    );
  }
}
export default FindShipments;
