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
      <div className="cards">
        {data &&
          data.map((planets) => (
            <div key={planets.url} className="card" >
              <p>{planets.name}</p>
              <p>{planets.gravity}</p>
              <p>{planets.climate}</p>
              <p>{planets.population}</p>
              <p>{planets.terrain}</p>
              <p>{planets.rotation_period}</p>
              <p>{planets.orbital_period}</p>
              <p>{planets.surface_water}</p>
              <p>{planets.diameter}</p>
              <br />
            </div>
          ))}
      </div>
    );
  }
}
