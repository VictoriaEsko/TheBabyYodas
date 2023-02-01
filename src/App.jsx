
import { Route, Routes } from "react-router-dom"

import Start from "./pages/start";
import Data from "./pages/data";
// import DataId from "./pages/dataid";


export default function App() {
  return ( 
    <div className="App">
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/people" element={<Data />} />
      {/* <Route path="/people:id" element={<DataId/>} /> */}
      <Route path="/planets" element={<Data/>} />
      {/* <Route path="/planets:id" element={<DataId/>} /> */}
      <Route path="/species" element={<Data/>} />
      {/* <Route path="/species:id" element={<DataId/>} /> */}
      <Route path="/vehicles" element={<Data/>} />
      {/* <Route path="/vehicles:id" element={<DataId/>} /> */}
      <Route path="/starships" element={<Data/>} />
    </Routes>
    <Data/>
    </div>
  );
}
