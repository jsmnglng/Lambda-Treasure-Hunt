import React from "react";
import "./components.css";

const Map2 = props => {
  const { north, east, south, west, room, roomName } = props;
  return (
    <div style={{ border: "1px solid red" }}>
      <div className="row">
        <span className={north} />
      </div>
      <div className="row">
        <span className={west} />
        <span className={room}>{roomName}</span>
        <span className={east} />
      </div>
      <div className="row">
        <span className={south} />
      </div>
    </div>
  );
};

export default Map2;
