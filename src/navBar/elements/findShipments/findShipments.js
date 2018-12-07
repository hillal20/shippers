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
          <input
            placeholder="Anywhere"
            name="deliveryAdd"
            value={this.state.deliveryAdd}
            onChange={this.addressInfo}
          />
          <div className="categories">
            <div>
              <p1>Categories</p1>
              <p>All Categories</p>
              <select
                onChange={event => {
                  //this.setState({ authorId: event.target.value });
                  console.log(event.target);
                }}
              >
                <option>all</option>
                <option>2</option>
              </select>
            </div>
            <div>
              <p2>weights</p2>
              <p>All Weights</p>
            </div>
            <div>
              <p3>Pricing type</p3>
              <p>listing and offer</p>
            </div>
            <div>
              <p3>location type</p3>
              <p>all locations</p>
            </div>
            <div>
              <p4>listed by</p4>
              <p>listed by</p>
            </div>
          </div>
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
