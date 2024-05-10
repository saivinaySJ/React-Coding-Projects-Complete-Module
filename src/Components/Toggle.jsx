import { useState } from "react";
/*
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn(!isOn);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          backgroundColor: isOn ? "green" : "red",
          color: "white",
          fontSize: "50px",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Toggle;

 */

import React from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn(!isOn);
  }
  return (
    <div>
      <button
        onClick={handleClick}
        style={{ backgroundColor: isOn ? "green" : "red", color: "white" }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Toggle;
