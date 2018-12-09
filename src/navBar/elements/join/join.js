import React, { Component } from "react";
import NavBar from "../../navBar.js";
import Payment from "../../../stripe/stripApp.js";
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
      click: false
    };
  }
  submitInfo = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  authenticate = () => {
    this.setState({ click: !this.state.click });
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
              {" "}
              shipper{" "}
            </button>
            <button className="carrier-btn" onClick={this.authenticate}>
              carrier
            </button>
            <button className="broker-btn" onClick={this.authenticate}>
              broker
            </button>
          </div>
          {this.state.click && <div>facebook...</div>}
          {this.state.click && <div>google...</div>}
        </div>
        <Payment />
      </div>
    );
  }
}
export default Join;
