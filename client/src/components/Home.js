import React, { Component } from 'react'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div className="logo-circle">
              <h1 className="my-green-room">MY <br />GREEN <br />ROOM</h1>
          </div>
          <img />
          <div className="home-text">Come in and create your very own virtual home garden! ...and learn how to care for your real plants along the way!</div>
          <img />
        </div>
      </div>
    )
  }
}


export default Home;
