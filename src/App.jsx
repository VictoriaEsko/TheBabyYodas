// import { useState } from "react";
import { Route, Routes } from "react-router-dom"

// import Dataid from "./pages/dataid"
// import DropDown from "./components/dropDown"; ska denna verkligen va här?

// Pages 
// import Start from "./pages/start"
// import People from "./pages/catPeople"
// import Planets from "./pages/catPlanets"
// import Films from "./pages/catFilms"
// import Species from "./pages/catSpecies"
// import Starships from "./pages/catStarships"
// import Vehicles from "./pages/catVehicles"
import DataId from "./pages/dataid"
import Data from "./pages/data";

function App() {
  return ( 
    <div className="App">
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/people" element={<Data />} />
      <Route path="/people:id" element={<DataId/>} />
      <Route path="/planets" element={<DataId/>} />
      <Route path="/planets:id" element={<DataId/>} />
      <Route path="/species" element={<Data/>} />
      <Route path="/species:id" element={<DataId/>} />
      <Route path="/vehicles" element={<Data/>} />
      <Route path="/vehicles:id" element={<DataId/>} />
    </Routes>
    </div>
  );
}

export default App;
