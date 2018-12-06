import React, { Component } from "react";
import Navbar from "../../navBar.js";

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
            <div className="s">box</div>
            <div className="s">carry-on</div>
            <div className="s">luggage</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Ship;
