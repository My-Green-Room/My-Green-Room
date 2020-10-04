import React, { Component } from "react";
import "./style.css";
import nursery from "../assets/nursery.json"


class AddPlant extends Component {
  render() {
    return (
      <div>
        <h1> Add Your Plant!</h1>

        <img src={this.props.plantCat.imgPath} style={{ "height": "100px" }}></img>
        <div>
          <strong>Nickname: </strong>
          <span>{this.props.plantCat.nickname}
          </span>
        </div>

        <div>
          <strong>Description: </strong>
          <span>{this.props.plantCat.description}
          </span>
        </div>

        <div>
          <strong>Water: </strong>
          <span>{this.props.plantCat.water}

          </span>
        </div>

        <div>
          <strong>Sun: </strong>
          <span>{this.props.plantCat.sun}
          </span>
        </div>

        <div>
          <strong>Trim: </strong>
          <span>{this.props.plantCat.trim}
          </span>
        </div>
        <button type='submit' onClink={this.props.submitNewPlant}>Add your plant!</button>



        <button onClick={this.props.closeAddForm}>Close Add Form</button>
      </div>
    );
  }
}

export default AddPlant;
