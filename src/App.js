import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './CorkBoardLogo.png';
import './App.css';
import NavBar from './components/NavBar.js';
import Button from './components/Button.js';
import Home from './components/Home.js';
import BoardManager from './components/BoardManager.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import ProfileNav from './components/ProfileNav.js';
import * as actions from './actions.js'

export class App extends Component {
  authenticate = () => {
    fetch('http://localhost:4000/current_user', {
    credentials: 'include'
    })
          .then(response => response.json())
          .then(data => {
            if (data.error) {
              this.props.setLoggedIn(false)
            } else {
              this.props.setUser(data)
              this.props.setLoggedIn(true)
            }
      });
  }

  componentDidMount() {
    this.authenticate();
  }

  handleLogOut = () => {
    fetch('http://localhost:4000/logout', {
            method: 'POST', // or 'PUT'
            credentials: 'include'
            })
            .then(response => {
            window.location.href = "/login";
        });
  }

  render() {
    return (
      <>
        <header>
          <a href="/">
            <img className="logo" src={logo}></img>
          </a>
          <NavBar></NavBar>
          <div>
            {this.props.loggedIn ? <ProfileNav user={this.props.user} handleLogOut={this.handleLogOut}/> : <Button type="link" text="Login" path="/login"></Button>}
          </div>
        </header>
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/boards" component={this.props.loggedIn ? BoardManager : Login}></Route>
          <Route path="/boards/:boardId" component={this.props.loggedIn ? BoardManager : Login}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Router>
      </>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
      loggedIn: state.user.loggedIn,
      user: state.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      setUser: (user) => dispatch(actions.setUser(user)),
      setUserName: (name) => dispatch(actions.setUserName(name)),
      setUserEmail: (email) => dispatch(actions.setUserEmail(email)),
      setLoggedIn: (loggedIn) => dispatch(actions.setLoggedIn(loggedIn))
  };
};
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);