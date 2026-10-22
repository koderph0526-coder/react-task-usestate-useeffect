import { useState, useContext, useEffect } from "react";

import "./App.css";
import CookieClicker from "./components/CookieClicker/CookieClicker";
// import CatFacts from "./components/CatFact/CatFacts";
import CatFactsApi from "./components/CatFact/CatFacts";
// import Users from "./components/Users/Users";
// import styles from "/CookieClicker.module.css";

function App() {
  const [count, setCount] = useState();
  // const [cookiCount, setCookieCount] = useState(0);
  // const pointUp = setCookieCount((prev) => prev + 1);

  return (
    <>
      <CookieClicker />
      <CatFactsApi />
      {/* <Users /> */}
    </>
  );
}

export default App;
