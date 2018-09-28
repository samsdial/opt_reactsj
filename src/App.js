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
                          Conceptos Básicos
                      </h4>
                      <ul className="text_left">
                          <li>Componentes</li>
                          <li>Props</li>
                          <li>State</li>
                      </ul>
                      <p>
                          librería de javascript para crear interfaces de usuario.
                          <br/>
                          Origen Facebook
                          Liberada en GitBut 2013
                      </p>
                      <h4> Caracteristicas </h4>
                      <p>
                          Declarativo y basado en componentes
                          indicamos el QUÉ, y no el CÓMO
                      </p>
                      <pre class="pre1">
                          // imperativo
                          ve a la Cocina <br/>
                          Abre la nevera <br/>
                          Coge el pollo de la nevera <br/>
                          ... // más pasos <br/>
                          prepara la mesa <br/>
                          lleva la comida a la mesa <br/>

                          //Declarativo <br/>
                          Quiero cenar pollo <br/>
                        </pre>
                        <h4>Basado en Componentes</h4>
                      <ul className="text_left">
                          <li>Divide la interfaz de - a +</li>
                          <li>Puedes crear nuevos componentes</li>
                          <li>Cada componente encapsula su estado</li>
                          <li>Codigo reusable, pequeño y mantenible</li>
                      </ul>
                      <h4>La programación Reactiva</h4>
                      <ul className="text_left">
                          <li>Reaccciona según el cambio de estado</li>
                      </ul>

                      <h4>Virutal DOM u diffing</h4>
                      <div className="text_left">
                          Genera una copia del árbol de elementos de DOM para hacer los minimos cambios necesarios para reflejar el estado de nuestros componentes.
                      </div>

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
