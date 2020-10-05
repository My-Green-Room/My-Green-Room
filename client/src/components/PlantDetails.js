import React, { Component } from "react";
import "./style.css";

class PlantDetails extends Component {
  render() {
    return (
      <div>
        <h1>Plant Details</h1>

        <div>
          <strong>Nickname: </strong>
          <span>{this.props.plantCat.nickname}</span>
        </div>

        <div>
          <strong>Description: </strong>
          <span>{this.props.plantCat.description}</span>
        </div>

        <div>
          <strong>Water: </strong>
          <span>{this.props.plantCat.water}</span>
        </div>

        <div>
          <strong>Sun: </strong>
          <span>{this.props.plantCat.sun}</span>
        </div>

        <div>
          <strong>Soil </strong>
          <span>{this.props.plantCat.soil}</span>
        </div>
      </div>
    );
  }
}

export default PlantDetails;
