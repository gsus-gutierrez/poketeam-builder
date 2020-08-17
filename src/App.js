import React from 'react';
import pokeball from './pokeball.svg';
import './App.css';
import Pokelist from "./components/Pokelist"
import Pokemon from './components/Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball} className="App-logo" alt="logo" />
        <h1>
          This is a pokemon team building App.
        </h1>
        <Pokemon/>
        
      </header>
    </div>
  );
}

export default App;
