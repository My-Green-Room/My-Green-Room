import React, { Component } from "react";
import axios from "axios";
import PlantDetails from "./PlantDetails";

export default class LivingRoom extends Component {
  render() {
    let allPlants = this.props.plants.map((plant, index) => (
      <img className={`plant plant${index}`} src={plant.imgPath[0]} />
    ));

    console.log("this is allPlants", allPlants);
    console.log("this is the user inside the living room", this.props.user._id);
    return (
      <div>
        <h1>That's the Living Room!</h1>
        {allPlants} {this.props.handlePlantDetailsForm}
      </div>
    );
  }
}
