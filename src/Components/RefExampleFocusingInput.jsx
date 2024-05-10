import React from "react";
import { useRef } from "react";

function RefExampleFocusingInput() {
  const myInputRef = useRef(null);
  function inputFocus() {
    myInputRef.current.focus();
  }
  return (
    <div>
      <input type="text" placeholder="Type something" ref={myInputRef} />
      <button onClick={inputFocus}>Focus Input</button>
    </div>
  );
}

export default RefExampleFocusingInput;
