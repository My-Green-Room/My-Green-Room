import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Logout } from './Login';
import './style.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-container">
        <a href="#" class="nav-button" id="cat">LOGIN</a>
        <a href="#" class="nav-button" id="cat">SIGNUP</a>
        <a href="#" class="nav-button" id="cat">LOGOUT</a>
      </nav>
    )
  }
}


export default Navbar;
