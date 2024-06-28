import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.scss";

const NavLinks = (props) => {
  const { onClose } = props;
  const onNavClick = () => {
    if (onClose) {
      onClose();
    }
  }

  return (
    <ul className="nav-links">
      <li className="text-body">
        <NavLink className="text-secondary" to="/product" exact="true" onClick={onNavClick}>
          Product
        </NavLink>
      </li>
      <li className="text-body solutions-menu-trigger">
        <div className="flex-align-center">
          <p className="text-secondary text-body">Solutions</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M4.17188 6L8.17188 10L12.1719 6"
              stroke="#A7A7A7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <ul className="solutions-dropdown">
          <li>
            <NavLink
              className="text-secondary-l text-body"
              exact="true"
              to="/recruiters"
              onClick={onNavClick}
            >
              Recruiters
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-secondary-l text-body"
              to="/candidates"
              exact="true"
              onClick={onNavClick}
            >
              Candidates
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-secondary-l text-body"
              to="/solutions"
              exact="true"
              onClick={onNavClick}
            >
              Saas
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-secondary-l text-body"
              to="/auto-dealer"
              exact="true"
              onClick={onNavClick}
            >
              Automotive Dealerships
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="text-body company-menu-trigger">
        <div className="flex-align-center">
          <p className="text-secondary text-body">Company</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M4.17188 6L8.17188 10L12.1719 6"
              stroke="#A7A7A7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <ul className="company-dropdown">
          <li>
            <NavLink
              className="text-secondary-l text-body"
              to="/company"
              exact="true"
              onClick={onNavClick}
            >
              Origin Story
            </NavLink>
          </li>
          <li>
            {/* <NavLink
                className="text-secondary-l text-body"
                to="/"
                exact="true"
              > */}
            <p className="text-secondary-l text-body">Compliance</p>
            {/* </NavLink> */}
          </li>
        </ul>
      </li>
      <li className="text-body">
        <NavLink className="text-secondary" to="/contact-us" onClick={onNavClick}>
          Contact us
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
