import React, { useLayoutEffect } from "react";
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
  useLayoutEffect(() => {
    let cty = gsap.context(() => {
      for (const card of document.querySelectorAll(".soft-skills-card")) {
        gsap.set(card, {
          y: "50px",
          opacity: 0,
          duration: 0.3,
        });
        gsap.to(card, {
          opacity: 1,
          y: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            // markers: true,
            id: "img-1",
            scrub: false,
            start: "-20% center",
            end: "100% center",
            toggleActions: "play none none none",
          },
        });
      }
      // for (const card of document.querySelectorAll(".soft-skills-card > *")) {
      //   gsap.set(card, {
      //     y: "10px",
      //     opacity: 0,
      //     duration: 0.3,
      //   });
      //   gsap.to(card, {
      //     opacity: 1,
      //     y: 0,
      //     delay: 0.1,
      //     immediateRender: false,
      //     scrollTrigger: {
      //       trigger: card,
      //       markers: true,
      //       id: "img-1",
      //       scrub: false,
      //       start: "-20% center",
      //       end: "100% center",
      //       toggleActions: "play none none none",
      //     },
      //   });
      // }
    });
    // ScrollTrigger.refresh();
    return () => cty.revert();
  });
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
              // <ScrollAnimation
              //   key={item.id}
              //   animateOnce={true}
              //   offset={item.offset}
              //   // duration={0.8}
              //   animateIn="animate__fadeInUp"
              // >
              <SoftSkillsCard
                key={item.id}
                id={item.id}
                direction={item.direction}
                title={item.title}
                desc={item.desc}
                iconUrl={item.iconUrl}
              />
              // </ScrollAnimation>
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
