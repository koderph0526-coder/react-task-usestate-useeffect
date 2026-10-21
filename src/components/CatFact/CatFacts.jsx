import { useState, useEffect } from "react";
const catUrl = "https://catfact.ninja/facts?limit=5";

// Gotta admit I have ZERO clue what I'm doing here currently...

export default function CatFacts(catUrl) {
  if (url === "https://catfact.ninja/facts?limit=5") {
    fetch(catUrl)
      .then((res) => res.json())
      .then((data) => CatFacts(data))
      .catch((err) => console.error("Cannot find the link", err));
  } else {
    console.log("could not fetch data from API");
  }
  return <></>;
}
