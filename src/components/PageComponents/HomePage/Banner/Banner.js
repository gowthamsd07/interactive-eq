import React, {
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import BannerVideoPlaceholder from "../../../../assets/images/home/mobile-mockup-banner.png";
import WatchDemoVideo from "../../../../assets/images/home/watch-demo.mp4";
import { BulkImg } from "../../../../pages/BulkImg";
import StartOverIcon from "../../../../assets/images/shared/startover.svg";
import PlayIcon from "../../../../assets/images/shared/play.svg";
import PauseIcon from "../../../../assets/images/shared/pause.svg";
import SoundIcon from "../../../../assets/images/shared/sound.svg";
import MutedIcon from "../../../../assets/images/shared/muted.svg";

import "./Banner.scss";
import Button from "../../../UIComponents/Buttons/Buttons";
import IconSet from "../../../UIComponents/IconSet/IconSet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Col, Row } from "antd";
import Modal from "../../../UIComponents/Modal/Modal";
gsap.registerPlugin(ScrollTrigger);

const HomeBanner = () => {
  const [isVideoMuted, setVideoMuted] = useState(true);
  const [isVideoPlaying, setVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  const videolPlayHandler = (e, control) => {
    e.stopPropagation();
    if (control === "play") {
      videoRef.current.pause();
      setVideoPlaying(false);
    } else if (control === "pause") {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };
  const videolSoundHandler = (control) => {
    if (control === "unmute") {
      setVideoMuted(false);
    } else if (control === "mute") {
      setVideoMuted(true);
    }
  };
  const videoStartOver = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play(); // Optional: If you want to play the video immediately after resetting
    }
  };
  let mm = gsap.matchMedia();
  useLayoutEffect(() => {
    let cty = gsap.context(() => {
      mm.add("(min-width: 1200px)", () => {
        ScrollTrigger.create({
          trigger: ".ieq-banner",
          id: "pin-section1",
          // markers: true,
          scrub: 1,
          start: "-98px top",
          end: "100% top",
          pinSpacing: false,
          pinSpacer: false,
          anticipatePin: 1,
          pin: ".content-pin",
        });
        gsap.to(".canvas-wrapper", {
          y: "-98px",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".ieq-banner",
            // markers: true,
            id: "video-move",
            scrub: true,
            start: "-98px top",
            end: "40px top",
            toggleActions: "play none none reverse",
          },
        });
        gsap.to(".ieq-banner__content", {
          marginTop: "-98px",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".ieq-banner",
            // markers: true,
            id: "video-move",
            scrub: true,
            start: "-98px top",
            end: "40px top",
            // toggleActions: "play none none reverse",
          },
        });
        gsap.to(".canvas-wrapper", {
          scale: 0.6,
          opacity: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".canvas-wrapper",
            // markers: true,
            id: "banner",
            scrub: true,
            start: "250% center",
            end: "400% center",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(".ieq-banner__content > *", {
          opacity: 0,
          y: "-50px",
          stagger: 0.1,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".ieq-banner__content",
            // markers: true,
            id: "canvas",
            scrub: false,
            start: "600px top",
            end: "2100px top",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
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
    mm.add("(min-width: 1200px)", () => {
      gsap.to(airpods, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          scrub: 4,
          start: "50px top",
          end: "1800px top",
          // markers: true,
          id: "video-animation",
        },
        onUpdate: render,
      });
    });

    images[0].onload = render;

    function render() {
      // set size proportional to image
      ScrollTrigger.refresh();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);
  const loaderClass = isVisible ? "show-element" : "hide-element";

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
    <Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        className="watch-demo-modal"
        contentClass="watch-demo__modal-content"
      >
        <div>
          <div className="controls-container">
            <img
              src={StartOverIcon}
              alt="start over"
              onClick={() => videoStartOver()}
            />
            {isVideoPlaying ? (
              <img
                src={PauseIcon}
                onClick={(e) => {
                  videolPlayHandler(e, "play");
                }}
                alt="start over"
              />
            ) : (
              <img
                src={PlayIcon}
                onClick={(e) => {
                  videolPlayHandler(e, "pause");
                }}
                alt="start over"
              />
            )}
            {isVideoMuted ? (
              <img
                src={SoundIcon}
                alt="start over"
                onClick={() => videolSoundHandler("unmute")}
              />
            ) : (
              <img
                src={MutedIcon}
                alt="start over"
                onClick={() => videolSoundHandler("mute")}
              />
            )}
          </div>
          <video
            className="w-100 h-100"
            ref={videoRef}
            autoPlay={isVideoPlaying}
            muted={isVideoMuted}
            loop
          >
            <source src={WatchDemoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
      <section className={`ieq-banner additional-pin ${loaderClass}`}>
        <div className="container">
          <div className="content-pin">
            <div className="ieq-banner__content">
              <h1 className="display-3 text-center">
                Hiring technology that accounts for humanity.
              </h1>

              <div onClick={openMapHandler}>
                <Button size="large" tertiary>
                  <IconSet bg="bg" iconName="play" />
                  <span>Watch a Demo</span>
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

          <div className="w-100vw canvas-wrapper">
            <canvas id="hero-lightpass"></canvas>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomeBanner;
