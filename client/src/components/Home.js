import React, { Component } from 'react'
import Navbar from "./Navbar"
import './style.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="home-container">
          <h1 className="my-green-room">My Green Room</h1>
          <img />
        </div>
      </div>
    )
  }
}


export default Home;
