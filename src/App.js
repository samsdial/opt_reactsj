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
                      <h4>
                          Introduccion a jsk
                      </h4>
                      <a href="https://babeljs.io/repl/"> BABLE repl</a>
                      <p>
                          <br/>
                          Origen Facebook
                          Liberada en GitBut 2013
                      </p>

                      <pre class="pre1">
                          const element = &lt;h1&gt;hello, world&lt;/h1&gt;; <br/>
                          const image = &lt;img src= /img&gt;; <br/>

                        </pre>
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
