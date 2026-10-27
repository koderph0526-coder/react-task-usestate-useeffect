import { mockData } from "../mockData";
import { useState, useEffect } from "react";
// import UserCards from "./UserCard";

export default function UsersCard(username, email) {
  //Mock data fro the display of pre existing users
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const usernameL = mockData.map(username);
  const emailL = mockData.map(email);
  // const users = mockData.map(username, email);
  return (
    <>
      <div>
        <h2>Users</h2>
        <ul>
          {mockData.map((username, email) => (
            <li key={mockData}>
              {mockData.username} - <strong>{mockData.email}</strong>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// Nope sorry, not a clue yet...
