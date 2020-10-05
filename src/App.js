import React from 'react';
import './App.css';
import Breakfast from './breakfast.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Breakfast Drinking="Tea" Eating="Parata"/>     
      </header>
    </div>
  );
}

export default App;
