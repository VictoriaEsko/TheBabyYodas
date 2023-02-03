import { useState, useEffect } from "react";

export default function fetchVehicles() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);

      });
  }, []);

  let url = window.location.pathname;
  console.log(url);

  if (url === "/vehicles") {
    return (
      <>
      <h1 className="pageTitle">Vehicles</h1>
      <div className="cards">
        {data &&
          data.map((vehicles) => (
            <div className="card vehicles" key={vehicles.url}>
            <ul className="cardItems">
              <li className="cardItem">Name: {vehicles.name}</li>
              <li className="cardItem">Model: {vehicles.model}</li>
              <li className="cardItem">Cargo Capacity:{vehicles.cargo_capacity}</li>
              <li className="cardItem">Consumables: {vehicles.consumables}</li>
              <li className="cardItem">Cost In Credits: {vehicles.cost_in_credits}</li>
              <li className="cardItem">Length: {vehicles.length}</li>
              <li className="cardItem">Manufacturer: {vehicles.manufacturer}</li>
              <li className="cardItem">Max Atmosphering Speed: {vehicles.max_atmosphering_speed}</li>
              <li className="cardItem">Passenger: {vehicles.passengers}</li>
              <li className="cardItem">Crew: {vehicles.crew}</li>
            </ul>
            </div>
          ))}
      </div>
      </>
    );
  }
}
