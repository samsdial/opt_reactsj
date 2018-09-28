import React, { Component } from 'react';
import logo from './PHP-logo.png';
import logoOPT from './logo_optime.svg';
import './App.css';
class App extends Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <div className="aligner_item">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2> Bienvenidos a el curso de PHP 3.0</h2>
                    <h2> El Futuro es Ahora</h2>
                  </div>
              </header>
              <section>
                  <p></p>
              </section>
              <footer className="App-footer">
                  <div className="aligner_item">
                      <h3> Sergio A. Martinez</h3>
                      <img src={logoOPT} className="App-logo" alt="logo" />
                  </div>
              </footer>
          </div>
      );

  }
}

export default App;
