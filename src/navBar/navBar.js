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
          <div
            className="box1"
            onClick={() => {
              this.display();
              this.props.sidebarDisplayClick();
            }}
          >
            <div className="box2" />
            <div className="box3" />
            <div className="box4" />
          </div>
          <span
            onClick={() => {
              this.props.history.push("/shippers");
              this.props.shippersClick();
            }}
          >
            SHIPPERS
          </span>
        </div>

        <div className="shippers" className="box">
          <span
            onClick={() => {
              this.props.history.push("/how-it-work");
              this.props.howItWorksClick();
            }}
          >
            HOW IT WORKS
          </span>
        </div>
        <div className="box">
          <span
            onClick={() => {
              this.props.history.push("/find-shipments");
              this.props.findShipmentsClick();
            }}
          >
            FIND SHIPMENTS
          </span>
        </div>
        <div className="box">
          <span
            onClick={() => {
              this.props.history.push("/ship");
              this.props.shipClick();
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
                this.props.signInClick();
              }}
            >
              SIGN IN
            </span>
          </div>
          <div className="box">
            <span
              onClick={() => {
                this.props.history.push("/join");
                this.props.joinClick();
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
              this.props.helpClick();
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
  console.log("state ===>", state);
  return {};
};
const mDTP = dispatch => {
  return {
    joinClick: () => {
      dispatch({ type: "join-click" });
    },
    signInClick: () => {
      dispatch({ type: "signIn-click" });
    },
    shipClick: () => {
      dispatch({ type: "ship-click" });
    },
    findShipmentsClick: () => {
      dispatch({ type: "find-shipment-click" });
    },
    howItWorksClick: () => {
      dispatch({ type: "how-itWorks-click" });
    },
    helpClick: () => {
      dispatch({ type: "help-click" });
    },
    shippersClick: () => {
      dispatch({ type: "shippers-click" });
    },
    sidebarDisplayClick: () => {
      dispatch({ type: "sidebar--display-click" });
    }
  };
};

export default connect(
  mPTS,
  mDTP
)(withRouter(NavBar));
