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
      ScrollTrigger.create({
        trigger: ".ieq-video",
        id: "pin-mark",
        // markers: true,
        scrub: 3,
        start: "0 top",
        end: "150% top",
        pinSpacing: true,
        pinSpacer: true,
        anticipatePin: 1,
        pin: true,
      });

      gsap.to(".mask-image", {
        scale: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".ieq-video",
          start: "0px top",
          end: "100% top",
          // markers: true,
          id: "anim-mark",
          scrub: 3,
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
