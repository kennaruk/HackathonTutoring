import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Body';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cached: '',
      someTxt: 'Boom'
    }
  }
  componentDidMount() {
    const cachedHit = localStorage.getItem('data');
    if(cachedHit)
      this.setState({
        cached: cachedHit
      });
  }

  handleClickLogo = () => {
    localStorage.setItem('data', "DATA AENG");
    this.setState({
      someTxt: "Ken"
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Body 
          handleClick={this.handleClickLogo}
          someTxt={this.state.someTxt}
        />
      </div>
    );
  }
}

export default App;
