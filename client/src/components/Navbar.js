import React from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';
import "./style.css"


const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  })
}

export default function Navbar(props) {
  return (
    <nav className="nav-container">
      
        {props.user ? (
          <>
          <ul className="room-nav">
            <li className="welcome-message">Welcome to your very own Green Room {props.user.username}! </li>
            <li className="nav-button" > <Link to='/' onClick={() => handleLogout(props)}>Logout</Link> </li>
          </ul>
          </>
        ) : (
            <>
            <ul className="homepage-nav">
              <li className="nav-button" > <Link to='/signup'>Signup</Link> </li>
              <li className="nav-button"> <Link to='/login'>Login</Link></li>
            </ul>
            </>
          )}

    </nav>
  )
}