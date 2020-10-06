import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import AddPlant from "./AddPlant";
import EditPlant from "./EditPlant";
import PlantDetails from "./PlantDetails";
import "./style.css";
import axios from "axios";

import nursery from "../assets/nursery.json";
import LivingRoom from "./LivingRoom";

class Room extends Component {
  state = {
    plantBtnId: "",
    addForm: false,
    editForm: true,
    plantDetailsForm: false,
    selectedPlantCatDefault: {},
    plants: [],
    inquiredPlant: "",
  };
  componentDidMount() {
    axios.get(`/api/plants/${this.props.user._id}`).then((plants) => {
      console.log(plants.data, typeof plants.data);
      this.setState({ plants: plants.data });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inquiredPlant !== this.state.inquiredPlant) {
      axios.get(`/api/plants/${this.props.user._id}`).then((plants) => {
        console.log(plants.data, typeof plants.data);
        this.setState({ plants: plants.data });
      });
    }
  }

  handleAddForm = (event) => {
    let selectedPlantCat = nursery.find((plant) => {
      if (plant.category == event.target.id) {
        return plant;
      }
    });
    this.setState({
      plantBtnId: event.target.id,
      addForm: true,
      selectedPlantCatDefault: selectedPlantCat,
      plantDetailsForm: false,
    });
    console.log(this.state);
  };

  submitNewPlant = (event) => {
    console.log("hello there");
    event.preventDefault();
    axios
      .post("/api/plants", this.state.selectedPlantCatDefault)
      .then((response) => {
        console.log("please work", response.data);
        this.setState({
          plants: [...this.state.plants, response.data],
          addForm: false,
        });
        return <Redirect to="/room" />;
      });
  };

  closeAddForm = () => {
    this.setState({ addForm: false });
  };

  handleEditForm = (event) => {
    this.setState({
      plantId: event.target.id,
      editForm: true,
      plantDetailsForm: false,
    });
  };

  handlePlantDetailsForm = (plantId) => {
    let inquiredPlant = this.state.plants.find(
      (plant) => plant._id === plantId
    );
    this.setState({
      inquiredPlant: inquiredPlant,
      plantDetailsForm: true,
      addForm: false,
    });
  };

  closeEditForm = () => {
    this.setState({ editForm: false });
  };

  render() {
    {
      console.log("this is user", this.props.user._id);
    }
    console.log(this.state.selectedPlantCatDefault);
    return (
      <div>
        <div class="button-container">
          <button id="cacti" onClick={this.handleAddForm}>
            Cactus
          </button>
          <button id="leafyplant" onClick={this.handleAddForm}>
            Leafy Plant
          </button>
          <button id="succulent" onClick={this.handleAddForm}>
            Succulent
          </button>
          <button id="fern" onClick={this.handleAddForm}>
            Fern
          </button>
          <button id="peperomies" onClick={this.handleAddForm}>
            Peperomie
          </button>
        </div>
        <div className="room-container">
          <div>
            {this.state.addForm ? (
              <AddPlant
                plantCat={this.state.selectedPlantCatDefault}
                closeAddForm={this.closeAddForm}
                submitNewPlant={this.submitNewPlant}
              />
            ) : (
              <></>
            )}
            {this.state.editForm ? (
              <EditPlant
                closeEditForm={this.closeEditForm}
                plant={this.state.inquiredPlant}
              />
            ) : (
              <></>
            )}
            {this.state.plantDetailsForm && (
              <PlantDetails
                closeEditForm={this.closeEditForm}
                plant={this.state.inquiredPlant}
              />
            )}
          </div>
          <LivingRoom
            user={this.props.user}
            plants={this.state.plants}
            DisplayPlantDetails={this.handlePlantDetailsForm}
          />
        </div>
      </div>
    );
  }
}

export default Room;
