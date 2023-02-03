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

// const [data, setData] = useState("");
//   const [array, setArray] = useState(null)

//   let id = [
//     "people",
//     "planets",
//     "films",
//     "species",
//     "vehicles",
//     "starships"
//   ];

//   const fetchApi = async () => {
//     const res = await axios.get(`https://swapi.dev/api/${id[array]}/`);
//     setData(res.data.results[0]);
//     console.log(res.data.results[0]);
//   };

//   useEffect(() => {
//    if (array !== null) {
//      fetchApi()
//    }

//   }, [array]);

//   return (
//     <>
//      <button onClick={() => setArray(0)}>people</button>
//      <button onClick={() => setArray(1)}>planet</button>
//      <button onClick={() => setArray(2)}>films</button>
//      <button onClick={() => setArray(3)}>species</button>
//      <button onClick={() => setArray(4)}>vehicles</button>
//      <button onClick={() => setArray(5)}>starships</button>
//    </>
//   )
