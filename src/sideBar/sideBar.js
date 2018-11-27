import React, { Component } from "react";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  close = () => {
    const s = document.querySelector(".sideBar");
    console.log(s);
    s.style.marginLeft = "-400px";
  };
  render() {
    return (
      <div className="sideBar">
        <h1> side bar</h1>
        <div className="close" onClick={this.close}>
          {" "}
          <h2>close...</h2>
        </div>
      </div>
    );
  }
}
export default SideBar;
