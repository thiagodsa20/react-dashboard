import React, { Component } from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/resumo/Resumo';
import Consultas from './components/consultas/Consultas';

class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior/>
        <Resumo/>
        <Consultas/>
      </div>
    );
  }
}

export default App;
