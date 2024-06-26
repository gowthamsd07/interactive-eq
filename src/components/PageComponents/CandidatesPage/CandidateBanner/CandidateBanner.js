import React from "react";

import CandidateBannerimg from "../../../../assets/images/candidates/candidates-banner.png";

import "./CandidateBanner.scss";

const CandidatesBanner = () => {
  return (
    <section className="ieq-candidate-banner bg-surface ">
      <div className="container">
        <h6 className="text-primary text-center">Candidates</h6>
        <h1 className="text-primary display-3 text-center">
          Ready to stand out?
        </h1>
        <img
          className="mt-80 w-100"
          src={CandidateBannerimg}
          alt="Auto dealer banner"
        />
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
