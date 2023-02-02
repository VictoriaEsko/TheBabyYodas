import { useState, useEffect } from "react";

export default function fetchFilms() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        // console.log(data.results[0]);
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
  let url = window.location.pathname;
  console.log(url);

  if (url === "/films") {
    return (
      <div className="cards">
        {data &&
          data.map((films) => (
            <div className="card" key={films.url}>
            <ul className="cardItems">
              <li className="cardItem">Title: {films.title}</li>
              <li className="cardItem">Episode: {films.episode_id}</li>
              <li className="cardItem">Release Date: {films.release_date}</li>
              <li className="cardItem">Producer: {films.producer}</li>
              <li className="cardItem">Director: {films.director}</li>
              <li className="cardItem">Opening Crawl: {films.opening_crawl}</li>
            </ul>
            </div>
          ))}
      </div>
    );
  }
}
