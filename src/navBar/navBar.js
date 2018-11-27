import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import HowItWoks from "./elements/howItWorks.js";

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
          <span
            onClick={() => {
              this.props.history.push("/how-it-work");
            }}
          >
            HOW IT WORKS
          </span>
        </div>
        <div className="box">
          <spn
            onClick={() => {
              this.props.history.push("/find-shipments");
            }}
          >
            FIND SHIPMENTS
          </spn>
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
export default withRouter(NavBar);
