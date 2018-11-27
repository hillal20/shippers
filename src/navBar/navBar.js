import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navBar">
        <div className="logo">SHIPPERS</div>
        <div className="shippers" className="box">
          HOW IT WORKS
        </div>
        <div className="box"> FIND SHIPMENTS </div>
        <div className="box">SHIP</div>
        <div className="sign-join">
          <div className="box">SIGN IN </div>
          <div className="box">JOIN</div>
        </div>
        <div className="box help">HELP</div>
        <Route path="how-it-work" />
        <Route path="find-shipments" />
        <Route path="ship" />
        <Route path="sign-in" />
        <Route path="join" />
        <Route path="help" />
      </div>
    );
  }
}
export default NavBar;
