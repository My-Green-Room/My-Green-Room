import React, { Component } from "react";
import "./style.css";

class AddPlant extends Component {
  render() {
    return (
      <div>
        AddPlant
        <button onClick={this.props.closeAddForm}>Close Add Form</button>
      </div>
    );
  }
}

export default AddPlant;
