import React, { useLayoutEffect } from "react";

import VideoPlaceholder from "../../../../assets/images/home/section-ieqvideo.svg";
import IeqVideoFile from "../../../../assets/images/home/ieq-video.mp4";

import "./IeqVideo.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// gsap.core.globals("ScrollTrigger", ScrollTrigger);

const IeqVideo = () => {
  useLayoutEffect(() => {
    gsap.set(".mask-image", {
      scale: 20,
      duration: 2,
    });
    let cty = gsap.context(() => {
      gsap.to(".mask-image", {
        scale: 1,
        scrollTrigger: {
          trigger: ".ieq-video",
          start: "0px top",
          end: "150% top",
          scrub: 3,
          pin: true,
          pinSpacer: true,
          pinSpacing: true,
          // markers: true,
          anticipatePin: 1,
        },
      });
    });

    return () => cty.revert();
  });
  return (
    <section className="ieq-video ">
      <div className="ieq-video__wrap">
        <img
          className="w-100 mask-image"
          src={VideoPlaceholder}
          alt="Ieq video"
        />
        <video autoPlay muted loop>
          <source src={IeqVideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default IeqVideo;
