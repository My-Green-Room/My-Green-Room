import React, { Component } from 'react'
import { login } from '../services/auth';
import './style.css'

export default class Login extends Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    login(username, password)
      .then(data => {
        if (data.message) {
          this.setState({
            message: data.message,
            username: '',
            password: ''
          })
        } else {
          // now we need to put the user in the user key of the state of App.js
          this.props.setUser(data);
          // redirect to / user'room
          this.props.history.push('/room');
        }

      })
  }

  render() {
    return (
      <>
        <h2>Login</h2>
        <form className="login" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            id='username'
          />


          <label htmlFor="password">Password: </label>
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            id='password'
          />
          {this.state.message && (
            <p>{this.state.message}</p>
          )}
          <button type='submit'>Login</button>
        </form>
      </>
    )
  }
}
