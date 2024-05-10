import { useState } from "react";

function DropDown() {
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");

  function handleSelectedOption(e) {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    const messages = {
      option1: "Hi, You selected Option1",
      option2: "Hi, You selected Option2",
      option3: "Hi, You selected Option3",
      option4: "Hi, You selected Option4",
    };

    setMessage(messages[selectedValue] || "");
  }

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectedOption}>
        <option value="">Select an option</option>
        <option value="option1">Option1</option>
        <option value="option2">Option2</option>
        <option value="option3">Option3</option>
        <option value="option4">Option4</option>
      </select>
      {message && <p>{message}</p>}
    </div>
  );
}
export default DropDown;
