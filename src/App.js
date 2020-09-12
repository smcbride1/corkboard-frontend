// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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
