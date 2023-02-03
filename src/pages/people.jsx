import { useState, useEffect } from "react";

export default function fetchPeople() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  let url = window.location.pathname;
  console.log(url);

  if (url === "/people") {
    return (
      <>
      <h1 className="pageTitle">People</h1>
      <div className="cards">
        {data &&
          data.map((people) => (
            <div className="card people" key={people.url}>
            <ul className="cardItems">
              <li className="cardItem">Name: {people.name}</li>
              <li className="cardItem">Birth Year: {people.birth_year}</li>
              <li className="cardItem">Gender: {people.gender}</li>
              <li className="cardItem">Skin Color: {people.skin_color}</li>
              <li className="cardItem">Height: {people.height} cm</li>
              <li className="cardItem">Mass: {people.mass} kg</li>
              <li className="cardItem">Hair Color: {people.hair_color}</li>
              <li className="cardItem">Eye Color: {people.eye_color}</li>
            </ul>
            </div>
          ))}
      </div>
      </>
    );
  }
}
