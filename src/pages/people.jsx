import { useState, useEffect } from "react";

export default function fetchPeople() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        // console.log(data.results[0]);
      });
  }, []);

  let url = window.location.pathname;
  console.log(url);

  if (url === "/people") {
    return (
      <>
        {data &&
          data.map((people) => (
            <div key={people.url}>
              <p>{people.name}</p>
              <p>{people.mass}</p>
              <br />
            </div>
          ))}
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
