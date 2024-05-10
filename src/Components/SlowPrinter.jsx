import { useState, useEffect } from "react";
function SlowPrinter() {
  const [inputText, setInputText] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  function handleInputText(e) {
    setInputText(e.target.value);
    setDisplayedText("");
  }
  useEffect(() => {
    let index = 0;
    const displayInterval = setInterval(() => {
      if (index <= inputText.length) {
        setDisplayedText(inputText.substring(0, index));
        index++;
      } else {
        clearInterval(displayInterval);
      }
    }, 500);
    return () => {
      clearInterval(displayInterval);
    };
  }, [inputText]);
  return (
    <div>
      <textarea
        cols="60"
        rows="5"
        placeholder="Enter a text...."
        value={inputText}
        onChange={handleInputText}
      />
      <div>
        <strong>Displayed Text:-</strong>
        <p>{displayedText}</p>
      </div>
    </div>
  );
}
export default SlowPrinter;
