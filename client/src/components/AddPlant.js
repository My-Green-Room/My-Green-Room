import React, { Component } from "react";
import "./style.css";
import nursery from "../assets/nursery.json";

class AddPlant extends Component {
  render() {
    return (
      <div>

        <img
          src={this.props.plantCat.imgPath[0]}
          style={{ height: "40vh" }}
        ></img>

        <div>
          <strong>Nickname: </strong>
          <span>{this.props.plantCat.nickname}</span>
        </div>

        <div>
          <strong>Description: </strong>
          <span>{this.props.plantCat.description}</span>
        </div>

        <div className="iconwater">
          <strong><img src="https://img.icons8.com/plasticine/100/000000/plant-under-rain.png"/>: </strong>
          <span>{this.props.plantCat.water}</span>
        </div>

        <div className="icones">
        <strong><img src="https://img.icons8.com/doodle/48/000000/sun--v1.png"/> : </strong>
          <span>{this.props.plantCat.sun}</span>
        </div>

        <div className="icones">
        <strong><img src="https://img.icons8.com/doodle/48/000000/hand-planting.png"/>: </strong>
          <span>{this.props.plantCat.soil}</span>
        </div>
        <button type="submit" onClick={this.props.submitNewPlant}>
          Pot your plant!
        </button>

        <button onClick={this.props.closeAddForm}>X</button>
      </div>
    );
  }
}

export default AddPlant;
