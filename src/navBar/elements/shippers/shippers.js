import React, { Component } from "react";
import LandingPage from "../../../landingPage/landingPage.js";
import NavBar from "../../navBar.js";
class Shippers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="shippers">
        {/* <NavBar /> */}
        <LandingPage />
        shippers{" "}
      </div>
    );
  }
}
export default Shippers;
