import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import AddPlant from "./AddPlant";
import EditPlant from "./EditPlant";
import PlantDetails from "./PlantDetails";
import "./style.css";
import axios from "axios";

import nursery from "../assets/nursery.json"


class Room extends Component {
  state = {
    plantBtnId: "",
    addForm: false,
    editForm: false,
    plantDetailsForm: false,
    selectedPlantCatDefault: {},
  };

  handleAddForm = (event) => {
    let selectedPlantCat = nursery.find(plant => {
      if (plant.category == event.target.id) {
        return plant
      }
    })
    this.setState({
      plantBtnId: event.target.id,
      addForm: true,
      selectedPlantCatDefault: selectedPlantCat
    });
  };

  submitNewPlant = event => {
    event.preventDefault()
    axios.post('/api/plants', this.state.selectedPlantCatDefault)
      .then(response => {
        console.log(response)
        this.setState({
          addForm: false,

        })
        return <Redirect to='/room' />
      })
  }

  closeAddForm = () => {
    this.setState({ addForm: false });
  };

  handleEditForm = (event) => {
    this.setState({
      plantId: event.target.id,
      editForm: true,
    });
  };

  handlePlantDetailsForm = (event) => {
    this.setState({
      plantId: event.target.id,
      PlandDetailsForm: true,
    });
  };


  closeEditForm = () => {
    this.setState({ editForm: false });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div class="button-container">
          <button id="herbs" onClick={this.handleAddForm}>
            herbs
            </button>
          <button id="succulent" onClick={this.handleAddForm}>
            succulent
            </button>
          <button id="flower" onClick={this.handleAddForm}>
            flower
            </button>
          <button id="homeplant" onClick={this.handleAddForm}>
            home plant
            </button>
          <button id="cactus" onClick={this.handleAddForm}>
            cactus
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
              />
            ) : (
                <></>
              )}
            {this.state.plantDetailsForm ? (
              <PlantDetails
                closeEditForm={this.closeEditForm} />
            ) : (
                <></>
              )}
          </div>

        </div>

      </div>
    );
  }
}

export default Room;
