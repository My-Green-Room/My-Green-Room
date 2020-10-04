import React from 'react'
import { Link } from 'react-router-dom';
import { Login } from './Login';
// Please compare Syntax!!!!!
// import { logout } from '../services/auth';
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


  handleLogout = props => {
    logout().then(() => {
      props.setUser(null);
    })
  }

export default function Navbar(props) {
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
