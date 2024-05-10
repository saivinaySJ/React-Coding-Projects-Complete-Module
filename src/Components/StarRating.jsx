import { useState } from "react";
const EMPTY_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
const FULL_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  function handleHoveredStar(hoveredStar) {
    setHoveredRating(hoveredStar);
  }

  function handleStarClick(clickedStar) {
    setRating(clickedStar);
  }

  function handleMouseLeave() {
    setHoveredRating(0);
  }

  function handleReset() {
    setRating(0);
  }
  function renderStars() {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starImageUrl =
        i <= (hoveredRating || rating) ? FULL_STAR : EMPTY_STAR;

      stars.push(
        <img
          key={i}
          src={starImageUrl}
          alt={`Star:${i}`}
          onMouseEnter={() => handleHoveredStar(i)}
          onClick={() => handleStarClick(i)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "pointer", width: "100px", height: "100px" }}
        />
      );
    }
    return stars;
  }
  return (
    <div>
      <p>Hover it and rate the star:</p>
      {renderStars()}
      <p>Your rating:{rating}</p>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}
export default StarRating;
