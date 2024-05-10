import { useState } from "react";

function AddingCirclesOnClickButton() {
  const [circles, setCircels] = useState([]);
  const [circleCount, setCircleCount] = useState(0);

  const fixedRadius = 50;

  function handleAddButtonClick() {
    const y = 20 + circleCount * (fixedRadius * 2 + 10);
    const x = 10;

    const newCircle = {
      x,
      y,
      radius: fixedRadius,
      id: Date.now(),
    };
    setCircels((prevCircle) => [...prevCircle, newCircle]);
    setCircleCount(circleCount + 1);
  }
  function handleCircleClick(id) {
    setCircels((prevCircle) => prevCircle.filter((circle) => circle.id !== id));
    setCircleCount(circleCount - 1);
  }
  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <button onClick={handleAddButtonClick}>Add Circles</button>
      <div>
        <p>CircleCount:{circleCount}</p>
      </div>
      {
        <div style={{ position: "absolute", top: "50px" }}>
          {circles.map((circle) => (
            <div
              key={circle.id}
              style={{
                position: "absolute",
                left: `${circle.x}px`,
                top: `${circle.y}px`,
                height: `${circle.radius * 2}px`,
                width: `${circle.radius * 2}px`,
                border: "2px solid black",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() => handleCircleClick(circle.id)}
            ></div>
          ))}
        </div>
      }
    </div>
  );
}
export default AddingCirclesOnClickButton;
