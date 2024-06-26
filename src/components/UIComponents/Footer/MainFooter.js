import React, { useLayoutEffect } from "react";

import "./MainFooter.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const MainFooter = (props) => {
  // magic
  useLayoutEffect(() => {
    let cty = gsap.context(() => {
      // gsap.set(".main-footer", {
      //   opacity: 0,
      // });
      gsap.to(".main-footer", {
        opacity: 1,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".main-footer",
          // markers: true,
          id: "img-1",
          scrub: false,
          start: "3000px top",
          end: "4000px top",
          toggleActions: "play none none reverse",
        },
      });
    });
    return () => cty.revert();
  });
  return <footer className="main-footer">{props.children}</footer>;
};

export default MainFooter;
