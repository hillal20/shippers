import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import SideBar from "../sideBar/sideBar.js";
import { connect } from "react-redux";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  display = event => {
    const sidebar = document.querySelector(".sideBar");
    sidebar.style.marginLeft = "0px";
    sidebar.style.background = "red";
    sidebar.style.top = "70px";
  };
  render() {
    return (
      <div className="navBar">
        <div className="logo">
          <SideBar />
          <div className="box1" onClick={this.display}>
            <div className="box2" />
            <div className="box3" />
            <div className="box4" />
          </div>
          <span
            onClick={() => {
              this.props.history.push("/shippers");
            }}
          >
            SHIPPERS
          </span>
        </div>

        <div className="shippers" className="box">
          <span
            onClick={() => {
              this.props.history.push("/how-it-work");
            }}
          >
            HOW IT WORKS
          </span>
        </div>
        <div className="box">
          <span
            onClick={() => {
              this.props.history.push("/find-shipments");
            }}
          >
            FIND SHIPMENTS
          </span>
        </div>
        <div className="box">
          <span
            onClick={() => {
              this.props.history.push("/ship");
            }}
          >
            SHIP
          </span>
        </div>
        <div className="sign-join">
          <div className="box">
            <span
              onClick={() => {
                this.props.history.push("/sign-in");
              }}
            >
              SIGN IN
            </span>
          </div>
          <div className="box">
            <span
              onClick={() => {
                this.props.history.push("/join");
              }}
            >
              JOIN
            </span>
          </div>
        </div>
        <div className="box help">
          <span
            onClick={() => {
              this.props.history.push("/help");
            }}
          >
            HELP
          </span>
        </div>
      </div>
    );
  }
}
const mPTS = state => {
  console.log("state", state);
  return {};
};
export default connect()(withRouter(NavBar));
