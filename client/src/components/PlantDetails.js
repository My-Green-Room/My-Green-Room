import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
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
          <strong>Water: </strong>
          <span>{this.props.plant.water}</span>
        </div>

        <div>
          <strong>Sun: </strong>
          <span>{this.props.plant.sun}</span>
        </div>

        <div>
          <strong>Soil </strong>
          <span>{this.props.plant.soil}</span>
        </div>

        <div>
          <button type="submit">Delete your plant!</button>

          <button type="submit" onClick={this.props.handleEditForm}>
            Edit your plant!
          </button>
        </div>
      </div>
    );
  }
}

export default PlantDetails;
