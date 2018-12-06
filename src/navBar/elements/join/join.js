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
      <div className="join">
        <div className="join-box1">
          <h2>Join Shippers</h2>
        </div>
        <div className="join-box2">
          <h2> I am ...</h2>
          <div className="join-box2-sh-car">
            <div className="shipper"> shipper </div>
            <div className="carrier">carrier</div>
            <div className="broker">broker</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Join;
