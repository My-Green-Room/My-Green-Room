import React from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';


const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  })
}

export default function Navbar(props) {
  return (
      <nav className="nav-container">
      <ul> 
         {props.user ? (
        <>
           <li>Welcome to your Green Room {props.user.username}! </li>
           <li className="nav-button" > <Link to='/' onClick={() => handleLogout(props)}>Logout</Link> </li> 
        </>
      ) : (
          <>
          
          <li className="nav-button" > <Link to='/signup'>Signup</Link> </li> 
          <li className="nav-button"> <Link to='/login'>Login</Link></li> 
         
          </>
        )}
     
    </ul>
    </nav>
  )
}
