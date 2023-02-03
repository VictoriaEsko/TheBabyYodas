import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import {MdKeyboardArrowDown} from "react-icons/md"

export default function dropDown() {
  const [state, setState] = useState(false);

  return (
    <div
      onClick={() => {
        setState(!state);
      }}
      className={`category + ${state ? "category-open" : "category-close"}`}
      
    >
      <h2>Choose category </h2>
      <MdKeyboardArrowDown />
      <div>
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
