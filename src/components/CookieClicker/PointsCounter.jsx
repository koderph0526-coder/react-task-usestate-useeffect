//COuld I use this as a math component for the cookieclicker and drag the component into the cookieClicker component?
//a child component(?) to CookieClicker.jsx -> doing this to practice sending props with useState and useContext.
import { createContext, useContext, useState, useEffect } from "react";

const CookieContext = createContext();

export default function PointsCounterProvider() {
  const [count, setCount] = useState(0);
  return <>
    {/* const PointCount.Provider */}
  </>;
}
