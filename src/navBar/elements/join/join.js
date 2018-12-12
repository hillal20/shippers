import React, { Component } from "react";
import NavBar from "../../navBar.js";
import Payment from "../../../stripe/stripApp.js";
import FBimage from "../../../pictures/facebook.jpg";
import GMimage from "../../../pictures/gmail.jpg";
class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      rePassword: "",
      click: false,
      emailClick: false
    };
  }
  submitInfo = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  authenticate = () => {
    this.setState({ click: true });
  };
  emailClick = () => {
    this.setState({ emailClick: true });
  };
  render() {
    return (
      <div className="join">
        <div className="join-box1">
          <h2>Join Shippers</h2>
        </div>
        <div className="join-box2">
          <h2> I am ...</h2>
          <div className="join-box2-sh-car">
            <button className="shipper-btn" onClick={this.authenticate}>
              shipper
            </button>
            <button className="carrier-btn" onClick={this.authenticate}>
              carrier
            </button>
            <button className="broker-btn" onClick={this.authenticate}>
              broker
            </button>
          </div>
          <div className="hidden-fb-em">
            {this.state.click && (
              <div className="join-box2-facebook-email">
                <img src={FBimage} height="50px" width="100px" />
                <img
                  src={GMimage}
                  height="50px"
                  width="100px"
                  onClick={this.emailClick}
                />
                {this.state.emailClick && <div> ...input</div>}
              </div>
            )}
          </div>
        </div>
        <Payment />
      </div>
    );
  }
}
export default Join;
