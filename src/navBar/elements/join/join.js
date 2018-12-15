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
      emailClick: false,
      personal: false,
      business: false
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
                <img
                  src={FBimage}
                  height="50px"
                  width="100px"
                  onClick={() => {
                    window.open(
                      "http://localhost:4444/facebook",
                      "_blank",
                      `toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,
                        width=1200,height=800`
                    );
                  }}
                />

                <img
                  src={GMimage}
                  height="50px"
                  width="100px"
                  onClick={this.emailClick}
                />
                {this.state.emailClick && (
                  <div>
                    <p>Account Type</p>
                    <button
                      onClick={() => {
                        this.setState({ personal: true, business: false });
                      }}
                    >
                      Personal
                    </button>
                    <button
                      onClick={() => {
                        this.setState({ business: true });
                      }}
                    >
                      Business
                    </button>
                    {this.state.personal && (
                      <div>
                        <p>First Name</p>
                        <input
                          type="text"
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.submitInfo}
                        />
                        <p>Last Name</p>
                        <input
                          type="text"
                          name="lastName"
                          value={this.state.lastName}
                          onChange={this.submitInfo}
                        />
                        <p>Email Address</p>
                        <input
                          type="text"
                          name="email"
                          value={this.state.email}
                          onChange={this.submitInfo}
                        />
                        <p>Create Password</p>
                        <input
                          type="text"
                          name="password"
                          value={this.state.password}
                          onChange={this.submitInfo}
                        />
                        <p>User Name </p>
                        <input
                          type="text"
                          name="username"
                          value={this.state.username}
                          onChange={this.submitInfo}
                        />
                        {this.state.business && (
                          <div>
                            <p>Company Name</p>
                            <input
                              type="text"
                              name="companyName"
                              value={this.state.companyName}
                              onChange={this.submitInfo}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
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
