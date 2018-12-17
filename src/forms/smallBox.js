import React, { Component } from "react";

class SmallBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      length: "",
      weight: "",
      NumberOfItems: "",
      offer: "",
      select: ""
    };
  }

  eventHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state.select);
    return (
      <div>
        <h1> Shipment: Small Box...</h1>
        <div>
          Type:
          <select
            onChange={e => {
              this.setState({ select: e.target.value });
            }}
          >
            <option>Select Your Type: </option>
            <option>Liquid</option>
            <option>Fragile</option>
            <option>Metal</option>
            <option>Jewelry</option>
            <option>Powder</option>
          </select>
        </div>
        width:
        <input
          type="text"
          name="width"
          value={this.state.width}
          onChange={this.eventHandler}
        />
        height:
        <input
          type="text"
          name="height"
          value={this.state.height}
          onChange={this.eventHandler}
        />
        length:
        <input
          type="text"
          name="length"
          value={this.state.length}
          onChange={this.eventHandler}
        />
        weight:
        <input
          type="text"
          name="weight"
          value={this.state.weight}
          onChange={this.eventHandler}
        />
        number of items:
        <input
          type="text"
          name="NumberOfItems"
          value={this.state.NumberOfItems}
          onChange={this.eventHandler}
        />
        Offer $$$ :
        <input
          type="text"
          name="offer"
          value={this.state.offer}
          onChange={this.eventHandler}
        />
      </div>
    );
  }
}
export default SmallBox;
