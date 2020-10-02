import React, { Component } from "react";
import "./style.css";

class AddPlant extends Component {
  render() {
    return (
      <div>
       <h1> Add Your Plant!</h1>
       
        <form onSubmit={this.props.handleSubmit}>
        
        <label>Nickname: </label>
        <input
          type='text'
          name='nickname'
          value={this.props.nickname}
        />

         <label>Description: </label>
        <input
          type='text'
          name='description'
          value={this.props.nickname}
        />

         <label>Water: </label>
        <input
          type='text'
          name='water'
          value={this.props.water}

        />

         <label>Sun: </label>
        <input
          type='text'
          name='sun'
          value={this.props.sun}
        />

        <label>Trim: </label>
        <input
          type='boolean'
          name='trim'
          value={this.props.trim}
        />

<button type='submit'>Add your plant!</button>
      
    </form>


        <button onClick={this.props.closeAddForm}>Close Add Form</button>
      </div>
    );
  }
}

export default AddPlant;
