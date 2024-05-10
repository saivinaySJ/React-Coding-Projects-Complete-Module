// ////////////////////////////here in this Example we are manually creating array of items and implementing search bar
import React, { useEffect } from "react";
import { useState } from "react";

/*
const items = [
  "apple",
  "Banana",
  "Cherry",
  "Dates",
  "Elephant",
  "fox",
  "Grapes",
  "harsha",
];
function SearchBar() {
  const [searchItem, setSearchItem] = useState("");

  function handleSearchItems(e) {
    setSearchItem(e.target.value);
  }

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search an Item here...."
        value={searchItem}
        onChange={handleSearchItems}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;

 */

// ///////////////////////////////////////////////////////////////////////////////
// Let's search an items from an API

function SearchBar() {
  const [searchItem, setSearchItem] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search an items..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
