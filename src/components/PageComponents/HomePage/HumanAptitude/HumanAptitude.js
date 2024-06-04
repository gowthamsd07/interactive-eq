import React from "react";

import "./HumanAptitude.scss";

import VideoAnalysisVideo from "../../../../assets/images/home/video-analysis.png";

const HumanAptitude = () => {
  return (
    <section className="ieq-aptitude section-padding-top">
      <div className="container">
        <div className="ieq-aptitude__title">
          <h1 className="text-white text-center">What is human aptitude?</h1>
          <p className="text-secondary subtitle-1 text-center">
            IQ measures intelligence. EQ measures emotional intelligence. Human
            aptitude is the application of EQ to job candidate evaluation.
          </p>
        </div>
        <div className="mt-120">
          <img
            className="w-100"
            src={VideoAnalysisVideo}
            alt="Video Anlysis on human aptitude"
          />
        </div>
      </div>
    </section>
  );
};

export default HumanAptitude;
