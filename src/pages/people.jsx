import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchData() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
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

  if(url === "/people"){
    return(
      <>
    {data && data.map((people) => (
      <>
      <p>{people.name}</p>
      <p>{people.mass}</p>
      <p>halloj</p>
      </>
    ))}
    </>
    )
  } 

  // return (
  //   <>
  //     {data && data.map((people) => (
  //       <>
  //       <p>{people.name}</p>
  //       <p>{people.mass}</p>

  //       </>
  //     ))}
  //   </>
  //   <>
  //   {data && data.map((people) => (
  //     <>
  //     </>
  //   ))}
  //   </>
  // )

  
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

