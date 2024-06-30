import React from "react";
import { Link, NavLink } from "react-router-dom";

import MainFooter from "./MainFooter";
import Brandlogo from "../../../assets/images/shared/footer-logo.svg";
import "./Footer-Navigation.scss";
// import NavLinks from "../Navigation/NavLinks";

const FooterNavigation = () => {
  return (
    <MainFooter>
      <div className="container">
        <div className="footer-logo">
          <Link to="/" className="header-brand-logo">
            <img src={Brandlogo} alt="Interactive eq logo" />
          </Link>
          <p className="text-body text-secondary-l copyright-title">
            Interactive EQ Copyright © 2024
          </p>
        </div>
        <nav className="main-navigation__header-nav">
          <ul>
            <li className="text-body">
              <NavLink
                className="text-secondary-l"
                to="/recruiters"
                exact="true"
              >
                Recruiters
              </NavLink>
            </li>

            <li className="text-body">
              <NavLink
                className="text-secondary-l"
                to="/candidates"
                exact="true"
              >
                Candidates
              </NavLink>
            </li>
            <li className="text-body">
              <NavLink
                className="text-secondary-l"
                to="/solutions"
                exact="true"
              >
                Saas
              </NavLink>
            </li>
            <li className="text-body">
              <NavLink
                className="text-secondary-l"
                to="/auto-dealer"
                exact="true"
              >
                Automotive Dealerships
              </NavLink>
            </li>
          </ul>{" "}
          <ul>
            <li className="text-body">
              <NavLink className="text-secondary-l" to="/company" exact="true">
                Origin Story
              </NavLink>
            </li>

            <li className="text-body">
              <NavLink className="text-secondary-l" to="/" exact="true">
                Compliance
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="text-body">
              <NavLink className="text-secondary-l" to="/" exact="true">
                Contact us
              </NavLink>
            </li>

            <li className="text-body">
              <NavLink className="text-secondary-l" to="/" exact="true">
                Terms
              </NavLink>
            </li>
            <li className="text-body">
              <NavLink className="text-secondary-l" to="/" exact="true">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </MainFooter>
  );
};

export default FooterNavigation;
