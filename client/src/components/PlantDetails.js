import React, { Component } from 'react'
import './style.css'

class PlantDetails extends Component {
  render() {
    return (
      <div>

<form onSubmit={this.props.handleSubmit}>

  <h1>Plant Details</h1>

          <label>Nickname: </label>
          <input
            type="text"
            name="nickname"
            value={this.props.nickname}
          />

          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={this.props.description}

          />

          <label>Water: </label>
          <input
            type="text"
            name="water"
            value={this.props.water}
          />

          <label>Sun: </label>
          <input
            type="text"
            name="sun"
            value={this.props.sun}

          />

          <label>Trim: </label>
          <input
            type="boolean"
            name="trim"
            value={this.props.trim}
          />

          <button type="submit">Edit</button>
          <button onClick={this.props.closeEditForm}>Close Edit Form</button>

          <button type='submit'>Edit</button>
        </form>
      </div>
    )
  }
}

export default PlantDetails;