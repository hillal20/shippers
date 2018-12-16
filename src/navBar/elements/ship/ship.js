import React, { Component } from "react";
import Navbar from "../../navBar.js";
import SmallBox from "../../../pictures/smallBox.jpg";
import CarryOn from "../../../pictures/carryOn.jpg";
import Luggage from "../../../pictures/luggage.jpg";
import CAOn from "../../../forms/carryOn.js";
import { Route, Link, NavLink, withRouter, Switch } from "react-router-dom";
class Ship extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ship">
        <div className="ship-nsh">
          <h2>NEW SHIPMENT</h2>
        </div>
        <div className="ship-cat">
          <div className="ship-cat-1">
            <h3>CATEGORIES</h3>
          </div>
          <div className="ship-cat-2">
            <div className="s">
              <img
                src={SmallBox}
                width="400"
                height="400"
                onClick={() => {
                  this.props.history.push("/ship/smallBox");
                }}
              />
            </div>
            <div className="s">
              <img
                src={CarryOn}
                width="400"
                height="400"
                onClick={() => {
                  this.props.history.push("/ship/carry");
                }}
              />
            </div>
            <div className="s">
              <img
                src={Luggage}
                width="300"
                height="300"
                onClick={() => {
                  this.props.history.push("/ship/luggage");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Ship);
