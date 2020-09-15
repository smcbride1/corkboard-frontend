import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './CorkBoardLogo.png';
import './App.css';
import NavBar from './components/NavBar.js';
import Button from './components/Button.js';
import Home from './components/Home.js';
import Board from './components/Board.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import ProfileNav from './components/ProfileNav.js';

export function App(props) {
  return (
    <>
      <header>
        <a href="/">
          <img className="logo" src={logo}></img>
        </a>
        <NavBar></NavBar>
        <div>
          {props.loggedIn ? <ProfileNav user={props.user}/> : <Button type="link" text="Login" path="/login"></Button>}
        </div>
      </header>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/boards" component={Board}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Router>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
      loggedIn: state.user.loggedIn,
      user: state.user
  };
};
 
export default connect(
  mapStateToProps
)(App);
