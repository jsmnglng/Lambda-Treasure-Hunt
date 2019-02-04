import React, { Component } from "react";
import "./App.css";

import MapTraversal from "./components/MapTraversal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lambda Treasure Hunt</h1>
        <MapTraversal />
      </div>
    );
  }
}

export default App;
