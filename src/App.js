import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage/LoginPage.react';

class App extends Component {
  render() {
    return (
      <div className="App">
       <LoginPage></LoginPage>
      </div>
    );
  }
}

export default App;
