import React, { Component } from 'react';
import logo from './logo.png';
import './styles.css';

class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Gevorg Martirosyan portfolio
          </p>
        </header>
      </div>
    );
  }
}

export default Index;
