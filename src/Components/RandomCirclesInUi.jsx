import React from "react";
import { useState } from "react";

function RandomCirclesInUi() {
  const [circles, setCircles] = useState([]);

  const maxCircles = 2;

  function handleClick(e) {
    const { clientX, clientY } = e;
    const radius = Math.floor(Math.random() * (50 - 20 + 1)) + 20;

    const newCircle = {
      x: clientX,
      y: clientY,
      radius,
    };

    if (circles.length >= maxCircles) {
      const oldestCircle = circles.shift();

      setCircles([...circles, newCircle]);
    } else {
      setCircles((prevCircles) => [...prevCircles, newCircle]);
    }
  }
  return (
    <div
      onClick={handleClick}
      style={{ height: "100vh", width: "100vw", position: "relative" }}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${circle.x - circle.radius}px`,
            top: `${circle.y - circle.radius}px`,
            width: `${circle.radius * 2}px`,
            height: `${circle.radius * 2}px`,
            border: "2px solid black",
            borderRadius: "50%",
          }}
        ></div>
      ))}
    </div>
  );
}

export default RandomCirclesInUi;
