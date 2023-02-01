import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchData() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://swapi.dev/api/species/')
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

  if(url === "/species"){
    return(
      <>
    {data && data.map((species) => (
      <>
      <p>{species.name}</p>
      <p>{species.classification}</p>
      <p>halloj</p>
      </>
    ))}
    </>
    )
  } 
}