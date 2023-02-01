import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchData() {
  const [data, setData] = useState("");
  const [array, setArray] = useState(null)

  let id = [
    "people", 
    "planets", 
    "films", 
    "species", 
    "vehicles", 
    "starships"
  ];

  const fetchId = async () => {
    const res = await axios.get(`https://swapi.dev/api/${id[array]}/`);
    setData(res.data);
    console.log(res);
  };

  useEffect(() => {
   if (array !== null) {
     fetchId() 
   }
 
  }, [array]);

  return (
    <>
      <button onClick={() => setArray(0)}>people</button>
      <button onClick={() => setArray(1)}>planet</button>
      <button onClick={() => setArray(2)}>films</button>
      <button onClick={() => setArray(3)}>species</button>
      <button onClick={() => setArray(4)}>vehicles</button>
      <button onClick={() => setArray(5)}>starships</button>
    </>
  )
}
