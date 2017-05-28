import React, { Component } from 'react';
import logo from './images/nimble_logo.png';
import ApplicantTable from './components/ApplicantTable.js'
import './stylesheets/App.css';
import APPLICANTS from './bootstrap_data/data_v2.json';  // data_v2 is an expanded version of data to make it a litte more interesting

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <a href="/"><img src={logo} className="app-logo" alt="Nimble logo" /></a>
        </div>
        <div className="container">
          <ApplicantTable applicants={APPLICANTS} />
        </div>
      </div>
    );
  }
}

export default App;
