import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../navBar/navBar.js";
import "../css/App.css";

import { Route, Link } from "react-router-dom";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="landingPage">
        <h1> Welcome to Shippers App </h1>
      </div>
    );
  }
}

export default LandingPage;
