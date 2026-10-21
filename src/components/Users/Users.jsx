import { mockData } from "../mockData";
import { useState } from "react";

export default function Users(username, email) {
  const usernameL = mockData.map(username);
  const emailL = mockData.map(email);
  const user = [usernameL, emailL];
  return user;
}
