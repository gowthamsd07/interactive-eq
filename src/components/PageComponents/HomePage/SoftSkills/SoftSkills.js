import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./SoftSkills.scss";
import { Col, Row } from "antd";
import SoftSkillsCard from "./SoftSkillsCard";
import Button from "../../../UIComponents/Buttons/Buttons";

// import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const SoftSkills = (props) => {
  // useLayoutEffect(() => {
  //   let cty = gsap.context(() => {
  //     for (const video of document.querySelectorAll(".icon-animation")) {
  //       // console.log(video);
  //       // gsap.set(video, {
  //       video.pause();
  //       // });
  //       ScrollTrigger.create({
  //         trigger: video,
  //         onEnter: () => video.play(),
  //         onEnterBack: () => video.play(),
  //         onLeave: () => video.pause(),
  //         onLeaveBack: () => video.pause(),
  //         // markers: true,
  //         start: "-30% center",
  //         end: "100% center",
  //       });
  //     }
  //   });
  //   ScrollTrigger.refresh();
  //   return () => cty.revert();
  // });
  return (
    <section className="ieq-softskills section-padding-y bg-surface-l">
      <div className="container">
        <Row gutter={[{ md: 40, xl: 80 }, 24]}>
          <Col md={12} xl={{ span: 8, offset: 2 }}>
            <h1 className="text-primary-l primary-title">
              What is human aptitude?
            </h1>
          </Col>
          <Col md={12} xl={{ span: 12 }}>
            <p className="subtitle-1 text-secondary-l">
              IQ measures intelligence. EQ measures emotional intelligence.
              Human aptitude is the application of EQ to job candidate
              evaluation. A rich, experiential assessment from Interactive EQ
              measures
            </p>
          </Col>
        </Row>
        <Row className="mt-80">
          <Col xl={{ span: 20, offset: 2 }} className="ieq-softskills__list">
            {props.items.map((item) => (
              <ScrollAnimation
                key={item.id}
                animateOnce={true}
                offset={item.offset}
                // duration={0.8}
                animateIn="animate__fadeInSkew"
              >
                <SoftSkillsCard
                  key={item.id}
                  id={item.id}
                  direction={item.direction}
                  title={item.title}
                  desc={item.desc}
                  iconUrl={item.iconUrl}
                />
              </ScrollAnimation>
            ))}
          </Col>
        </Row>
        <div className="ieq-softskills__buttons mt-80">
          <Button size="large" primary>
            Request Demo
          </Button>
          <Button size="large" secondary>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
