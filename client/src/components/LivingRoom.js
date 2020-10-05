import React, { Component } from 'react'
import axios from "axios";


export default class LivingRoom extends Component {

state = {
plants: []
}

  componentDidMount() {
    axios.get(`/api/plants/${this.props.user._id}`).then((plants)=> {
      console.log(plants.data)
      this.setState({plants: plants.data})
    })
  }

  render() {
    console.log("this is the user inside the living room", this.props.user._id)
    return (
      <div>
        <h1>That's the Living Room!</h1>


      </div>
    )
  }
}
