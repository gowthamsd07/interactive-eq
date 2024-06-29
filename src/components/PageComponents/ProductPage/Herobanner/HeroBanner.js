import React from "react";

import BannerBg from "../../../../assets/images/product/product-banner-bg.png";

import "./HeroBanner.scss";
import Button from "../../../UIComponents/Buttons/Buttons";
import { Reveal, Tween } from "react-gsap";

const HeroBanner = () => {
  return (
    <section className="ieq-product-banner bg-surface">
      <Reveal>
        <Tween
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          duration={2}
          ease="Power1.out(3)"
        >
          <img
            className="ieq-product-banner__bg"
            src={BannerBg}
            alt="product banner background"
          />
        </Tween>
      </Reveal>

      <div className="ieq-product-banner__content">
        <Reveal>
          <Tween
            from={{ y: "30px", opacity: 0 }}
            to={{ y: "0px", opacity: 1 }}
            duration={1}
            ease="Power1.out(1.7)"
          >
            <h1 className="display-3 text-center text-white">
              The star employee finder
            </h1>
          </Tween>
          <Tween
            from={{ y: "30px", opacity: 0 }}
            to={{ y: "0px", opacity: 1 }}
            duration={0.8}
            ease="Power1.out(1.7)"
          >
            <p className="text-center text-secondary">
              Interactive EQ is a talent recruitment platform that leverages
              full-motion film production to measure EQ and soft skills.
            </p>
          </Tween>
          <Tween
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            duration={0.8}
            ease="Power1.out(1.7)"
          >
            <Button size="large" primary>
              Request Demo
            </Button>
          </Tween>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroBanner;
