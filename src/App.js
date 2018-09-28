import React, { Component } from 'react';
import logo from './logo.svg';
import logoOPT from './logo_optime.svg';
import './App.css';
/*Classic Function*/
/*function Hello (props) {
 return <h2>{props.title}</h2>
 }*/
/*Arrow functions sintaxis */
//const Hello = (props) => <h2>{props.title}</h2>
/*ECMas 13*/
/*class Hello extends Component{
    render (){
        return <h2>{this.props.title}</h2>
    }
}*/


class App extends Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <div className="aligner_item">
                    <img src={logo} className="App-logo App-logo-react" alt="logo" />
                    <h2> Bienvenidos a el curso de Reactjs</h2>
                    <h2> Componentes</h2>
                  </div>
              </header>
              <section className="content">
                  <div className="aligner_item">
                      {/*<Hello title="Hola Optime"/>*/}
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
