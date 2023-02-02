import { useState, useEffect } from "react";

export default function fetchFilms() {
  const [data, setData] = useState("");
  const [ modal, setModal ] = useState(false);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        // console.log(data.results[0]);
      });
  }, []);

  console.log("hej")
  //   useEffect(() => {
  //   fetch('https://swapi.dev/api/')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data.results);
  //       console.log(data.results);
  //     });
  // }, []);
  let url = window.location.pathname;
  //console.log(url);

  for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', function() {
      console.clear();
      console.log("You clicked:", this.innerHTML);
    });
  }

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
              <li className="cardItem">Opening Crawl: <button className="modalBtn" onClick={() =>
              setModal(!modal)}>See Content</button> </li>
            </ul>
            <div className={`modal ${modal ? "active" : "inactive"}`}>
                <h2>{films.title}</h2>
                <p>{films.opening_crawl}</p>
                <button className="modalBtn" onClick={() => setModal(!modal)}>Close</button>
            </div>
            </div>
          ))}
      </div>
    );
  }
}
