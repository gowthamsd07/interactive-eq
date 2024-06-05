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
        <Row gutter={[24, 24]} className="mt-80">
          <Col xl={{ span: 8, offset: 2 }}>
            <h3 className="text-primary">
              85% of employee success comes from soft skills.
            </h3>
          </Col>
          <Col xl={{ span: 10, offset: 2 }}>
            <p className="subtitle-1 text-placeholder">
              Yet we continue to overvalue technical skills when hiring. Now you
              can close this blind spot by assessing human aptitude.
            </p>
          </Col>
        </Row>
        <Row className="mt-80">
          <Col xl={{ span: 20, offset: 2 }} className="ieq-softskills__list">
            {props.items.map((item) => (
              <ScrollAnimation
                key={item.id}
                animateOnce={true}
                offset={200}
                duration={0.5}
                animateIn="animate__fadeIn"
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
