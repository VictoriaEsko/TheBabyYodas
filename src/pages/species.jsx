import { useState, useEffect } from "react";

export default function fetchSpecies() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/species/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        console.log(data.results[0]);
      });
  }, []);

  let url = window.location.pathname;
  console.log(url);

  if (url === "/species") {
    return (
      <>
        {data &&
          data.map((species) => (
            <>
              <p>{species.name}</p>
              <p>{species.classification}</p>
              <br />
            </>
          ))}
      </>
    );
  }
}
