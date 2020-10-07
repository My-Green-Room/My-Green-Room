import React, { Component } from "react";
import "./style.css";
import nursery from "../assets/nursery.json";
import "./style.css"

class AddPlant extends Component {
  render() {
    return (
      <div className="interaction">
        <h1> Add Your Plant!</h1>

        <img
          src={this.props.plantCat.imgPath[0]}
          style={{ height: "100px" }}
        ></img>

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
          <strong>Soil: </strong>
          <span>{this.props.plantCat.soil}</span>
        </div>
        <button className="submit-button" type="submit" onClick={this.props.submitNewPlant}>
          Add your plant!
        </button>

        <button className="submit-button" onClick={this.props.closeAddForm}>Close Add Form</button>
      </div>
    );
  }
}

export default AddPlant;
