import { Route, Routes, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import DropDown from "../components/dropDown";

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
    console.log(res.data);
  };
  // const fetchpeople = async () => {
  //   const resp = await axios.get(`https://swapi.dev/api/people/`)
  //   setData(resp.data)
  //   console.log(resp.data);
  // }

  useEffect(() => {
   if (array !== null) {
     fetchId() 
   }
 
  }, [array]);
  let urlShit = window.location.pathname//.split("/")//.slice(-2)[0]
  // console.log(urlShit)
  // console.log(id[1])
  
  // let idOne = id
  // console.log(idOne)

  return (
    <>
     <div>
      {urlShit === "/people" && (
        <>
        <p>personerna</p>
        </>
      )}
      {urlShit === "/planets" && (
        <p>planeterna </p>
      )}
     </div>
       {/* <button onClick={() => setArray(0)}>people</button>
       <button onClick={() => setArray(1)}>planet</button>
       <button onClick={() => setArray(2)}>films</button>
       <button onClick={() => setArray(3)}>species</button>
       <button onClick={() => setArray(4)}>vehicles</button>
       <button onClick={() => setArray(5)}>starships</button>
    */}
    </>
  )
}

