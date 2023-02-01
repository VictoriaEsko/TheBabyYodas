import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchVehicles() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://swapi.dev/api/vehicles/')
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        console.log(data.results[0]);
      });
  }, []);

  //   useEffect(() => {
  //   fetch('https://swapi.dev/api/')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data.results);
  //       console.log(data.results);
  //     });
  // }, []);
  let url = window.location.pathname
  console.log(url)

  if(url === "/vehicles"){
    return(
      <>
    {data && data.map((vehicles) => (
      <>
      <p>{vehicles.title}</p>
      <p>{vehicles.mass}</p>
      <p>halloj</p>
      </>
    ))}
    </>
    )
  } 
}