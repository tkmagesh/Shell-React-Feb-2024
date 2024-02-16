import logo from './logo.svg';
import './App.css';
/* 
import React from 'react';
console.log(React.useState) 
*/

/* 
import * as r from 'react'
console.log(r.useState) 
*/

/* 
import { useState } from 'react';
console.log(useState) 
*/

/* 
import React, { useState } from 'react' 
*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
