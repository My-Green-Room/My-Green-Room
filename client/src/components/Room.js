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
            <EditPlant />
            <PlantDetails />
          </div>
          <div className="plant-container">
            <img />
            <img />
            <img />
            <img />
            <img />
          </div>

          <div class="button-container">
            <button id="herbs" onClick={this.handleAddForm}>
              herbs
            </button>
            <button>succulent</button>
            <button>flower</button>
            <button>home plant</button>
            <button id="cactus">cactus</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
