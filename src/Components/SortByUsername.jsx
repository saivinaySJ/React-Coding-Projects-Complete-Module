import { useState, useEffect } from "react";
function SortByUsername() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  function handleAscendingSort() {
    const users = [...userData].sort((a, b) =>
      a.username.localeCompare(b.username)
    );
    setUserData(users);
  }
  function handleDescendingSort() {
    const users = [...userData].sort((a, b) =>
      b.username.localeCompare(a.username)
    );
    setUserData(users);
  }
  return (
    <div>
      <h2>Example for arranging usernames in ascending adn descending order</h2>
      <button onClick={() => handleAscendingSort()}>Short by Ascending</button>
      <button onClick={() => handleDescendingSort()}>
        Short by Descending
      </button>
      {userData.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
}
export default SortByUsername;
