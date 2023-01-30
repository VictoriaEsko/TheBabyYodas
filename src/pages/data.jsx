import { useEffect, useState } from "react";
import axios from "axios";

export default function starWarsData() {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const res = await axios.get(`https://swapi.dev/api/`);
    setData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return <div></div>;
}
