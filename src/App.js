import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './CorkBoardLogo.png';
import './App.css';
import NavBar from './components/NavBar.js';
import Button from './components/Button.js';
import Home from './components/Home.js';
import BoardManager from './components/BoardManager.js';
import Login from './components/Login.js';

function App() {
  return (
    <>
      <header>
        <a href="/">
          <img className="logo" src={logo}></img>
        </a>
        <NavBar></NavBar>
        <div>
          <Button type="link" text="Login" path="/login"></Button>
        </div>
      </header>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/boards" component={BoardManager}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Router>
    </>
  );
}

export default App;
