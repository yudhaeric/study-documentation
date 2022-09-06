import React, { Component } from 'react';
import './App.css';

function Profile(props) {
  return <span>Your Age {props.age}</span>
}

function Greetings(props) {
  return <h1>Hi, {props.name} - <Profile age={props.age}/></h1>
}

class App extends Component {
  render() {
    return (
      <Greetings name="Eric" age="20"/>
    )
  }
}

export default App;
