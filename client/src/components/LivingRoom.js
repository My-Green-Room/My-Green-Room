import React, { Component } from "react";
import axios from "axios";

export default class LivingRoom extends Component {
  state = {
    plants: [],
  };

  componentDidMount() {
    axios.get(`/api/plants/${this.props.user._id}`).then((plants) => {
      console.log(plants.data, typeof plants.data);
      this.setState({ plants: plants.data });
    });
  }

  render() {
    let allPlants = this.state.plants.map((plant, index) => (
      <img className={`plant plant${index}`} src={plant.imgPath[0]} />
    ));
    console.log("this is allPlants", allPlants);
    console.log("this is the user inside the living room", this.props.user._id);
    return (
      <div>
        <h1>That's the Living Room!</h1>

        {allPlants}
      </div>
    );
  }
}
