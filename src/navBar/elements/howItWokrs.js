import React, { Component } from "react";
import ReactDOM from "react-dom";

class HowItWorks extends Component {
  display = event => {
    const sidebar = document.querySelector(".sideBar");
    sidebar.style.marginLeft = "0px";
    sidebar.style.background = "red";
    sidebar.style.top = "70px";
  };
  render() {
    return <div className="App">HowItWorks</div>;
  }
}
export default HowItWorks;
