import React from "react";
import { useEffect } from "react";
import { useState } from "react";

/*
function UserTableDisplay() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => console.log("Error While fetching data", err));
  }, []);
  return (
    <div>
      <h3>User Data In A Table:</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>Id's</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Company name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}> 
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTableDisplay;

 */

function UserTableDisplay() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>User Data In Table</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTableDisplay;
