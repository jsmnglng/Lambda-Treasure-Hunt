import React from "react";
import Room from "./Room";
import North from "./North";
import South from "./South";
import East from "./East";
import West from "./West";
import Node from "./Node";
import data from "../data";
import "./components.css";

const rooms = [
  { 0: { n: 10, s: 2, e: 4, w: 1 } },
  { 1: { e: 0 } },
  { 2: { n: 0, s: 6, e: 3 } },
  { 3: { s: 9, e: 5, w: 2 } },
  { 4: { n: 23, e: 13, w: 0 } }
];

const MapVisual = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      {rooms.map(room => (
        <Node room={room} />
      ))}
    </div>
  );
};

export default MapVisual;
