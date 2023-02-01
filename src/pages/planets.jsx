import { useState, useEffect } from "react";

export default function fetchPlanets() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        // console.log(data.results[0]);
      });
  }, []);

  let url = window.location.pathname;
  console.log(url);

  if (url === "/planets") {
    return (
      <>
        {data &&
          data.map((planets) => (
            <div key={planets.url}>
              <p>{planets.name}</p>
              <p>{planets.gravity}</p>
              <br />
            </div>
          ))}
      </>
    );
  }
}
