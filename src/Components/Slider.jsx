import { useState } from "react";

const data = [
  "https://images.unsplash.com/photo-1565772838491-cbeb32fac6ca?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww",
  "https://images.unsplash.com/photo-1614983652406-41044db11dc6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww",
  "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww",
  "https://images.unsplash.com/photo-1620052581237-5d36667be337?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww",
];

function Slider() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  function handleNext() {
    const nextBtn =
      activeImageIndex + 1 >= data.length ? 0 : activeImageIndex + 1;
    setActiveImageIndex(nextBtn);
  }
  function handlePrevious() {
    const prevBtn =
      activeImageIndex - 1 < 0 ? data.length - 1 : activeImageIndex - 1;
    setActiveImageIndex(prevBtn);
  }
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <button onClick={handlePrevious}>Previous</button>
      <img src={data[activeImageIndex]} alt="Images from data array" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
export default Slider;
