import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./navBar/navBar.js";
import "./css/App.css";
import SideBar from "./sideBar/sideBar.js";
import { Route, Link, withRouter } from "react-router-dom";
import HowItWoks from "./navBar/elements/howItWorks/howItWorks.js";
import Join from "./navBar/elements/join/join.js";
import Help from "./navBar/elements/help/help.js";
import SignIn from "./navBar/elements/signIn/signIn.js";
import FindShipments from "./navBar/elements/findShipments/findShipments.js";
import Shippers from "./navBar/elements/shippers/shippers.js";
import Ship from "./navBar/elements/ship/ship.js";
import Navbar from "./navBar/navBar.js";
import LandingPage from "./landingPage/landingPage.js";
import { connect } from "react-redux";
import { HOW_IT_WORKS } from "./navBar/navBar.js";
import CArryOn from "./forms/carryOn.js";
class App extends Component {
  render() {
    console.log("HOW_IT_WORKS", HOW_IT_WORKS);

    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/how-it-work" component={HowItWoks} />
        <Route exact path="/find-shipments" component={FindShipments} />
        <Route exact path="/ship" component={Ship} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/shippers" component={Shippers} />
        <Route path="/carry" Component={CArryOn} />
        <CArryOn />
      </div>
    );
  }
}
const mPTS = state => {
  console.log("App-state ===>", state.HowItWoksReducer);
  return {};
};

export default App;
