import { useState } from "react";
/*
function FormDisplay() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [display, setDisplay] = useState(false);
  const [dataList, setDatalist] = useState([]);

  function handleFname(e) {
    setFname(e.target.value);
  }
  function handleLname(e) {
    setLname(e.target.value);
  }

  function handleAdd(e) {
    e.preventDefault();
    const newData = { id: Date.now(), fname, lname };
    setDatalist([...dataList, newData]);
    setDisplay(true);
    setFname("");
    setLname("");
  }
  function handleClear(e) {
    e.preventDefault();
    setFname("");
    setLname("");
  }
  function handleDelete(id) {
    const updatedList = dataList.filter((data) => data.id !== id);
    setDatalist(updatedList);
  }
  return (
    <div>
      <label>FirstName:</label>
      <input
        type="text"
        name="firstName"
        value={fname}
        onChange={handleFname}
      />
      <label>LastName:</label>
      <input type="text" name="lastName" value={lname} onChange={handleLname} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear</button>
      <p>
        {display &&
          dataList.map((data) => (
            <div>
              <h1>
                {data.fname}
                {data.lname}
              </h1>
              <button onClick={() => handleDelete(data.id)}>delete</button>
            </div>
          ))}
      </p>
    </div>
  );
}
export default FormDisplay;

 */

import React from "react";

function FormDisplay() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [display, setDisplay] = useState(false);
  const [dataList, setDatalist] = useState([]);

  function handleFname(e) {
    setFname(e.target.value);
  }

  function handleLname(e) {
    setLname(e.target.value);
  }

  function handleAdd(e) {
    e.preventDefault();
    const newData = { id: Date.now(), fname, lname };
    setDatalist([...dataList, newData]);
    setDisplay(true);
    setFname("");
    setLname("");
  }

  function handleClearAll(e) {
    e.preventDefault();
    setDatalist([]);
    setFname("");
    setLname("");
  }

  function handleDelete(id) {
    const updatedList = dataList.filter((data) => data.id !== id);
    setDatalist(updatedList);
  }
  return (
    <div>
      <label>Fname:</label>
      <input
        type="text"
        placeholder="Enter firstname..."
        value={fname}
        onChange={handleFname}
      />
      <label>Lname:</label>
      <input
        type="text"
        placeholder="Enter LastName..."
        value={lname}
        onChange={handleLname}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClearAll}>Clear All</button>
      <p>
        {display &&
          dataList.map((data) => {
            return (
              <div>
                <h1>
                  {data.fname} {data.lname}
                </h1>
                <button onClick={() => handleDelete(data.id)}>❌</button>
              </div>
            );
          })}
      </p>
    </div>
  );
}

export default FormDisplay;
