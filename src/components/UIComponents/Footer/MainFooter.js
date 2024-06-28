// import React, { useLayoutEffect } from "react";

import "./MainFooter.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const MainFooter = (props) => {
  return <footer className="main-footer">{props.children}</footer>;
};

export default MainFooter;
