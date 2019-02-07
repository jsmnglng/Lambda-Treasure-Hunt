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
      room_id: 0,
      coordinates: "",
      exits: [],
      cooldown: 0,
      input: "",
      // traversalPath: [],
      stack: []
    };
    this.graph = { 0: { n: "?", s: "?", e: "?", w: "?" } };
    this.traversalPath = [];
    this.stack = [];
  }

  componentDidMount() {
    if (localStorage.hasOwnProperty("graph")) {
      let value = JSON.parse(localStorage.getItem("graph"));
      console.log("VALUE", value);
      this.graph = value;
      console.log("THIS.GRAPH CDM", this.graph);
    }

    if (localStorage.hasOwnProperty("traversalPath")) {
      let value = JSON.parse(localStorage.getItem("traversalPath"));
      console.log("VALUE", value);
      this.traversalPath = value;
      console.log("THIS.TRAVERSAL CDM", this.traversalPath);
    }

    if (localStorage.hasOwnProperty("stack")) {
      let value = JSON.parse(localStorage.getItem("stack"));
      console.log("VALUE", value);
      this.stack = value;
      console.log("THIS.STACK CDM", this.stack);
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

  oppositeDir = d => {
    const directions = {
      n: "s",
      s: "n",
      e: "w",
      w: "e"
    };
    return directions[d];
  };

  sample = array => {
    return array[Math.floor(Math.random() * array.length)];
  };

  traverseMap = () => {
    // e.preventDefault();
    const { input } = this.state;
    // const data_input = { direction: input };

    let current_room_exits = this.graph[this.state.room_id];
    // console.log(this.graph[this.state.room_id]);
    console.log("CURRENT ROOM EXITS", current_room_exits);
    const unexplored_exits = [];

    for (let exit in current_room_exits) {
      if (current_room_exits[exit] === "?") {
        unexplored_exits.push(exit);
      }
      console.log("EXIT", exit);
    }

    let exit = "";
    if (input) {
      exit = input;
    } else {
      exit = this.sample(unexplored_exits);
    }
    // let exit = input;
    console.log("EXIT INPUT", exit);
    const data_input = { direction: exit };
    if (unexplored_exits.length !== 0) {
      console.log("UNEXPLORED EXITS", unexplored_exits);
      let prev_room_id = this.state.room_id;
      if (["n", "s", "e", "w"].includes(exit)) {
        // const traversalPath = this.state.traversalPath.slice();
        this.traversalPath.push(exit);
        this.stack.push(exit);
        console.log("THIS TRAVERSAL PATH", this.traversalPath);
        // console.log("STACK", this.state.stack)
        axios
          .post(`${baseURL}/move`, data_input, config)
          .then(res => {
            console.log("POST res.data BEFORE", res.data);

            this.setState({
              room_id: res.data.room_id,
              coordinates: res.data.coordinates,
              exits: res.data.exits,
              // cooldown: res.data.cooldown,
              input: ""
            });
            console.log("POST res.data AFTER", res.data);
            console.log("RES.DATA.EXITS", res.data.exits);
            const moves = {};
            res.data.exits.forEach(exit => {
              moves[exit] = "?";
            });
            console.log("MOVES", moves);
            // console.log("ROOM ID", room_id);
            console.log("RAW ROOM ID", res.data.room_id);
            // this.moves[this.oppositeDir(exit)] = prev_room_id;
            console.log("THIS.GRAPH", this.graph);
            this.graph[prev_room_id][exit] = res.data.room_id;
            this.graph[res.data.room_id] = moves;
            console.log("PREV ROOM ID", prev_room_id);
            this.graph[res.data.room_id][this.oppositeDir(exit)] = prev_room_id;
            console.log("THIS.GRAPH AFTER", this.graph);
            localStorage.setItem("graph", JSON.stringify(this.graph));
            localStorage.setItem(
              "traversalPath",
              JSON.stringify(this.traversalPath)
            );
            localStorage.setItem("stack", JSON.stringify(this.stack));
          })
          .catch(err => console.log(err));
      }
    } else {
      if (this.state.stack) {
        console.log("TOUCHED");
        let prev_exit = this.stack.pop();
        let opp_input = this.oppositeDir(prev_exit);
        const opp_data_input = { direction: opp_input };
        axios.post(`${baseURL}/move`, opp_data_input, config).then(res => {
          this.setState({
            room_id: res.data.room_id,
            coordinates: res.data.coordinates,
            exits: res.data.exits,
            cooldown: res.data.cooldown,
            input: ""
          });
          this.traversalPath.push(opp_input);
        });
      }
    }
  };

  generateMap = e => {
    e.preventDefault();
    if (this.stack.length !== 0) {
      console.log("COOLDOWN", this.state.cooldown);
      setInterval(this.traverseMap, 15 * 1000);
      // clearInterval(interval);
    } else {
      console.log("Traversal Complete");
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

        <form onSubmit={this.generateMap}>
          {/* <button type="submit">Generate Map</button> */}
          <label>Move to: </label>
          <input type="text" value={input} onChange={this.handleInputChange} />
          {/* <button type="submit" onClick={this.traverseMap}> */}
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}

export default MapTraversal;
