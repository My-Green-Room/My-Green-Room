import React from 'react'
import { Link } from 'react-router-dom';
import { Login } from './Login';
// Please compare Syntax!!!!!
// import { logout } from '../services/auth';
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

            <li className="nav-button"><Link to='/room/:id'>Your Green Room</Link> </li>




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

export default Navbar;