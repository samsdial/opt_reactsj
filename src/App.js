import React, { Component } from 'react';
import logo from './logo.svg';
import logoOPT from './logo_optime.svg';
import './App.css';

/*
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

export default App;*/
class App extends Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <div className="aligner_item">
                    <img src={logo} className="App-logo App-logo-react" alt="logo" />
                    <h2> Bienvenidos a el curso de Reactjs</h2>
                    <h2> Props</h2>
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
