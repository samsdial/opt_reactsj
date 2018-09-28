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
                    <h2> Stage</h2>
                  </div>
              </header>
              <section className="content">
                  <div className="aligner_item">

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
