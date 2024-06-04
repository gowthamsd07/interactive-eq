import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import Brandlogo from "../../../assets/images/shared/interactive-eq-logo.svg";
import "./MainNavigation.scss";
import Button from "../Buttons/Buttons";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // const openDrawerHandler = () => {
  //   setDrawerIsOpen(true);
  // };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
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
          {/* <button
            className="main-navigation__menu-btn"
            onClick={openDrawerHandler}
          >
            <span />
            <span />
            <span />
          </button> */}
          <Button size="large" primary>
            Request Demo
          </Button>
        </div>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
