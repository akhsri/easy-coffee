import React from "react";
import { Router, Route, NavLink, HashRouter } from "react-router-dom";

import AddBeverageModal from "./AddBeverageModal";
import BeverageItem from "../beverages/BeverageItem";
import Beverages from "../beverages/Beverages";
import AboutUs from "../beverages/AboutUs";

const AppNavbar = () => {
  return (
    <HashRouter>
      <nav>
        <div className="nav-wrapper">
          <NavLink to="#" className="brand-logo right">
            Logo
          </NavLink>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <NavLink to="/">Cafe Menu</NavLink>
            </li>
            <li>
              <NavLink to="#">Cafe Finder/ Cafe Locator</NavLink>
            </li>
            <li>
              <NavLink to="/add-beverage-modal" className="nav-link">
                Add Beverage
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <switch>
        <Route exact path="/" component={Beverages} />
        <Route path="/add-beverage-modal" component={AddBeverageModal} />
        <Route path="/about-us" component={AboutUs} />
      </switch>
      <style>
        {`
        .nav-wrapper {
          background-color: white;
        }
         nav ul li a {
          color: red;
        }

        nav ul li a:hover {
          background-color: white;
          
          
        
          
        }

        `}
      </style>
    </HashRouter>
  );
};

// const navStyle = {
//   position: "fixed",
//   top: "0",
//   overflow: "hidden",
//   width: "100%"
// };

export default AppNavbar;
