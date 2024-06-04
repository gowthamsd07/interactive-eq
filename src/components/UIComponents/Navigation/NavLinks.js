import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.scss";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li className="text-body">
        <NavLink className="text-secondary" to="/" exact="true">
          Product
        </NavLink>
      </li>
      <li className="text-body">
        <NavLink className="text-secondary" to="/solutions">
          Solutions
        </NavLink>
      </li>
      <li className="text-body">
        <NavLink className="text-secondary" to="/resources">
          Resources
        </NavLink>
      </li>
      <li className="text-body">
        <NavLink className="text-secondary" to="/contact-us">
          Contact us
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
