import React from "react";
import data from "../data.js";
import "./components.css";

const Map = () => {
  console.log(data);
  return (
    <div className="wrapper">
      {/* <div className="row">
        <span className="no-top-down" />
        <span className="top-down" />
      </div>
      <div className="row">
        <span className="no-left-right" />
        <span className="room">1</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">0</span>
        <span className="left-right" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="top-down" />
      </div> */}
      <div className="row">
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
      </div>
      <div className="row">
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">087</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">071</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">077</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">019</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
      </div>
      <div className="row">
        <span className="no-left-right" />
        <span className="room">161</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">074</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">047</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">043</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">010</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">023</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">026</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">055</span>
        <span className="no-left-right" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
      </div>
      <div className="row">
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">065</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">058</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">001</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">000</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">004</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">013</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">015</span>
        <span className="no-left-right" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
      </div>
      <div className="row">
        <span className="no-left-right" />
        <span className="room">162</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">067</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">016</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">008</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">002</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">003</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">005</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">024</span>
        <span className="no-left-right" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
      </div>
      <div className="row">
        <span className="no-left-right" />
        <span className="room">171</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">061</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">056</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">007</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">006</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">009</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">011</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">017</span>
        <span className="no-left-right" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
      </div>
      <div className="row">
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">049</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">029</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">021</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">012</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
      </div>
      <div className="row">
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">079</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">045</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="room">025</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">018</span>
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
        <span className="no-left-right" />
        <span className="no-room" />
        <span className="no-left-right" />
      </div>
      <div className="row">
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
        <span className="no-top-down" />
      </div>

      {/* <div className="row">
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
      </div>
      <div className="row">
        <span className="left-right" />
        <span className="room">0</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">0</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">0</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">0</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">0</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">0</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">0</span>
        <span className="left-right" />
        <span className="left-right" />
        <span className="room">0</span>
        <span className="no-left-right" />
      </div>
      <div className="row">
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
        <span className="top-down" />
      </div> */}
    </div>
  );
};

export default Map;
