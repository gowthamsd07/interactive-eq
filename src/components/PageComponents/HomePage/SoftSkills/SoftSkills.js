import React, { useLayoutEffect } from "react";

import "./SoftSkills.scss";
import { Col, Row } from "antd";
import SoftSkillsCard from "./SoftSkillsCard";
import Button from "../../../UIComponents/Buttons/Buttons";

// import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { Tween, Reveal } from "react-gsap";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const SoftSkills = (props) => {
  let mm = gsap.matchMedia();
  useLayoutEffect(() => {
    let cty = gsap.context(() => {
      mm.add("(min-width: 1200px)", () => {
        for (const card of document.querySelectorAll(".soft-skills-card")) {
          gsap.set(card, {
            y: "50px",
            scale: 0.9,
            // opacity: 0,
            duration: 0.3,
          });
          gsap.to(card, {
            // opacity: 1,
            y: 0,
            // keyframes: {
            //   scale: [1.04, 0.97, 1],
            // },
            scale: 1,
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              // markers: true,
              id: "cards-1",
              scrub: true,
              start: "-40% center",
              end: "80% center",
              toggleActions: "play none none none",
            },
          });
        }
        const textwrappers = gsap.utils.toArray(
          ".soft-skills-card .soft-skills-card__content"
        );
        const icons = gsap.utils.toArray(
          " .soft-skills-card .soft-skills-card__icon"
        );
        const cards = gsap.utils.toArray(".soft-skills-card");
        cards.forEach((card, i) => {
          gsap.set(textwrappers[i], {
            y: "40px",
            opacity: 0,
            duration: 0.3,
          });
          gsap.to(textwrappers[i], {
            opacity: 1,
            y: 0,
            delay: 0.2,
            duration: 0.5,

            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              // markers: true,
              id: "img-1",
              scrub: false,
              start: "-50% center",
              end: "100% center",
              toggleActions: "play none none none",
            },
          });
          gsap.set(icons[i], {
            y: "20px",
            opacity: 0,
            duration: 0.3,
          });
          gsap.to(icons[i], {
            opacity: 1,
            y: 0,
            delay: 0.2,
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
        });

        gsap.to(".ieq-softskills", {
          scale: 0.97,

          immediateRender: false,
          scrollTrigger: {
            trigger: ".ieq-softskills",
            // markers: true,
            id: "cards-1",
            scrub: true,
            start: "80% center",
            end: "100% center",
            toggleActions: "play none none none",
          },
        });
      });
    });
    // ScrollTrigger.refresh();
    return () => cty.revert();
  });
  return (
    <section className="ieq-softskills section-padding-y bg-surface-l">
      <div className="container">
        <Row gutter={[{ md: 40, xl: 80 }, 24]}>
          <Col
            xs={24}
            md={{ span: 16, offset: 4 }}
            xl={{ span: 12, offset: 6 }}
            className="ieq-softskills__title"
          >
            <Reveal>
              <Tween
                from={{ y: "100px", opacity: 0 }}
                to={{ y: "0px", opacity: 1 }}
                duration={1}
                ease="Power1.out(1.7)"
              >
                <h3 className="text-primary-l text-center primary-title">
                  What is human aptitude?
                </h3>
              </Tween>
            </Reveal>
            <Reveal>
              <Tween
                from={{ y: "100px", opacity: 0 }}
                to={{ y: "0px", opacity: 1 }}
                duration={1}
                ease="Power1.out(1.7)"
              >
                <p className="subtitle-1 text-center text-secondary-l">
                  IQ measures intelligence. EQ measures emotional intelligence.
                  Human aptitude is the application of EQ to job candidate
                  evaluation. A rich, experiential assessment from Interactive
                  EQ measures
                </p>
              </Tween>
            </Reveal>
          </Col>
        </Row>
        <Row className="mt-80">
          <Col
            xs={24}
            xl={{ span: 20, offset: 2 }}
            className="ieq-softskills__list"
          >
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
        <div className="ieq-softskills__buttons">
          {/* <Button size="large" primary>
            Request Demo
          </Button> */}
          <Button size="large" secondary>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
