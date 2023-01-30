import { useState } from "react";

import Data from "./pages/data";
// import Dataid from "./pages/dataid"
import DropDown from "./components/dropDown";

function App() {
  return <div className="App">
   <DropDown/> <Data />
  </div>;
}

export default App;
