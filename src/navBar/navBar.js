import React, { Component } from "react";
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
      </div>
    );
  }
}
export default NavBar;
