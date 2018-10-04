import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueInfo from './components/venueInfo/VenueInfo';
import Highlights from './components/highlights/Highlights';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
      </div>
    );
  }
}

export default App;
