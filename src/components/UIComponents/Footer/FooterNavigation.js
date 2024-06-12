import React from "react";
import { Link, NavLink } from "react-router-dom";

import MainFooter from "./MainFooter";
import Brandlogo from "../../../assets/images/shared/interactive-eq-logo.svg";
import "./Footer-Navigation.scss";
import NavLinks from "../Navigation/NavLinks";

const FooterNavigation = () => {
  return (
    <MainFooter>
      <div className="container">
        <div className="footer-logo">
          <Link to="/" className="header-brand-logo">
            <img src={Brandlogo} alt="Interactive eq logo" />
          </Link>
          <p className="text-body text-secondary copyright-title">
            Interactive EQ Copyright © 2024
          </p>
        </div>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        <div>
          <ul className="terms-policy-list">
            <li className="text-body">
              <NavLink className="text-secondary" to="/" exact="true">
                Terms
              </NavLink>
            </li>

            <li className="text-body">
              <NavLink className="text-secondary" to="/" exact="true">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </MainFooter>
  );
};

export default FooterNavigation;
