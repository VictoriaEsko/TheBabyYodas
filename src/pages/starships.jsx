import { useState, useEffect } from "react";

export default function fetchStarships() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        // console.log(data.results[0]);
      });
  }, []);

  let url = window.location.pathname;
  console.log(url);

  if (url === "/starships") {
    return (
      <>
      <h1 className="pageTitle">Starships</h1>
      <div className="cards">
        {data &&
          data.map((starships) => (
            <div className="card starships" key={starships.url}>
            <ul className="cardItems">
              <li className="cardItem">Name: {starships.name}</li>
              <li className="cardItem">Model: {starships.model}</li>
              <li className="cardItem">Cargo Capacity:{starships.cargo_capacity}</li>
              <li className="cardItem">MGLT: {starships.MGLT}</li>
              <li className="cardItem">Consumables: {starships.consumables}</li>
              <li className="cardItem">Cost In Credits: {starships.cost_in_credits}</li>
              <li className="cardItem">Hyperdrive Rating: {starships.hyperdrive_rating}</li>
              <li className="cardItem">Length: {starships.length}</li>
              <li className="cardItem">Crew: {starships.crew}</li>
              <li className="cardItem">Manufacturer: {starships.manufacturer}</li>
              <li className="cardItem">Max Atmosphering Speed: {starships.max_atmosphering_speed}</li>
              <li className="cardItem">Passenger: {starships.passengers}</li>
              <li className="cardItem">Starship Class: {starships.starship_class}</li>
            </ul>
            </div>
          ))}
      </div>
      </>
    );
  }
}
