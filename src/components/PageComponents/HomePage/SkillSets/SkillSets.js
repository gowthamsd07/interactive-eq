import React from "react";
import { Col, Row } from "antd";

import "./SkillSets.scss";
import Button from "../../../UIComponents/Buttons/Buttons";
import ScrollAnimation from "react-animate-on-scroll";

const SkillSetItem = (props) => {
  return (
    <div className="skill-set-item flex-all-center flex-column">
      <img src={props.iconUrl} alt={props.title} />
      <p className="text-l text-placeholder text-center">{props.desc}</p>
    </div>
  );
};

const SkillSets = (props) => {
  return (
    <section className="ieq-skills section-padding-y">
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xl={{ span: 8, offset: 4 }}>
            <h3 className="text-white">
              Deeper than social profiles and resumes
            </h3>
          </Col>
          <Col xl={{ span: 8 }}>
            <p className="subtitle-1 text-secondary">
              Technical skills have become commoditized. Hirers need to look
              beyond job titles, accomplishments, and work samples. Human
              aptitude is the true differentiator. Now you can objectively
              measure it. 
            </p>
          </Col>
        </Row>
        <Row gutter={[24, 24]} className="mt-80">
          <Col xl={{ span: 16, offset: 4 }}>
            <Row gutter={[25, 52]} className="col-gap-24">
              {props.items.map((item) => (
                <ScrollAnimation
                  key={item.id}
                  animateOnce={true}
                  offset={200}
                  duration={0.8}
                  animateIn="animate__fadeInUp"
                >
                  <SkillSetItem
                    id={item.id}
                    iconUrl={item.iconUrl}
                    title={item.title}
                    desc={item.desc}
                  />
                </ScrollAnimation>
              ))}
              <Col xl={6}></Col>
            </Row>
            <Row gutter={[25, 0]} className="col-gap-24">
              {props.items.map((item) => (
                <ScrollAnimation
                  key={item.id}
                  animateOnce={true}
                  offset={200}
                  duration={0.8}
                  delay={100}
                  animateIn="animate__fadeInUp"
                >
                  <SkillSetItem
                    id={item.id}
                    key={item.id}
                    iconUrl={item.iconUrl}
                    title={item.title}
                    desc={item.desc}
                  />
                </ScrollAnimation>
              ))}
              <Col xl={6}></Col>
            </Row>
          </Col>
        </Row>
        <div className="flex-all-center">
          <Button size="large" secondary>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillSets;
