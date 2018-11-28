import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./navBar/navBar.js";
import "./css/App.css";
import SideBar from "./sideBar/sideBar.js";
import { Route, Link } from "react-router-dom";
import HowItWoks from "./navBar/elements/howItWorks/howItWorks.js";
import Join from "./navBar/elements/join/join.js";
import Help from "./navBar/elements/help/help.js";
import SignIn from "./navBar/elements/signIn/signIn.js";
import FindShipments from "./navBar/elements/findShipments/findShipments.js";
import Shippers from "./navBar/elements/shippers/shippers.js";
import Ship from "./navBar/elements/ship/ship.js";

import LandingPage from "./landingPage/landingPage.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/how-it-work" component={HowItWoks} />
        <Route exact path="/find-shipments" component={FindShipments} />
        <Route exact path="/ship" component={Ship} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/shippers" component={Shippers} />
      </div>
    );
  }
}

export default App;
