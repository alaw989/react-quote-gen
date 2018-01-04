import React, { Component } from "react";
import "./App.css";
import "./Quote.js"

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    const url = "http://api.icndb.com/jokes/random";
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        const joke = data.value.joke;
        this.setState({data: joke})
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random Quote Generator</h1>
        </header>
        
        <p className="quote">
          {this.state.data}
        </p>
      </div>
    );
  }
}

export default App;
