import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchData() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
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

  if(url === "/starships"){
    return(
      <>
    {data && data.map((starships) => (
      <>
      <p>{starships.name}</p>
      <p>{starships.model}</p>
      <p>halloj</p>
      </>
    ))}
    </>
    )
  } 
}