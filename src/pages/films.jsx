import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchFilms() {
  const [data, setData] = useState("");
  const [ modal, setModal ] = useState(false);

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
      <p>Opening crawl: <button className="modal-btn" onClick={() =>
    setModal(!modal)}>see content</button></p>
      <p>halloj</p>
      </>
    ))}
    <div className={`modal ${modal ? "active" : "inactive"}`}>
        <h2>{films.title}</h2>
        <p>{films.opening_crawl}</p>
        <button className="modal-btn" onClick={() => setModal(!modal)}>Close</button>
    </div>
    </>
    )
  } 
}