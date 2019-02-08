import React from "react";
import Room from "./Room";
import North from "./North";
import South from "./South";
import East from "./East";
import West from "./West";
import "./components.css";

const Node = props => {
  const { room } = props;
  return (
    <div>
      {Object.values(room).map(neighbor => (
        <div>
          <div className="row">
            {neighbor.n === undefined ? (
              <North north={"no-top-down"} />
            ) : (
              <North north={"top-down"} />
            )}
          </div>
          <div className="row">
            {neighbor.w === undefined ? (
              <West west={"no-left-right"} />
            ) : (
              <West west={"left-right"} />
            )}
            <Room room={"room"} roomName={Object.keys(room).map(k => k)} />
            {neighbor.e === undefined ? (
              <East east={"no-left-right"} />
            ) : (
              <East east={"left-right"} />
            )}
          </div>
          <div className="row">
            {neighbor.s === undefined ? (
              <South south={"no-top-down"} />
            ) : (
              <South south={"top-down"} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Node;
