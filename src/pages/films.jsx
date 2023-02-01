import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchFilms() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
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

  if(url === "/films"){
    return(
      <>
    {data && data.map((films) => (
      <>
      <p>{films.title}</p>
      <p>{films.producer}</p>
      <p>halloj</p>
      </>
    ))}
    </>
    )
  } 
}