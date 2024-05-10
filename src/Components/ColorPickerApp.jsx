import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "../Assets/ColorPicker.css";

function ColorPickerApp() {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [inputBackgroundColor, setInputBackgroundColor] = useState("#FFFFFF");
  function handleChangeComplete(color) {
    console.log(color);
    setSelectedColor(color.hex);
    setInputBackgroundColor(color.hex);
  }
  return (
    <div className="color-picker-app">
      <h1>Color Picker</h1>
      <SketchPicker
        color={selectedColor}
        onChangeComplete={handleChangeComplete}
      />
      <div className="color-info">
        <p>Selected Color Hex Code:{selectedColor}</p>
      </div>
      <div className="color-preview">
        <h2>This is the Color you have Choosen:</h2>
        <input type="text" style={{ backgroundColor: inputBackgroundColor }} />
      </div>
    </div>
  );
}

export default ColorPickerApp;
