
import { Route, Routes } from "react-router-dom"

import Start from "./pages/start";
import People from "./pages/people";
import Films from "./pages/films";
import Planets from "./pages/planets";
import Species from "./pages/species";
import Starships from "./pages/starships";
import Vehicles from "./pages/vehicles";



export default function App() {
  return ( 
    <div className="App">
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/people" element={<People />} />
      <Route path="/planets" element={<Planets/>} />   
      <Route path="/species" element={<Species/>} />
      <Route path="/vehicles" element={<Vehicles/>} />
      <Route path="/starships" element={<Starships/>} />
      <Route path="/films" element={<Films/>} />
    </Routes>
    </div>
  );
}
