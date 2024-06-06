import React from "react";

import "./HumanAptitude.scss";

import HumanAptitudeVideo from "../../../../assets/images/home/human-aptitude-placeholder.mp4";

const HumanAptitude = () => {
  return (
    <section className="ieq-aptitude section-padding-top">
      <div className="container">
        <div className="ieq-aptitude__title">
          <h1 className="text-white text-center">Deeper than a resume</h1>
          <p className="text-secondary subtitle-1 text-center">
            Look beyond job titles, work samples, and social profiles. Now you
            can objectively measure a true differentiator.
          </p>
        </div>
        <div className="pt-120">
          <video autoPlay muted loop>
            <source src={HumanAptitudeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HumanAptitude;
