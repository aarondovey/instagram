import React, { Component } from 'react';
import './app.css';
import Header from './header/header';
import ProfileHeader from './profile-header/index'
import Pictures from './pictures/index'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header
          logoLabel="Insatgram"
          accountLabel="logout"/>

        <div className="main">
          <ProfileHeader />
          <Pictures />
        </div>

      </div>
    );
  }
}

export default App;
