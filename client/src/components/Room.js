import React, { Component } from 'react';
import Navbar from "./Navbar";
import AddPlant from "./AddPlant";
import EditPlant from "./EditPlant";
import PlantDetails from "./PlantDetails";
import './style.css'

class Room extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
            <button>herbs</button>
            <button>succulent</button>
            <button>flower</button>
            <button>home plant</button>
            <button>cactus</button>
          </div>


        </div>
      </div>
    )
  }
}


export default Room;
