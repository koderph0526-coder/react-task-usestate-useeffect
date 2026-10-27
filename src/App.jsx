import { useState, useContext, useEffect } from "react";

import "./App.css";
import CookieClicker from "./components/CookieClicker/CookieClicker";
import CatFactsApi from "./components/CatFact/CatFacts";
import UsersCard from "./components/Users/UsersList";
// import styles from "/CookieClicker.module.css";

function App() {
  const [count, setCount] = useState();
  // const [cookiCount, setCookieCount] = useState(0);
  // const pointUp = setCookieCount((prev) => prev + 1);
  console.log(setCount);

  return (
    <>
      <CookieClicker />
      <CatFactsApi />
      <UsersCard />
    </>
  );
}

export default App;
