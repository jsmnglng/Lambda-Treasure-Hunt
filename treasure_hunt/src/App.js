import React, { Component } from "react";
import "./App.css";

import MapTraversal from "./components/MapTraversal";
import MapVisual from "./components/MapVisual";
import Map from "./components/Map";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="game-info-container">
          <h1>Lambda Treasure Hunt</h1>
          <MapTraversal />
          <br />
        </div>
        <div className="map-container">
          <Map />
          {/* <MapVisual /> */}
        </div>
      </div>
    );
  }
}

export default App;
