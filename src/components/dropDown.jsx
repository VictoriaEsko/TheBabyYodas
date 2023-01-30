import React, {useState, useEffect} from "React";

export default function dropDown() {
    const [state, setState] = useState(false);
  
  //   const toggle = ()=>{
  //     setState(!state);
  //   }
       
      return (
          <div onClick={()=>{
              setState(!state)
          }} className={`category + ${state ? "category-open" : "category-close"}`}>
           <h2>Catalog </h2>
        <div>
          {/* <button onClick={toggle} className={`toggle-btn + ${state ? "toggle-close" : "toggle-open"}`}>
          Category
          </button> */}
          <div className={`menu-list + ${state ? "menu-open" : "menu-close"}`}>
              <ul>
                  <li><a href="">People</a></li>
                  <li><a href="">Planets</a></li>
                  <li><a href="">Films</a></li>
                  <li><a href="">Species</a></li>
                  <li><a href="">Vehicles</a></li>
                  <li><a href="">Starships</a></li>
              </ul>
          </div>
      </div>
      </div>
    
      );
    };
    console.log("hej hej hej") 
  