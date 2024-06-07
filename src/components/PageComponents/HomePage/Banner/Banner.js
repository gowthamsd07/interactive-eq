import React, { useLayoutEffect } from "react";

import BannerVideo from "../../../../assets/images/home/interactive-eq-banner-video.png";

import "./Banner.scss";
import Button from "../../../UIComponents/Buttons/Buttons";
import IconSet from "../../../UIComponents/IconSet/IconSet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomeBanner = () => {
  useLayoutEffect(() => {
    let cty = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".ieq-banner",
        id: "pin-sec",
        // markers: true,
        scrub: true,
        start: "50px top",
        end: "100% top",
        // pinSpacing: true,
        pinSpacer: true,
        anticipatePin: 1,
        pin: true,
      });
    });

    return () => cty.revert();
  });
  return (
    <section className="ieq-banner">
      {/* <div className="container"> */}
      <div className="ieq-banner__content">
        <h1 className="display-3 text-center">
          Hiring technology that accounts for humanity.
        </h1>
        <Button size="large" tertiary>
          Watch a Demo
          <IconSet bg="bg" iconName="play" />
        </Button>
        <div className="ieq-banner__video">
          <img src={BannerVideo} alt="interactive eq banner video animation" />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default HomeBanner;
