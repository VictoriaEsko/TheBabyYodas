// import { useState } from "react";
import { Route, Routes } from "react-router-dom"
import Data from "./pages/data";
// import Id from "./pages/dataid"
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
      <Data/>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/data" element={<Data />} />
      <Route path="/people" element={<Data />} />
      <Route path="/planets" element={<Data/>} />
      <Route path="/films" element={<Films/>} />
      <Route path="/species" element={<Species/>} />
      <Route path="/starships" element={<Starships/>} />
      <Route path="/vehicles" element={<Vehicles/>} />
    </Routes>
    </div>
  );
}
console.log("hello")

export default App;
