import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Room from "./components/Room";
import Home from "./components/Home";
import PlantDetails from "./components/PlantDetails";
import EditPlant from "./components/EditPlant";

class App extends Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />

        <Route
          exact
          path="/"
          render={(props) => <Home setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path="/room"
          render={(props) => (
            <Room setUser={this.setUser} {...props} user={this.state.user} />
          )}
        />

        <Route
          exact
          path="/room/:id"
          render={(props) => (
            <PlantDetails
              setUser={this.setUser}
              user={this.state.user}
              {...props}
            />
          )}
        />

        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path="/room/:id"
          render={(props) => (
            <EditPlant
              setUser={this.setUser}
              user={this.state.user}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
