import React, { Fragment, useEffect, useState } from "react";
import BannerVideo from "../../../../assets/images/shared/video-scrub-3.mp4";

import BannerVideoPlaceholder from "../../../../assets/images/home/mobile-mockup-banner.png";
import WatchDemoVideo from "../../../../assets/images/home/watch-demo.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "../../../UIComponents/Modal/Modal";
import Button from "../../../UIComponents/Buttons/Buttons";
import IconSet from "../../../UIComponents/IconSet/IconSet";
import { Col, Row } from "antd";
gsap.registerPlugin(ScrollTrigger);

const VideoScrub = () => {
  useEffect(() => {
    const video = document.querySelector(".scrub-video");
    let src = video.currentSrc || video.src;
    // console.log(video, src);

    /* Make sure the video is 'activated' on iOS */
    function once(el, event, fn, opts) {
      var onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    }

    once(document.documentElement, "touchstart", function (e) {
      video.play();
      video.pause();
    });

    /* ---------------------------------- */
    /* Scroll Control! */

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".scrub-video", {
      scale: 0.6,
      opacity: 0,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".scrub-video",
        // markers: true,
        id: "banner",
        scrub: true,
        start: "250% center",
        end: "400% center",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(".scrub-video", {
      y: -98,
      delay: 0.1,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".ieq-banner",
        markers: true,
        id: "video-move",
        scrub: true,
        start: "-98px top",
        end: "0px top",
        toggleActions: "play none none reverse",
      },
    });
    // ScrollTrigger.create({
    //   trigger: ".content-pin",
    //   id: "pin-section1",
    //   markers: true,
    //   start: "-98px top",
    //   end: "100% top",
    //   pinSpacing: false,
    //   pinSpacer: false,
    //   anticipatePin: 1,
    //   pin: ".content-pin",
    // });
    // gsap.to(".ieq-banner__content > *", {
    //   scale: 0.8,
    //   opacity: 0,
    //   y: "-50px",
    //   stagger: 0.2,
    //   immediateRender: false,
    //   scrollTrigger: {
    //     trigger: ".ieq-banner__content",
    //     // markers: true,
    //     id: "banner-content",
    //     scrub: true,
    //     start: "-98px top",
    //     end: "100% top",
    //     toggleActions: "none play none reverse",
    //   },
    // });

    let tl = gsap.timeline({
      defaults: { duration: 10 },
      scrollTrigger: {
        trigger: ".scrub-video",
        start: "top top",
        end: "300% bottom",
        scrub: 1,
        // pin: true,
      },
    });

    once(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        {
          currentTime: 0,
        },
        {
          currentTime: video.duration || 1,
        }
      );
    });

    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    setTimeout(function () {
      if (window["fetch"]) {
        fetch(src)
          .then((response) => response.blob())
          .then((response) => {
            var blobURL = URL.createObjectURL(response);

            var t = video.currentTime;
            once(document.documentElement, "touchstart", function (e) {
              video.play();
              video.pause();
            });

            video.setAttribute("src", blobURL);
            video.currentTime = t + 0.01;
          });
      }
    }, 1000);
  });
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
    document.body.style.overflow = "hidden";
  };

  const closeMapHandler = () => {
    setShowMap(false);
    document.body.style.overflow = "unset";
  };
  return (
    // <section className="scrub-container bg-surface">
    //   <video className="scrub-video w-100 h-100">
    //     <source src={BannerVideo} type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    // </section>

    <Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        className="watch-demo-modal"
        contentClass="watch-demo__modal-content"
      >
        <div>
          <video className="w-100 h-100" autoPlay muted loop controls>
            <source src={WatchDemoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
      <section className="ieq-banner additional-pin">
        <div className="container">
          <div className="content-pin">
            <div className="ieq-banner__content">
              <h1 className="display-3 text-center">
                Hiring technology that accounts for humanity.
              </h1>

              <div onClick={openMapHandler}>
                <Button size="large" tertiary>
                  <IconSet bg="bg" iconName="play" />
                  Watch a Demo
                </Button>
              </div>
            </div>
          </div>
          <Row className="ieq-banner__video">
            <Col md={{ span: 20, offset: 2 }}>
              <img
                rel="preload"
                className="w-100"
                src={BannerVideoPlaceholder}
                alt="interactive eq banner video animation"
              />
            </Col>
          </Row>
          <video className="scrub-video w-100 h-100" playsInline preload="auto">
            <source src={BannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </Fragment>
  );
};

export default VideoScrub;
