import React, { Component } from "react";
class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }
  submitInfo = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="join">
        <h3>JOIN</h3>
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
          placeholder="Enter your E-mail"
          name="email"
          value={this.state.email}
          onChange={this.submitInfo}
        />
      </div>
    );
  }
}
export default Join;
