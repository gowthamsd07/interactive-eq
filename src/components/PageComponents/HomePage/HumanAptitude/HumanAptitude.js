import React, { useLayoutEffect } from "react";

import "./HumanAptitude.scss";

import HumanAptitudeVideo from "../../../../assets/images/home/human-aptitude-placeholder.mp4";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Col, Row } from "antd";

gsap.registerPlugin(ScrollTrigger);
const HumanAptitude = () => {
  let mm = gsap.matchMedia();

  useLayoutEffect(() => {
    let cty = gsap.context(() => {
      mm.add("(min-width: 1200px)", () => {
        gsap.set(".video-wrap", {
          opacity: 0.5,
          scale: 0.7,
        });

        ScrollTrigger.create({
          trigger: ".video-wrap",
          id: "pin-mark",
          // markers: true,
          scrub: 3,
          start: "-15% top",
          end: "150% top",
          pinSpacing: false,
          pinSpacer: false,
          anticipatePin: 1,
          immediateRender: false,
          pin: true,
        });

        gsap.to(".video-wrap", {
          opacity: 1,
          scale: 1,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".ieq-aptitude",
            // markers: true,
            id: "img-1",
            scrub: 3,
            start: "-40% top",
            end: "0% top",
          },
        });

        gsap.to(".video-wrap", {
          opacity: 0.5,
          scale: 0.7,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".ieq-aptitude",
            // markers: true,
            id: "img-2",
            scrub: 3,
            start: "40% top",
            end: "60% top",
          },
        });
      });
    });
    ScrollTrigger.refresh();
    return () => cty.revert();
  });
  return (
    <section className="ieq-aptitude  bg-surface z-index-2 position-relative">
      <div className="container">
        <div className="ieq-aptitude__title">
          <h3 className="text-white text-center">
            Deeper than resume and social profiles
          </h3>
          {/* <p className="text-secondary subtitle-1 text-center">
            Look beyond job titles, work samples, and social profiles. Now you
            can objectively measure a true differentiator.
          </p> */}
        </div>
        <Row>
          <Col xl={{ span: 20, offset: 2 }}>
            <div className="mt-80 video-wrap">
              <video className="w-100 h-100" autoPlay muted loop>
                <source src={HumanAptitudeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HumanAptitude;
