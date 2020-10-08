import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class EditPlant extends Component {
  state = {
    nickname: this.props.plant.nickname,
    water: this.props.plant.water,
    sun: this.props.plant.sun,
    soil: this.props.plant.soil,
  };

  handleSubmit = (event) => {
    const nickname = this.state.nickname;
    const water = this.state.water;
    const sun = this.state.water;
    const soil = this.state.soil;

    event.preventDefault();

    axios
      .put(`/api/plants/${this.props.plant._id}`, {
        nickname,
        water,
        sun,
        soil,
      })
      .then((response) => {
        console.log(response);
        // this.props.getTheProject();
        // after submitting the form, redirect to '/projects'
        // this.props.history.push("/room");
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.plant !== this.props.plant) {
      this.setState({
        nickname: this.props.plant.nickname,
        water: this.props.plant.water,
        sun: this.props.plant.sun,
        soil: this.props.plant.soil,
      });
    }
  }

  render() {
    console.log(this.state, this.props.plant);
    return (
      <div className="interaction">

<button className="close" onClick={this.props.closeEditForm}></button>

        <h1>Customise your Plant!</h1>

        <form onSubmit={this.handleSubmit} className="interaction">
          <label id="editNickname">Nickname: </label>
          <input
            type="text"
            name="nickname"
            value={this.state.nickname}
            onChange={this.handleChange}
          />

          <label className="icones" ><strong><img src="https://img.icons8.com/plasticine/100/000000/plant-under-rain.png" /></strong></label>
          <input
            type="text"
            name="water"
            value={this.state.water}
            onChange={this.handleChange}
          />

          <label className="icones"> <strong><img src="https://img.icons8.com/doodle/48/000000/sun--v1.png" />  </strong> </label>
          <input
            type="text"
            name="sun"
            value={this.state.sun}
            onChange={this.handleChange}
          />

          <label className="icones"> <strong><img src="https://img.icons8.com/doodle/48/000000/hand-planting.png" /> </strong></label>
          <input
            type="text"
            name="soil"
            value={this.state.soil}
            onChange={this.handleChange}
          />

          <button className="submit-button" id="editbtn" type="submit">My plant is ready!</button>
          
        </form>
      </div>
    );
  }
}

export default EditPlant;
