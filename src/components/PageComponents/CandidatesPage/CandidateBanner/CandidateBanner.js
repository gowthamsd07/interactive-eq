import React from "react";

import CandidateBannerimg from "../../../../assets/images/candidates/candidates-banner.png";

import "./CandidateBanner.scss";
import { Reveal, Tween } from "react-gsap";

const CandidatesBanner = () => {
  return (
    <section className="ieq-candidate-banner bg-surface ">
      <div className="container">
        <Reveal>
          <Tween
            from={{ y: "30px", opacity: 0 }}
            to={{ y: "0px", opacity: 1 }}
            duration={1}
            ease="Power1.out(1.7)"
          >
            <h6 className="text-primary text-center">Candidates</h6>
          </Tween>
        </Reveal>
        <Reveal>
          <Tween
            from={{ y: "30px", opacity: 0 }}
            to={{ y: "0px", opacity: 1 }}
            duration={1}
            ease="Power1.out(1.7)"
          >
            <h1 className="text-primary display-3 text-center">
              Ready to stand out?
            </h1>
          </Tween>
        </Reveal>

        <Reveal>
          <Tween
            from={{ y: "40px", opacity: 0 }}
            to={{ y: "0px", opacity: 1 }}
            duration={1}
            ease="Power1.out(1)"
          >
            <img
              className="mt-80 w-100"
              src={CandidateBannerimg}
              alt="Auto dealer banner"
            />
          </Tween>
        </Reveal>
        <div className="mt-80">
          <p className="text-secondary h6r  ieq-candidate-banner__desc">
            An impressive resume is no longer enough to distinguish yourself as
            a candidate. Employers seek candidates with the right qualifications
            and the emotional quotient (EQ) that drives workplace success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CandidatesBanner;
