import React, { useLayoutEffect, useRef, useState } from "react";

import VideoPlaceholder from "../../../../assets/images/home/section-ieqvideo.svg";
import IeqVideoFile from "../../../../assets/images/home/ieq-video.mp4";
import StartOverIcon from "../../../../assets/images/shared/startover.svg";
import PlayIcon from "../../../../assets/images/shared/play.svg";
import PauseIcon from "../../../../assets/images/shared/pause.svg";
import SoundIcon from "../../../../assets/images/shared/sound.svg";
import MutedIcon from "../../../../assets/images/shared/muted.svg";

import "./IeqVideo.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const IeqVideo = () => {
  let mm = gsap.matchMedia();
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

  useLayoutEffect(() => {
    let cty = gsap.context(() => {
      mm.add("(min-width: 1200px)", () => {
        gsap.set(".mask-image", {
          scale: 25,
          duration: 2,
          zIndex: 2,
        });
        ScrollTrigger.create({
          trigger: ".ieq-video",
          id: "pin-mark",
          // markers: true,
          scrub: 3,
          start: "0% top",
          end: "170% top",
          pinSpacing: true,
          pinSpacer: true,
          anticipatePin: 1,
          pin: true,
          invalidateOnRefresh: true,
          onToggle: ({ isActive }) => {
            console.log("ScrollTrigger toggle", isActive);
            // Handle ScrollTrigger logic
          },
        });

        gsap.to(".mask-image", {
          scale: 1,
          zIndex: 10,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".ieq-video__wrap",
            start: "10% top",
            end: "100% top",
            // markers: true,
            id: "anim-mark",
            scrub: 2,
          },
        });
      });
    });
    return () => {
      cty.revert();
    };
  }, []);

  return (
    <section className="ieq-video bg-surface">
      <div className="ieq-video__wrap">
        <img
          className="w-100 mask-image"
          src={VideoPlaceholder}
          alt="Ieq video"
        />
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
          ref={videoRef}
          autoPlay={isVideoPlaying}
          muted={isVideoMuted}
          loop
        >
          <source src={IeqVideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default IeqVideo;
