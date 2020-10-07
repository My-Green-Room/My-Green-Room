import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Room from "./Room";
import EditPlant from "./EditPlant";
import "./style.css";

class PlantDetails extends Component {
  // state = {
  //   plantDetails: {},
  // };

  // componentDidMount() {
  //   axios
  //     // .get(`/api/plants/plantDetails/${this.props.match.params.id}`)
  //     .get(`/api/plants/plantDetails/${this.props.plantId}`)
  //     .then((plant) => {
  //       console.log(plant, typeof plant);
  //       this.setState({ plantDetails: plant.data });
  //     });
  // }

  render() {
    console.log(this.props.id, "THIS IS THE PLANT!!!!!!");
    return (
      <div>
        <h1>Plant Details</h1>

        <div>
          <strong>Nickname: </strong>
          <span>{this.props.plant.nickname}</span>
        </div>

        <div>
          <strong>Description: </strong>
          <span>{this.props.plant.description}</span>
        </div>

        <div>
          <strong><img src="https://img.icons8.com/plasticine/100/000000/plant-under-rain.png"/>: </strong>
          <span>{this.props.plant.water}</span>
        </div>

        <div>
          <strong><img src="https://img.icons8.com/doodle/48/000000/sun--v1.png"/> : </strong>
          <span>{this.props.plant.sun}</span>
        </div>

        <div>
          <strong><img src="https://img.icons8.com/doodle/48/000000/hand-planting.png"/>: </strong>
          <span>{this.props.plant.soil}</span>
        </div>

        <div>
          <button
            class="submit"
            onClick={() => this.props.deletePlant(this.props.id)}
          >
            Delete your plant!
          </button>

          <button onClick={this.props.toggleEditForm}>Edit your plant!</button>

          <button onClick={this.props.closePlantDetailsForm}>X</button>

        </div>
      </div>
    );
  }
}

export default PlantDetails;
