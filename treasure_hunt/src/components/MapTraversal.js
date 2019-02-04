import React, { Component } from "react";
import axios from "axios";

const baseURL = "https://lambda-treasure-hunt.herokuapp.com/api/adv";
const config = {
  headers: {
    Authorization: `Token ${process.env.REACT_APP_API_KEY}`
  }
};

class MapTraversal extends Component {
  state = {
    graph: { 0: { n: "?", s: "?", e: "?", w: "?" } },
    room_id: 0,
    coordinates: "",
    exits: [],
    input: ""
  };

  componentDidMount() {
    this.init();
  }

  init = () => {
    axios
      .get(`${baseURL}/init/`, config)
      .then(res => {
        console.log("GET res.data", res.data);
        this.setState({
          room_id: res.data.room_id,
          coordinates: res.data.coordinates,
          exits: res.data.exits
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };

  moveSubmit = e => {
    e.preventDefault();
    const { input } = this.state;
    const data_input = { direction: input };

    switch (input.toLowerCase()) {
      case "n":
      case "s":
      case "e":
      case "w":
        axios
          .post(`${baseURL}/move`, data_input, config)
          .then(res => {
            console.log("POST res.data", res.data);
            this.setState({
              room_id: res.data.room_id,
              coordinates: res.data.coordinates,
              exits: res.data.exits,
              input: ""
            });
          })
          .catch(err => console.log(err));
        return;
      default:
        return;
    }
  };

  render() {
    const { room_id, exits, coordinates, input } = this.state;
    const room_exits = exits.join(" ").toUpperCase();

    return (
      <div>
        <h1>Room {room_id}</h1>
        <h2>Coordinates: {coordinates}</h2>
        <h2>Exits: {room_exits}</h2>

        <form onSubmit={this.moveSubmit}>
          <label>Move to: </label>
          <input type="text" value={input} onChange={this.handleInputChange} />
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}

export default MapTraversal;
