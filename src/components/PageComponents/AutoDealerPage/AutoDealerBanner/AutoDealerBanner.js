import React from "react";

import "./AutoDealerBanner.scss";

import AutoDealerBannerimg from "../../../../assets/images/auto-dealer/auto-dealer-banner.png";
import { Reveal, Tween } from "react-gsap";

const AutoDealerBanner = () => {
  return (
    <section className="ieq-auto-banner z-index-2 position-relative bg-surface section-padding-bottom">
      <div className="container">
        <Reveal>
          <Tween
            from={{ y: "30px", opacity: 0 }}
            to={{ y: "0px", opacity: 1 }}
            duration={1}
            ease="Power1.out(1.7)"
          >
            <h6 className="text-primary text-center">Auto dealers</h6>
          </Tween>
        </Reveal>
        <Reveal>
          <Tween
            from={{ y: "30px", opacity: 0 }}
            to={{ y: "0px", opacity: 1 }}
            duration={1.5}
            ease="Power1.out(1.7)"
          >
            <h1 className="text-primary display-3 text-center">
              No bad apples
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
              src={AutoDealerBannerimg}
              alt="Auto dealer banner"
            />
          </Tween>
        </Reveal>
        <div className="mt-80">
          <p className="text-secondary h6r  ieq-auto-banner__desc">
            Technical systems can be taught. Finding empathetic collaborators is
            challenging. Human aptitude is key, both on the lot and at the desk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutoDealerBanner;
