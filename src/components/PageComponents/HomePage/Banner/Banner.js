import React, { useLayoutEffect } from "react";

import BannerVideo from "../../../../assets/images/home/interactive-eq-banner-video.png";
// import HeroScrollVideo from "../../../../assets/images/home/hero-scroll-video.mp4";

import "./Banner.scss";
import Button from "../../../UIComponents/Buttons/Buttons";
import IconSet from "../../../UIComponents/IconSet/IconSet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SequenceAnim from "./Sequence";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const HomeBanner = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".ieq-banner",
        id: "pin-sec1",
        // markers: true,
        scrub: true,
        start: "50px top",
        end: "100% top",
        pinSpacing: true,
        pinSpacer: true,
        anticipatePin: 1,
        pin: true,
      });
    });

    // const canvas = document.getElementById("image-sequence");
    // const context = canvas.getContext("2d");

    // const frameCount = 549;
    // const currentFrame = (index) =>
    //   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
    //     index + 1
    //   )
    //     .toString()
    //     .padStart(4, "0")}.jpg`;

    // const images = [];
    // const airpods = {
    //   frame: 0,
    // };

    // for (let i = 0; i < frameCount; i++) {
    //   const img = new Image();
    //   img.src = currentFrame(i);
    //   images.push(img);
    // }

    // // console.log(images[1]);

    // gsap.to(airpods, {
    //   frame: frameCount - 1,
    //   snap: "frame",
    //   ease: "none",
    //   scrollTrigger: {
    //     scrub: 0.5,
    //   },
    //   onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    // });

    // // images[0].onload = render;

    // function render() {
    //   images[0].onload = () => {
    //     context.clearRect(0, 0, canvas.width, canvas.height);
    //     context.drawImage(images[airpods.frame], 0, 0);
    //     console.log(images[airpods.frame]);
    //   };
    // }

    return () => ctx.revert();
  });

  return (
    <section className="ieq-banner">
      {/* <div className="container"> */}
      <div className="ieq-banner__content">
        <h1 className="display-3 text-center">
          Hiring technology that accounts for humanity.
        </h1>
        <Button size="large" tertiary>
          Watch a Demo
          <IconSet bg="bg" iconName="play" />
        </Button>
        <div className="ieq-banner__video">
          <img src={BannerVideo} alt="interactive eq banner video animation" />
        </div>
      </div>
      {/* <div className="ieq-banner__video"> */}
      {/* <video muted>
          <source src={HeroScrollVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      {/* <canvas id="image-sequence" /> */}
      {/* </div> */}

      {/* </div> */}
      {/* <SequenceAnim /> */}
    </section>
  );
};

export default HomeBanner;
