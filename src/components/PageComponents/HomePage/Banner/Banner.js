import React, { useEffect, useLayoutEffect } from "react";

import BannerVideoPlaceholder from "../../../../assets/images/home/mobile-mockup-banner.png";
import { BulkImg } from "../../../../pages/BulkImg";

import "./Banner.scss";
import Button from "../../../UIComponents/Buttons/Buttons";
import IconSet from "../../../UIComponents/IconSet/IconSet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Row } from "antd";
gsap.registerPlugin(ScrollTrigger);

const HomeBanner = () => {
  let mm = gsap.matchMedia();
  useLayoutEffect(() => {
    let cty = gsap.context(() => {
      mm.add("(min-width: 1200px)", () => {
        ScrollTrigger.create({
          trigger: ".ieq-banner",
          id: "pin-section",
          // markers: true,
          scrub: true,
          start: "50px top",
          end: "200% top",
          // pinSpacing: true,
          pinSpacer: true,
          anticipatePin: 1,
          pin: true,
        });
      });

      gsap.to(".ieq-banner__content", {
        scale: 0.8,
        opacity: 0,
        y: "-50px",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".ieq-banner__content",
          // markers: true,
          id: "banner-content",
          scrub: false,
          start: "270% top",
          end: "1200% top",
          toggleActions: "play none none reverse",
        },
      });
    });
    ScrollTrigger.refresh();
    return () => cty.revert();
  });

  useEffect(() => {
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");
    const frameCount = 361;
    // const currentFrame = (index) =>
    //   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
    //     index + 1
    //   )
    //     .toString()
    //     .padStart(4, "0")}.jpg`;

    const images = [];
    const airpods = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = BulkImg[i];
      images.push(img);

      // console.log(BulkImg[i]);s
    }

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 3,
        start: "50px top",
        end: "1800px top",
        // markers: true,
        id: "video-animation",
        // trigger: ".ieq-bqnner",
      },
      onUpdate: render,
    });

    images[0].onload = render;

    function render() {
      // set size proportional to image
      canvas.height =
        canvas.width *
        (images[airpods.frame].height / images[airpods.frame].width);

      // step 1 - resize to 50%
      var oc = document.createElement("canvas"),
        octx = oc.getContext("2d");

      oc.width = images[airpods.frame].width;
      oc.height = images[airpods.frame].height;
      octx.drawImage(images[airpods.frame], 0, 0, oc.width, oc.height);

      // step 2
      octx.drawImage(oc, 0, 0, oc.width, oc.height);

      // step 3, resize to final size
      context.drawImage(
        oc,
        0,
        0,
        oc.width,
        oc.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
    }
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      redrawImages(context);
    };

    const redrawImages = (ctx) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      const aspectRatio =
        images[airpods.frame].width / images[airpods.frame].height;
      const scaledWidth = canvas.width;
      const scaledHeight = canvas.width / aspectRatio;
      const x = 0;
      const y = (canvas.height - scaledHeight) / 2; // Center vertically
      ctx.drawImage(images[airpods.frame], x, y, scaledWidth, scaledHeight);
    };
    resizeCanvas();
    // Event listener for window resize
    window.addEventListener("resize", resizeCanvas);

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="ieq-banner">
      {/* <div className="container"> */}
      <div className="ieq-banner__content">
        <ScrollAnimation
          animateOnce={true}
          offset={-100}
          animateIn="animate__fadeInUp"
          animatePreScroll
        >
          <h1 className="display-3 text-center">
            Hiring technology that accounts for humanity.
          </h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          offset={-100}
          animateIn="animate__fadeInUp"
          animatePreScroll
        >
          <Button size="large" tertiary>
            Watch a Demo
            <IconSet bg="bg" iconName="play" />
          </Button>
        </ScrollAnimation>
        <Row className="ieq-banner__video">
          <Col md={{ span: 20, offset: 2 }}>
            <img
              className="w-100"
              src={BannerVideoPlaceholder}
              alt="interactive eq banner video animation"
            />
          </Col>
        </Row>
      </div>
      <div className="w-100vw canvas-wrapper">
        <ScrollAnimation
          animateOnce={true}
          offset={-100}
          animateIn="animate__fadeInUp"
          animatePreScroll
        >
          <canvas id="hero-lightpass"></canvas>
        </ScrollAnimation>
      </div>

      {/* </div> */}
    </section>
  );
};

export default HomeBanner;
