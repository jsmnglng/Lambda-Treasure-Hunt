import React, { Component } from "react";
import axios from "axios";

const baseURL = "https://lambda-treasure-hunt.herokuapp.com/api/adv";
const config = {
  headers: {
    Authorization: `Token ${process.env.REACT_APP_API_KEY}`
  }
};

class MapTraversal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // graph: { 0: { n: "?", s: "?", e: "?", w: "?" } },
      room_id: 0,
      coordinates: "",
      exits: [],
      cooldown: 0,
      input: ""
    };
    this.graph = {};
    this.moves = {};
  }

  componentDidMount() {
    if (localStorage.hasOwnProperty("graph")) {
      let value = JSON.parse(localStorage.getItem("graph"));
      this.setState({ graph: value });
    }
    this.getLocation();
  }

  getLocation = () => {
    axios
      .get(`${baseURL}/init/`, config)
      .then(res => {
        console.log("GET res.data", res.data);
        this.setState({
          room_id: res.data.room_id,
          coordinates: res.data.coordinates,
          cooldown: res.data.cooldown,
          exits: res.data.exits
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ input: e.target.value });
  };

  // moveSubmit = e => {
  //   e.preventDefault();
  //   const { input, room_id, reverseDir, graph } = this.state;
  //   const data_input = { direction: input };

  //   if (["n", "s", "e", "w"].includes(input)) {
  //     axios
  //       .post(`${baseURL}/move`, data_input, config)
  //       .then(res => {
  //         console.log("POST res.data BEFORE", res.data);

  //         this.setState({
  //           room_id: res.data.room_id,
  //           coordinates: res.data.coordinates,
  //           exits: res.data.exits,
  //           cooldown: res.data.cooldown,
  //           input: ""
  //         });
  //       })
  //       .catch(err => console.log(err));
  //   }
  // };

  oppositeDir = d => {
    const directions = {
      n: "s",
      s: "n",
      e: "w",
      w: "e"
    };
    return directions[d];
  };

  generateMap = e => {
    e.preventDefault();
    const { input } = this.state;
    const data_input = { direction: input };
    const traversalPath = [];
    // const stack = [];
    // const newGraph = { ...graph };
    this.graph[this.state.room_id] = { n: "?", s: "?", e: "?", w: "?" };

    let current_room_exits = this.graph[this.state.room_id];
    console.log("CURRENT ROOM EXITS", current_room_exits);
    const unexplored_exits = [];

    for (let exit in current_room_exits) {
      if (current_room_exits[exit] === "?") {
        unexplored_exits.push(exit);
      }
      console.log("EXIT", exit);
    }

    let exit = input;
    if (unexplored_exits) {
      let prev_room_id = this.state.room_id;
      if (["n", "s", "e", "w"].includes(exit)) {
        traversalPath.push(exit);
        // stack.push(exit);
        axios
          .post(`${baseURL}/move`, data_input, config)
          .then(res => {
            console.log("POST res.data BEFORE", res.data);

            this.setState({
              room_id: res.data.room_id,
              coordinates: res.data.coordinates,
              exits: res.data.exits,
              cooldown: res.data.cooldown,
              input: ""
            });
            console.log("POST res.data AFTER", res.data);

            this.state.exits.forEach(exit => {
              this.moves[exit] = "?";
            });
            console.log("MOVES", this.moves);
            // console.log("ROOM ID", room_id);
            console.log("RAW ROOM ID", this.state.room_id);
            // this.moves[this.oppositeDir(exit)] = prev_room_id;
            console.log("THIS.GRAPH", this.graph);
            this.graph[prev_room_id][exit] = this.state.room_id;
            this.graph[this.state.room_id] = { ...this.moves };
            console.log("PREV ROOM ID", prev_room_id);
            this.graph[this.state.room_id][
              this.oppositeDir(exit)
            ] = prev_room_id;
          })
          .catch(err => console.log(err));
      }

      // console.log("GRAPH", graph);
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

        <form onSubmit={this.generateMap}>
          {/* <button type="submit">Generate Map</button> */}
          <label>Move to: </label>
          <input type="text" value={input} onChange={this.handleInputChange} />
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}

export default MapTraversal;
