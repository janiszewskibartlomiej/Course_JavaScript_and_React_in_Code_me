import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Name from './Name'
import Interval from './Cycle'
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title titleText="Moja Aplikacja"/>
        <Name style={{color:'red'}}
          titleText="Bart"/>
        <Interval style={{color:'red'}}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{fontWeight:'bold', fontSize: '19px'}}>
          Tu można wstawić jakiś własny kompoment z danymi - to nie jest kod html tylko komponent react
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
