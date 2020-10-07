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
      <div>
        <h2>Customise your Plant!</h2>

        <form onSubmit={this.handleSubmit}>
          <label>Nickname: </label>
          <input
            type="text"
            name="nickname"
            value={this.state.nickname}
            onChange={this.handleChange}
          />

          <label>Water: </label>
          <input
            type="text"
            name="water"
            value={this.state.water}
            onChange={this.handleChange}
          />

          <label>Sun: </label>
          <input
            type="text"
            name="sun"
            value={this.state.sun}
            onChange={this.handleChange}
          />

          <label>Soil: </label>
          <input
            type="text"
            name="soil"
            value={this.state.soil}
            onChange={this.handleChange}
          />

          <button type="submit">That's My Plant!</button>
          <button type="button" onClick= {this.props.closeEditForm}>X</button>
        </form>
      </div>
    );
  }
}

export default EditPlant;
