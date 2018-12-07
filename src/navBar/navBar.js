import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import SideBar from "../sideBar/sideBar.js";
import { connect } from "react-redux";
export const HOW_IT_WORKS = "how-itWorks-click";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ship: true,
      join: true,
      howItWorks: true,
      findShipments: true,
      join: true,
      signIn: true
    };
  }
  componentWillMount() {
    //this.clearNavBar();
  }
  updateNavBar = () => {
    this.setState({
      ship: !this.state.ship,
      join: !this.state.join,
      howItWorks: !this.state.howItWorks,
      findShipments: !this.state.findShipments,
      join: !this.state.join,
      signIn: !this.state.signIn
    });
  };
  clearNavBar = () => {
    this.setState({
      ship: !this.state.ship,
      join: !this.state.join,
      howItWorks: !this.state.howItWorks,
      findShipments: !this.state.findShipments,
      join: !this.state.join,
      signIn: !this.state.signIn
    });
  };
  display = event => {
    const sidebar = document.querySelector(".sideBar");
    sidebar.style.marginLeft = "0px";
    sidebar.style.background = "red";
    sidebar.style.top = "70px";
  };
  findNavBar = () => {
    // let navBar = document.querySelector(".navBar");
    // if (this.props.location.pathname === "/how-it-work") {
    //   navBar.style.display = "none";
    // }
    // navBar.style.display = "flex";
  };

  render() {
    console.log("path ===>", this.props.location.pathname);
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
          // onClick={() => {
          //   if (this.props.location.pathname === "/") {
          //     return false;
          //   } else {
          //     this.updateNavBar();
          //     this.props.history.push("/");
          //     this.props.shippersClick();
          //   }
          // }}
          >
            <a href="http://localhost:3000"> SHIPPERS</a>
          </span>
        </div>
        {this.state.howItWorks && (
          <div className="shippers" className="box">
            <span
              onClick={() => {
                this.updateNavBar();
                this.props.history.push("/how-it-work");
                this.findNavBar();
                this.props.howItWorksClick();
              }}
            >
              HOW IT WORKS
            </span>
          </div>
        )}

        {this.state.findShipments && (
          <div className="box">
            <span
              onClick={() => {
                this.clearNavBar();
                this.props.history.push("/find-shipments");
                this.props.findShipmentsClick();
              }}
            >
              FIND SHIPMENTS
            </span>
          </div>
        )}

        {this.state.ship && (
          <div className="box">
            <span
              onClick={() => {
                this.props.history.push("/ship");
                this.clearNavBar();
                this.props.shipClick();
              }}
            >
              SHIP
            </span>
          </div>
        )}

        <div className="sign-join">
          {this.state.signIn && (
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
          )}
          {this.state.join && (
            <div className="box">
              <span
                onClick={() => {
                  this.clearNavBar();
                  this.props.history.push("/join");
                  this.props.joinClick();
                }}
              >
                JOIN
              </span>
            </div>
          )}
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
  const st = state.HowItWorksReducer || [];
  return {
    st: st
  };
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
