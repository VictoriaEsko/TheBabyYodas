import { useState, useEffect } from "react";

export default function fetchVehicles() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        // console.log(data.results[0]);
      });
  }, []);

  let url = window.location.pathname;
  console.log(url);

  if (url === "/vehicles") {
    return (
      <>
        {data &&
          data.map((vehicles) => (
            <div key={vehicles.url}>
              <p>{vehicles.name}</p>
              <p>{vehicles.model}</p>
              <br />
            </div>
          ))}
      </>
    );
  }
}
