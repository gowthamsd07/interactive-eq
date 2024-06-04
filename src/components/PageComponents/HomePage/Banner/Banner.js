import React from "react";

import BannerVideo from "../../../../assets/images/home/interactive-eq-banner-video.png";

import "./Banner.scss";
import Button from "../../../UIComponents/Buttons/Buttons";
import IconSet from "../../../UIComponents/IconSet/IconSet";

const HomeBanner = () => {
  return (
    <section className="ieq-banner">
      <div className="container">
        <div className="ieq-banner__content">
          <h1 className="display-3 text-center">
            Tech hiring with human perspective
          </h1>
          <Button size="large" tertiary>
            Request Demo
            <IconSet bg="bg" iconName="play" />
          </Button>
          <div className="ieq-banner__video">
            <img
              src={BannerVideo}
              alt="interactive eq banner video animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
