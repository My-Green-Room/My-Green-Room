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
    editForm: false,
    plantDetailsForm: false,
    selectedPlantCatDefault: {},
    plants: [],
    inquiredPlant: "",
    score:0,
  };
  componentDidMount() {
    axios.get(`/api/plants/${this.props.user._id}`).then((plants) => {
      console.log(plants.data, typeof plants.data);
      this.setState({ plants: plants.data });
    });
  }

<<<<<<< HEAD
  componentDidUpdate(prevProps, prevState) {
    if (prevState.inquiredPlant !== this.state.inquiredPlant) {
      axios.get(`/api/plants/${this.props.user._id}`).then((plants) => {
        console.log(plants.data, typeof plants.data);
        this.setState({ plants: plants.data });
      });
    }
  }

  deletePlant = (id) => {
    axios
      .delete(`/api/plants/${id}`)
      .then(() => {
        let filteredPlants = this.state.plants.filter((plant) => {
          if (plant._id == id) {
            return false;
          }
          return true;
        });

        this.setState({
          plants: filteredPlants,
        });
        this.props.history.push("/room");
      })
      .catch((error) => {
        console.log(error);
      });
  };

=======
>>>>>>> master
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

<<<<<<< HEAD
  toggleEditForm = () => {
    console.log("living the dream");
    this.setState((state) => ({
      editForm: !state.editForm,
      plantDetailsForm: false,
      addForm: false,
    }));
  };
=======
>>>>>>> master

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

  handleWatering = () => {
    console.log("Zähler für alle Pflanzen", )
    this.setState({
      score:this.state.score+1
    })
  };

  render() {
<<<<<<< HEAD
    {
      console.log(this.props.user);
    }
    console.log(this.state.selectedPlantCatDefault);
=======
    
      console.log(this.props.user);
    console.log(this.state.plants)
    console.log(this.state.selectedPlantCatDefault)
>>>>>>> master
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
        <div>
          <button id="watering" onClick={this.handleWatering}>
            Watering
            
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
              <EditPlant closeEditForm={this.closeEditForm} />
            ) : (
                <></>
              )}
            {this.state.plantDetailsForm && (
              <PlantDetails
                closeEditForm={this.closeEditForm}
                plant={this.state.inquiredPlant}
                toggleEditForm={this.toggleEditForm}
                deletePlant={this.deletePlant}
                id={this.state.inquiredPlant._id}
              />
            )}
          </div>
          <LivingRoom
            user={this.props.user}
            plants={this.state.plants}
            score={this.state.score}
            DisplayPlantDetails={this.handlePlantDetailsForm}
          />
        </div>
      </div>
    );
  }
}

export default Room;
