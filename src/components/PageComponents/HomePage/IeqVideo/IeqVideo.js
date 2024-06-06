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
      scale: 17,
      duration: 2,
    });
    let ctx = gsap.context(() => {
      gsap.to(".mask-image", {
        scale: 1,
        scrollTrigger: {
          trigger: ".ieq-video",
          start: "top top",
          end: "120% top",
          scrub: 3,
          pin: true,
          markers: true,
        },
      });
    });

    return () => ctx.revert();
  });
  return (
    <section className="ieq-video">
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
