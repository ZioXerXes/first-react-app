import React from 'react';
import logo from './logo.svg';
import './App.css';

import product, { numbers } from './math.js'

console.log(numbers.reduce(product));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Speak <code>src/App.js</code> and do the funky mashed potato to reload. Good pizza. Scoot boot and boogie, boys, yeehaw!
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