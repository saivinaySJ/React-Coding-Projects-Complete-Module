import React from "react";
import { useState } from "react";

/*
function TwoInputsDisplayResultInConsole() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function handleFname(e) {
    setFname(e.target.value);
  }

  function handleLname(e) {
    setLname(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(fname + lname);
    //  console.log(lname);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter FirstName"
        value={fname}
        onChange={handleFname}
      />
      <input
        type="text"
        placeholder="Enter LastName"
        value={lname}
        onChange={handleLname}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default TwoInputsDisplayResultInConsole;

 */

function TwoInputsDisplayResultInConsole() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(firstName + " " + lastName);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter firstName.."
        value={firstName}
        onChange={handleFirstName}
      />
      <input
        type="text"
        placeholder="Enter LastName.."
        value={lastName}
        onChange={handleLastName}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default TwoInputsDisplayResultInConsole;
