import { mockData } from "../mockData";
import { useState, useEffect } from "react";
// import UserCards from "./UserCard";

export default function UsersCard(username, email) {
  const [data, setData] = useState(mockData);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  // Note ctrl + shit + arrow back or forth marks the hold word you want to delete or wrap in brackets

  function addUser() {
    setData((prev) => [
      ...prev,
      { username: newUserName, email: newUserEmail },
    ]);
    setNewUserName("");
    setNewUserEmail("");
  }
  function onUserSubmit(e) {
    e.preventDefault();
    addUser();
  }

  return (
    <>
      <div>
        <h2>Users</h2>
        <ul>
          {data.map((user, i) => (
            <li key={i}>
              {user.username} - <strong>{user.email}</strong>
            </li>
          ))}
        </ul>
        <form onSubmit={onUserSubmit}>
          <input
            value={newUserName}
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <input
            value={newUserEmail}
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setNewUserEmail(e.target.value)}
          />
          <button>Lag ny bruker</button>
        </form>
      </div>
    </>
  );
}

// Nope sorry, not a clue yet...
