import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import Brandlogo from "../../../assets/images/shared/interactive-eq-logo.svg";
import "./MainNavigation.scss";
import Button from "../Buttons/Buttons";
import IconSet from "../IconSet/IconSet";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
          <Button size="large" primary>
            Request Demo
          </Button>
          <IconSet bg="" iconName="cross" />
        </nav>
      </SideDrawer>

      <MainHeader>
        <div className="container">
          <Link to="/" className="header-brand-logo">
            <img src={Brandlogo} alt="Interactive eq logo" />
          </Link>

          <nav className="main-navigation__header-nav">
            <NavLinks />
          </nav>
          <div className="flex-align-center">
            <div className="web-btn">
              <Button size="large" primary>
                Request Demo
              </Button>
            </div>
            <button
              className="main-navigation__menu-btn"
              onClick={openDrawerHandler}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
