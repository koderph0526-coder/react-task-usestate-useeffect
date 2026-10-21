import { useState, useEffect } from "react";
// import PointsCounter from "./PointsCounter";
// import styles from "/CookieClicker.module.css";

export default function CookieClicker() {
  const [cookiCounter, setCookieCount] = useState(0);
  // const pointUp = setCookieCount((prev) => prev + 1);
  // PointsCounter;
  return (
    <>
      <button
        className={styles.cookieImg}
        onClick={() => setCookieCount((prev) => prev + 1)}
      >
        <img src="/cookie.png" alt="Image of a Coookie" />
      </button>
    </>
  );
}
