import React, { Component } from 'react';
import AddPlant from "./AddPlant";
import EditPlant from "./EditPlant";
import PlantDetails from "./PlantDetails";
import './style.css'

class Room extends Component {
  render() {
    return (
      <div>
        <div className="room-container">
          <div>
            <AddPlant />
            <EditPlant />
            <PlantDetails />
          </div >
          <div className="plant-container">
            <img />
            <img />
            <img />
            <img />
            <img />
          </div>

          <div class="button-container">
            <a href="#" class="plant-button" id="cat">herbs</a>
            <a href="#" class="plant-button" id="cat">succulent</a>
            <a href="#" class="plant-button" id="cat">flower</a>
            <a href="#" class="plant-button" id="cat">home plant</a>
            <a href="#" class="plant-button" id="cat">cactus</a>
          </div>


        </div>
      </div>
    )
  }
}


export default Room;
