// import { useState } from "react";
import { Route, Routes } from "react-router-dom"
import Data from "./pages/data";
// import Dataid from "./pages/dataid"
// import DropDown from "./components/dropDown"; ska denna verkligen va här?

// Pages 
import Start from "./pages/start"
import People from "./pages/catPeople"
import Planets from "./pages/catPlanets"
import Films from "./pages/catFilms"
import Species from "./pages/catSpecies"
import Starships from "./pages/catStarships"
import Vehicles from "./pages/catVehicles"

function App() {
  return ( 
    <div className="App">
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/data" element={<Data />} />
      <Route path="/people" element={<People />} />
      <Route path="/planets" element={<Planets/>} />
      <Route path="/films" element={<Films/>} />
      <Route path="/species" element={<Species/>} />
      <Route path="/starships" element={<Starships/>} />
      <Route path="/vehicles" element={<Vehicles/>} />
    </Routes>
    </div>
  );
}

export default App;
