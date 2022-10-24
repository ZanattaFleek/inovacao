import React from 'react';
import logo from './logo.svg';
import './App.css';

import Cliente from './cruds/Cliente'

function App() {
  return (
    <div className="App">
      <div>Barra de Navegacao</div>
      Conteúdo do App
      <Cliente></Cliente>
    </div>
  );
}

export default App;
