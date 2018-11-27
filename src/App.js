import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./navBar/navBar.js";
import "./css/App.css";
import SideBar from "./sideBar/sideBar.js";
import { Route, Link } from "react-router-dom";
import HowItWoks from "./navBar/elements/howItWorks.js";
import LandingPage from "./landingPage/landingPage.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/how-it-work" component={HowItWoks} />
        <Route exact path="/find-shipments" />
        <Route exact path="/ship" />
        <Route exact path="/sign-in" />
        <Route exact path="/join" />
        <Route exact path="/help" />
      </div>
    );
  }
}

export default App;
