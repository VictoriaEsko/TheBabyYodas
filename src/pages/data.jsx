import { useEffect, useState } from "react";
import axios from "axios";

export default function data() {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const res = await axios.get(`https://swapi.dev/api/`);
    setData(res.data);
    console.log(res)
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
  <div>
  </div>)
};

