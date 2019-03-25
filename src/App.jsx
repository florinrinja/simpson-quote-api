import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateCharact  from  './GenerateCharact';
import  DisplayCharact  from  './DisplayCharact';


const  sampleCharact = {
  quote:  "I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection:  "Right",
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charact:  sampleCharact
    };
  }
  getCharact() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          charact:  data[0],
        });
    });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
        <GenerateCharact  selectCharact={() =>  this.getCharact()}  />
        <DisplayCharact  charact={this.state.charact}  />
        </body>
      </div>
    );
  }
}

export default App;
