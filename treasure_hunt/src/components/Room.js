import React from "react";
import "./components.css";

const Room = props => {
  const { room, roomName } = props;
  return <span className={room}>{roomName}</span>;
};

export default Room;
