import React, { Component } from "react";
import axios from "axios";

const baseURL = "https://lambda-treasure-hunt.herokuapp.com/api/adv";

class MapTraversal extends Component {
  state = {};

  componentDidMount() {
    this.init();
  }

  init = () => {
    const config = {
      headers: {
        Authorization: `Token ${process.env.REACT_APP_API_KEY}`
      }
    };

    axios
      .get(`${baseURL}/init/`, config)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return <h1>Map Traversal</h1>;
  }
}

export default MapTraversal;
