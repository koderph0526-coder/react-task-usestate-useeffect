import { mockData } from "../mockData";
import { useState, useEffect } from "react";

export default function UsersCard(username, email) {
  const usernameL = mockData.map(username);
  const emailL = mockData.map(email);
  const user = [usernameL, emailL];
  return (
    <>
      <div></div>
    </>
  );
}

// Nope sorry, not a clue yet...
