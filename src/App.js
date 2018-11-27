import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./navBar/navBar.js";
import "./css/App.css";
import SideBar from "./sideBar/sideBar.js";
import { Route, Link } from "react-router-dom";
import HowItWoks from "./navBar/elements/howItWorks.js";
class App extends Component {
  display = event => {
    const sidebar = document.querySelector(".sideBar");
    sidebar.style.marginLeft = "0px";
    sidebar.style.background = "red";
    sidebar.style.top = "70px";
  };
  render() {
    return (
      <div className="App">
        <div className="box1" onClick={this.display}>
          <div className="box2" />
          <div className="box3" />
        </div>
        <h1> Welcome to Shippers App </h1>
        <NavBar />
        <SideBar />
        <Route path="/how-it-work" component={HowItWoks} />
        <Route path="/find-shipments" />
        <Route path="/ship" />
        <Route path="/sign-in" />
        <Route path="/join" />
        <Route path="/help" />
      </div>
    );
  }
}

export default App;
