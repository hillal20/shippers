import React, { Component } from "react";
import Navbar from "../../navBar.js";
import SmallBox from "../../../pictures/smallBox.jpg";
import CarryOn from "../../../pictures/carryOn.jpg";
import Luggage from "../../../pictures/luggage.jpg";
import CArryOn from "../../../forms/carryOn.js";
import { Route, Link, withRouter } from "react-router-dom";
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
              <img src={SmallBox} width="400" height="400" />
            </div>
            <div className="s">
              <Link to="carry">
                <img
                  src={CarryOn}
                  width="400"
                  height="400"
                  // onClick={() => {
                  //   this.props.history.push("/carry");
                  // }}
                />
              </Link>
            </div>
            <div className="s">
              <img src={Luggage} width="300" height="300" />
            </div>
          </div>
        </div>
        <Route exact path="/carry" Component={CArryOn} />
      </div>
    );
  }
}
export default Ship;
