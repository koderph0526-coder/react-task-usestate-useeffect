import { useState } from "react";

import "./App.css";
import CookieClicker from "./components/CookieClicker/CookieClicker";
import CatFacts from "./components/CatFact/CatFacts";
import Users from "./components/Users/Users";
import styles from "/CookieClicker.module.css";

function App() {
  // const [cookiCount, setCookieCount] = useState(0);
  // const pointUp = setCookieCount((prev) => prev + 1);

  return (
    <>
      <CookieClicker />
      {/* <CatFacts /> --> One thing at the time, just adding for setup's sake*/}
      {/* <Users /> */}
    </>
  );
}

export default App;
