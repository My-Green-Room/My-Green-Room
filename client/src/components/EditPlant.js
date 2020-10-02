import React, { Component } from "react";
import "./style.css";

class EditPlant extends Component {
  render() {
    return (
      <div>
        <h2>Edit your Plant!</h2>
        <button onClick={this.props.closeEditForm}>Close Edit Form</button>

        <form onSubmit={this.props.handleSubmit}>
          <label>Nickname: </label>
          <input
            type="text"
            name="nickname"
            value={this.props.nickname}
            onChange={this.props.handleChange}
          />

          <label>Water: </label>
          <input
            type="text"
            name="water"
            value={this.props.water}
            onChange={this.props.handleChange}
          />

          <label>Sun: </label>
          <input
            type="text"
            name="sun"
            value={this.props.sun}
            onChange={this.props.handleChange}
          />

          <label>Trim: </label>
          <input
            type="boolean"
            name="trim"
            value={this.props.trim}
            onChange={this.props.handleChange}
          />

          <button type="submit">Edit</button>
        </form>
      </div>
    );
  }
}

export default EditPlant;
