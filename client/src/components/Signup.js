import React, { Component } from 'react'
import { signup } from '../services/auth';
import './style.css'

export default class Signup extends Component {

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
    signup(username, password)
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
          // redirect to /user'sroom
          this.props.history.push('/room');
        }

      })
  }

  render() {
    return (
      <>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
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
          <button type='submit'>Signup</button>
        </form>
      </>
    )
  }
}
