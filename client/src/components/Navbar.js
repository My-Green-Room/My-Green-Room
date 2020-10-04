import React from 'react'
import { Link } from 'react-router-dom';
import { Login } from './Login';
import { logout } from '../services/auth';
import './style.css'

const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  })
}

function Navbar(props) {

  return (
    <nav className="nav-container">
      <ul>

        {props.user && <nav>Welcome {props.user.username}! </nav>}



        {props.user ? (
          <>

            <li><Link className="nav-button" to='/room/:id'>Your Green Room</Link> </li>




            <li > <Link className="nav-button" to='/' onClick={() => handleLogout(props)}>Logout</Link> </li>
          </>
        ) : (
            <>

              <li> <Link className="nav-button" to='/signup'>Signup</Link> </li>


              <li > <Link className="nav-button" to='/login'>Login</Link></li>

            </>
          )}

      </ul>
    </nav>
  )
}

export default Navbar;