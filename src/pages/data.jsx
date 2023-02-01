import { useState, useEffect } from "react";
// import axios from "axios";

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

  const fetchApi = async () => {
    const res = await axios.get(`https://swapi.dev/api`);
    setData(res.data);
    console.log(res);
  };

  useEffect(() => {
   if (array !== null) {
     fetchId() 
   }
 
  }, [array]);

  return <div></div>;
}
