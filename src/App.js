import React, { Component } from 'react';
import logo from './logo.svg';
import logoOPT from './logo_optime.svg';
import './App.css';
class App extends Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <div className="aligner_item">
                    <img src={logo} className="App-logo App-logo-react" alt="logo" />
                    <h2> Bienvenidos a el curso de Reactjs</h2>
                    <h2> Estamos en el Futuro</h2>
                  </div>
              </header>
              <section className="content">
                  <div className="aligner_item">
                      <h3>¿Qué es React?</h3>
                      <ul className="text_left">
                          <li>Conceptos Básicos</li>
                          <li>Introducción A JSK</li>
                          <li>Componentes React JS</li>
                          <li>Props</li>
                          <li>State</li>
                      </ul>
                  </div>
              </section>
              <footer className="App-footer">
                  <div className="aligner_item">
                      <h3> Sergio A. Martinez</h3>
                      <img src={logoOPT} className="App-logo App-logo-opt" alt="logo" />
                  </div>
              </footer>
          </div>
      );

  }
}

export default App;
