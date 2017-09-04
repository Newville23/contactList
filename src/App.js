import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends Component{
  render() {
     const people = ['Tyler', 'WesBos', 'Jim'];

    return(
      
        <ol>
          {
            people.map(person => (
              <li>{person}</li>
            ))
          }
          </ol>
      
    );

  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList/>
      </div>
    );
  }
}

export default App;
