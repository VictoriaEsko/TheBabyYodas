import { Route, Routes, Link } from "react-router-dom"
import { useState } from "react";

export default function dropDown() {
  const [state, setState] = useState(false);

  //   const toggle = ()=>{
  //     setState(!state);
  //   }

  return (
    <div
      onClick={() => {
        setState(!state);
      }}
      className={`category + ${state ? "category-open" : "category-close"}`}
    >
      <h2>Catalog </h2>
      <div>
        {/* <button onClick={toggle} className={`toggle-btn + ${state ? "toggle-close" : "toggle-open"}`}>
          Category
          </button> */}
        <div className={`menu-list + ${state ? "menu-open" : "menu-close"}`}>
          <ul>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/species">Species</Link>
            </li>
            <li>
              <Link to="/starships">Starships</Link>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
