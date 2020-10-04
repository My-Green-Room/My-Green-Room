import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Login } from './Login';
import './style.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-container">
        <a href="/" class="nav-button" id="cat">LOGOUT</a>
        <a href="/signup" class="nav-button" id="cat">SIGNUP</a>
        <a href="login" class="nav-button" id="cat">LOGIN</a>
      </nav>
    )
  }
}


export default Navbar;
