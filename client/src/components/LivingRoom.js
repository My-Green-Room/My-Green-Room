import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PlantDetails from "./PlantDetails";
import Room from "./Room";

export default class LivingRoom extends Component {
  state = {
    inquiredPlant: "",
  };

  render() {
    console.log(this.props.score % this.props.length);
    let allPlants = this.props.plants.map((plant, index) => {
      return (
        <img
          className={`plant plant${index}`}
          src={plant.imgPath[this.props.score % plant.imgPath.length]}
          onClick={() => this.props.DisplayPlantDetails(plant._id)}
        />
      );
    });

    console.log("this is allPlants", allPlants);
    console.log("this is the user inside the living room", this.props.user._id);
    console.log("Zähler für alle Pflanzen", allPlants.score);
    return (
      <div>
        <h1>That's the Living Room!</h1>
        {allPlants} {this.props.handlePlantDetailsForm}
      </div>
    );
  }
}

/* console.log("this is allPlants", this.props.plants);
console.log("this is the user inside the living room", this.props.user._id);
return (
  <div>
    <h1>That's the Living Room!</h1>
    { allPlants}
    { this.props.handlePlantDetailsForm}
  </div >
);
}
} */
