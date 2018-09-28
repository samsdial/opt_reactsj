import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*Classic Function*/
/*function Hello (props) {
    return <h2>{props.title}</h2>
}*/
/*Arrow functions sintaxis */
//const Hello = (props) => <h2>{props.title}</h2>
/*ECMas 13*/
class Hello extends Component{
    render (){
        return <h2>{this.props.title}</h2>
    }
}
class Text extends Component {
    render () {
        const {
            arrayOfNumbers,
            multiply,
            objectWithInfo,
            title
        } = this.props;
        const mappedNumbers = arrayOfNumbers.map(n => n * 2);
        return (
            <div>
                {title}
                <p>{mappedNumbers.join(', ')}</p>
                <p>{this.props.objectWithInfo.key}</p>
            </div>
            );
    }
}
class App extends Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Hello title="Hola Optime"/>
              </header>
              <section>
                  <Text
                      arrayOfNumbers={[2,3,10]}
                      objectWithInfo={{ key: 'FisrtValue ', key2: 'otherValue'}}
                      multiply={(number) => number * 4}
                      number={2}
                      text='Esto es PHP 1.1.0'
                      title={ <h1> Nuestro Titulo </h1> }
                  />
              </section>
          </div>
      );

  }
}

export default App;
