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

import React from 'react';
import logo from './CorkBoardLogo.png';
import './App.css';
import NavBar from './components/NavBar.js'
import Button from './components/Button.js'

function App() {
  return (
    <>
      <header>
        <a href="/">
          <img className="logo" src={logo}></img>
        </a>
        <NavBar></NavBar>
        <div>
          <Button text="Login" url="/login"></Button>
        </div>
      </header>
    </>
  );
}

export default App;
