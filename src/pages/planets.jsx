import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchPlanets() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
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

  if(url === "/planets"){
    return(
      <>
    {data && data.map((planets) => (
      <>
      <p>{planets.name}</p>
      <p>{planets.gravity}</p>
      <p>halloj</p>
      </>
    ))}
    </>
    )
  } 
}