import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PlantDetails from "./PlantDetails";

export default class LivingRoom extends Component {
  state = {
    inquiredPlant: "",
  };
  render() {
    let allPlants = this.props.plants.map((plant, index) => (
      <img
        className={`plant plant${index}`}
        src={plant.imgPath[0]}
        onClick={() => this.props.DisplayPlantDetails(plant._id)}
      />
    ));

    console.log("this is allPlants", this.props.plants);
    console.log("this is the user inside the living room", this.props.user._id);
    return (
      <div>
        <h1>That's the Living Room!</h1>
        {allPlants}
        {this.props.handlePlantDetailsForm}
      </div>
    );
  }
}
