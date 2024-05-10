import React, { useState } from "react";

function InputsDisplay() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  function handleFname(e) {
    setFname(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleNumber(e) {
    setNumber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`FirstName: ${fname}`);
    alert(`Email: ${email}`);
    alert(`PhoneNumber: ${number}`);
  }
  return (
    <div>
      <h2>Three Inputs Display</h2>
      <form>
        <label>FirstName:</label>
        <input
          type="text"
          placeholder="Enter firstname..."
          value={fname}
          onChange={handleFname}
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter Email..."
          value={email}
          onChange={handleEmail}
        />
        <label>PhoneNumber:</label>
        <input
          type="number"
          placeholder="Enter Phone number..."
          value={number}
          onChange={handleNumber}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputsDisplay;
