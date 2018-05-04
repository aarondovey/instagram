import React, { Component } from 'react';
import './app.css';
import Header from './header/header';
import ProfileHeader from './profile-header/index'
import Pictures from './pictures/index'

const data = [
  {id: 1, label:"picture1"},
  {id: 2, label:"picture2"},
  {id: 3, label:"picture3"},
  {id: 4, label:"picture4"},
  {id: 5, label:"picture5"},
  {id: 1, label:"picture1"},
  {id: 2, label:"picture2"},
  {id: 3, label:"picture3"},
  {id: 4, label:"picture4"},
  {id: 5, label:"picture5"},
]

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header
          logoLabel="Instagram"
          accountLabel="logout"/>

        <div className="main">
          <ProfileHeader />
          <Pictures json={data} />
        </div>

      </div>
    );
  }
}

export default App;
