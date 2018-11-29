import React, { Component } from "react";
import NavBar from "../../navBar.js";
class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      rePassword: ""
    };
  }
  submitInfo = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <NavBar />

        <div className="join">
          <input
            type="text"
            placeholder="Enter your First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.submitInfo}
          />

          <input
            type="text"
            placeholder="Enter your Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.submitInfo}
          />
          <input
            type="text"
            placeholder="Enter your username"
            name=" username"
            value={this.state.username}
            onChange={this.submitInfo}
          />
          <input
            type="text"
            placeholder="enter your password"
            name="password"
            value={this.state.password}
            onChange={this.submitInfo}
          />
          <input
            type="text"
            placeholder="re-enter your password"
            name="rePassword"
            value={this.state.rePassword}
            onChange={this.submitInfo}
          />
          <input
            type="text"
            placeholder="Enter your E-mail"
            name="email"
            value={this.state.email}
            onChange={this.submitInfo}
          />
        </div>
      </div>
    );
  }
}
export default Join;
