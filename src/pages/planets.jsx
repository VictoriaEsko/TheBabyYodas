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
      <h1 className="pageTitle">Planets</h1>
      <div className="cards">
        {data &&
          data.map((planets) => (
            <div key={planets.url} className="card planets" >
            <ul className="cardItems">
              <li className="cardItem">Name: {planets.name}</li>
              <li className="cardItem">Gravity: {planets.gravity}</li>
              <li className="cardItem">Climate: {planets.climate}</li>
              <li className="cardItem">Population: {planets.population}</li>
              <li className="cardItem">Terrain: {planets.terrain}</li>
              <li className="cardItem">Rotation Period: {planets.rotation_period}</li>
              <li className="cardItem">Orbital Period: {planets.orbital_period}</li>
              <li className="cardItem">Surface Water: {planets.surface_water}</li>
              <li className="cardItem">Diameter: {planets.diameter}</li>
            </ul>
            </div>
          ))}
      </div>
      </>
    );
  }
}
