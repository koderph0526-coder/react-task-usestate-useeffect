import { useState, useEffect } from "react";
// import PointsCounter from "./PointsCounter";
import styles from "./CookieClicker.module.css";

export default function CookieClicker() {
  const [cookiCounter, setCookieCount] = useState(0);
  // const pointUp = setCookieCount((prev) => prev + 1);
  // PointsCounter;
  return (
    <>
      {/* As the button tag is from the ex, I will see if I can change the buttons background to avoid a weird design, if not I'd like to change the button to be a figure instead */}
      <button
        className={styles.cookieBtn}
        // style={{ width: "60px", border: "none", borderRadius: "45%" }}
        onClick={() => setCookieCount((prev) => prev + 1)}
      >
        <img
          // style={{ width: "100%" }}
          src="/cookie.png"
          alt="Image of a Coookie"
        />
      </button>
      <p>Your Points: {cookiCounter}</p>
    </>
  );
}
