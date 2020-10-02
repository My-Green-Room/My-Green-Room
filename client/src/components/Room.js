import React, { Component } from "react";
import Navbar from "./Navbar";
import AddPlant from "./AddPlant";
import EditPlant from "./EditPlant";
import PlantDetails from "./PlantDetails";
import "./style.css";

class Room extends Component {
  state = {
    plantBtnId: "",
    addForm: false,
    plantId: "",
    editForm: false,
  };

  handleAddForm = (event) => {
    this.setState({
      plantBtnId: event.target.id,
      addForm: true,
    });
  };

  closeAddForm = () => {
    this.setState({ addForm: false });
  };

  handleEditForm = (event) => {
    this.setState({
      plantId: event.target.id,
      editForm: true,
    });
  };

  closeEditForm = () => {
    this.setState({ editForm: false });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="room-container">
          <div>
            {this.state.addForm ? (
              <AddPlant
                plantCat={this.state.plantBtnId}
                closeAddForm={this.closeAddForm}
              />
            ) : (
              <></>
            )}
            {this.state.editForm ? (
              <EditPlant
                plantId={this.state.plantId}
                closeEditForm={this.closeEditForm}
              />
            ) : (
              <></>
            )}
            <PlantDetails />
          </div>

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
            <button id="home plant" onClick={this.handleAddForm}>
              home plant
            </button>
            <button id="cactus" onClick={this.handleAddForm}>
              cactus
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
