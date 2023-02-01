import { useState, useEffect } from "react";

export default function fetchStarships() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        // console.log(data.results[0]);
      });
  }, []);

  let url = window.location.pathname;
  console.log(url);

  if (url === "/starships") {
    return (
      <>
        {data &&
          data.map((starships) => (
            <div key={starships.url}>
              <p>{starships.name}</p>
              <p>{starships.model}</p>
              <br />
            </div>
          ))}
      </>
    );
  }
}
