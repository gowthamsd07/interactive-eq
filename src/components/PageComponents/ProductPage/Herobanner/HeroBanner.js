import React from "react";

import BannerBg from "../../../../assets/images/product/product-banner-bg.png";

import "./HeroBanner.scss";
import Button from "../../../UIComponents/Buttons/Buttons";

const HeroBanner = () => {
  return (
    <section className="ieq-product-banner bg-surface">
      <img
        className="ieq-product-banner__bg"
        src={BannerBg}
        alt="product banner background"
      />
      <div className="ieq-product-banner__content">
        <h1 className="display-3 text-center text-white">
          The star employee finder
        </h1>
        <p className="text-center text-secondary">
          Interactive EQ is a talent recruitment platform that leverages
          full-motion film production to measure EQ and soft skills.
        </p>
        <Button size="large" primary>
          Request Demo
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
