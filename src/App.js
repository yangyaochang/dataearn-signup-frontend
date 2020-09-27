import React, { Component } from 'react'
import Signup from './components/Signup'
import Background from './components/Background'
import '../node_modules/loaders.css/loaders.css'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='signup-container'>
          <Signup/>
          <div className='copyright'>
            © 2020 Copyright DataEarn LLC
          </div>
        </div>
        <Background/>
      </div>
    );
  }
}

export default App;
