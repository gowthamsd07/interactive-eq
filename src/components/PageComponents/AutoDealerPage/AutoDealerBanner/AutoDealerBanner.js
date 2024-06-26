import React from "react";

import "./AutoDealerBanner.scss";

import AutoDealerBannerimg from "../../../../assets/images/auto-dealer/auto-dealer-banner.png";

const AutoDealerBanner = () => {
  return (
    <section className="ieq-auto-banner bg-surface section-padding-bottom">
      <div className="container">
        <h6 className="text-primary text-center">Auto dealers</h6>
        <h1 className="text-primary display-3 text-center">No bad apples</h1>
        <img
          className="mt-80 w-100"
          src={AutoDealerBannerimg}
          alt="Auto dealer banner"
        />
        <div className="mt-80">
          <p className="text-secondary h6r text-center ieq-auto-banner__desc">
            Technical systems can be taught. Finding empathetic collaborators is
            challenging. Human aptitude is key, both on the lot and at the desk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutoDealerBanner;
