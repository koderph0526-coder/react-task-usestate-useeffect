import { useState, useEffect } from "react";

// Gotta admit I have ZERO clue what I'm doing here currently...

export default function CatFactsApi() {
  const catUrl = "https://catfact.ninja/facts?";
  //As I gotta admit that I don't feel like I know what I'm doing I'm testing a code from google copilot, adjusting it to fit the rest of my code.
  //Managing data, loading and error in three different useStates:
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const randIndex = [Math.floor(Math.random() * 10)];
  const [index, setIndex] = useState(randIndex);
  //data = empty [] to be ready to recieve the data in a safe manner(?), also it's part of making sure the component runs/mounts only once each time the code is asked to run(button)(?)
  //loading = true, as it'll start to load the data immediatly.
  //And error = null, meaning "no error yet" as starting point.

  useEffect(() => {
    //Async function to esure that there's enought time to allow the code to be read and fetch the data.
    const fetchData = async () => {
      try {
        const res = await fetch(catUrl);

        //Failsafe error checker, to see if the network response is successful (should give 200-299):
        if (!res.ok) {
          throw new Error(`Error! Status: ${res.status}`);
        }

        const result = await res.json();
        //saving the parsed data
        setData(result);
      } catch (err) {
        //This should handle network error status and/or non 200-299 codes.
        setError(err.message);
      } finally {
        setLoading(false); //This turns of the loading only when the data is done being loaded(?)
      }
    };
    fetchData();
  }, []); //Empty dependency array to ensure the code runs once when mounted

  if (loading) return <p>Loading Data...</p>;
  if (error) return <p>Error: {error}</p>;

  // console.log(data);
  // data[0].fact;

  // console.log(randIndex);
  return (
    <>
      <h3>Here's some cat facts</h3>
      {/* I'd like the text itself to be the button, when hovered over css will make it clear that it is a button */}
      <button
        onClick={() => setIndex(randIndex)}
        style={{ width: "450px", padding: "10px;" }}
      >
        {data.data[index].fact}
      </button>
    </>
  );
}
