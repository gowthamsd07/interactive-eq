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
  return (
    <section className="ieq-softskills section-padding-top">
      <div className="container">
        <Row gutter={[80, 24]}>
          <Col xl={{ span: 8, offset: 2 }}>
            <h3 className="text-primary">What is human aptitude?</h3>
          </Col>
          <Col xl={{ span: 12 }}>
            <p className="subtitle-1 text-placeholder">
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
