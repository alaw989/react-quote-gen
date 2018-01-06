import React, { Component } from "react";
import "./App.css";
import Quote from "./Quote.js";
import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.35em 1em;
  background: #000;
  color: red;
  border: 2px solid red;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.5s;
  font-family: 'Fjalla One', sans-serif;
  &:hover {
    background-color: red;
    border: 2px solid #000;
    color: black;
  }
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount() {
    const url = "http://api.icndb.com/jokes/random";
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        const joke = data.value.joke;
        const newJoke = joke.replace(/&quot;/g, '"');
        const finalJoke = '"' + newJoke + '"';
        this.setState({ data: finalJoke });
      });
  }

  changeQuote() {
    const url = "http://api.icndb.com/jokes/random";
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        const joke = data.value.joke;
        const newJoke = joke.replace(/&quot;/g, '"');
        const finalJoke = '"' + newJoke + '"';
        this.setState({ data: finalJoke });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Quote joke={this.state.data} />
        <Button onClick={this.changeQuote}>New Quote</Button>
      </div>
    );
  }
}

export default App;
