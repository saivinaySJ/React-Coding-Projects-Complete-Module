import React, { useState, useRef } from "react";

function OTPInput() {
  // Define state for OTP and an array of input references
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  // Function to handle OTP input changes
  const handleChange = (index, event) => {
    const value = event.target.value;

    // Update the state with the entered digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus on the next input field
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform OTP verification or other actions here
    console.log("Submitted OTP:", otp.join(""));
  };

  function handleReset(e) {
    e.preventDefault();
    setOtp(Array(4).fill(""));
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }
  return (
    <div>
      <h3>Enter OTP</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "10px" }}>
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1} // Each input only accepts a single digit
              value={value}
              onChange={(event) => handleChange(index, event)}
              ref={(el) => (inputRefs.current[index] = el)}
              style={{ width: "40px", textAlign: "center" }}
            />
          ))}
        </div>
        <button type="submit">Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default OTPInput;
