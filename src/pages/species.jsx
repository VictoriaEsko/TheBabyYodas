import { useState, useEffect } from "react";

export default function fetchSpecies() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/species/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  let url = window.location.pathname;
  console.log(url);

  if (url === "/species") {
    return (
      <>
      <h1 className="pageTitle">Species</h1>
      <div className="cards">
        {data &&
          data.map((species) => (
            <div className="card species" key={species.url}>
            <ul className="cardItems">
              <li className="cardItem">Name: {species.name}</li>
              <li className="cardItem">Classification: {species.classification}</li>
              <li className="cardItem">Average Heigth: {species.average_heigth}</li>
              <li className="cardItem">Average Lifespan: {species.avarage_lifespan}</li>
              <li className="cardItem">Designation: {species.designation}</li>
              <li className="cardItem">Eye Color:{species.eye_colors}</li>
              <li className="cardItem">Hair Color: {species.hair_colors}</li>
              <li className="cardItem">Language: {species.language}</li>
              <li className="cardItem">Skin Color: {species.skin_colors}</li>
            </ul>
            </div>
          ))}
      </div>
      </>
    );
  }
}
