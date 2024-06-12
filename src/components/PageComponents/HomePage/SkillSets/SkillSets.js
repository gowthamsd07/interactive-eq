import React, { useEffect, useRef, useState } from "react";
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
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);
  return (
    <section
      ref={ref}
      style={{ height: { height } + "px" }}
      className="ieq-skills section-padding-y bg-surface-l"
    >
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xl={{ span: 8, offset: 4 }}>
            <h3 className="text-primary-l">
              Tools to Elevate Your Recruitment
            </h3>
          </Col>
          <Col xl={{ span: 8 }}>
            <p className="subtitle-1 text-secondary-l">
              Technical skills have become commoditized. Hirers need to look
              beyond job titles, results and work samples. Human aptitude is the
              true differentiator. Now you can objectively measure it.
            </p>
          </Col>
        </Row>
        <Row gutter={[24, 24]} className="mt-80">
          <Col xl={{ span: 16, offset: 4 }}>
            <Row gutter={[25, 52]}>
              {props.items.map((item) => (
                <Col key={item.id} xs={12} md={6} xl={6}>
                  <ScrollAnimation
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
                </Col>
              ))}
              <Col xl={6}></Col>
            </Row>
            <Row gutter={[25, 52]}>
              {props.items.map((item) => (
                <Col key={item.id} xs={12} md={6} xl={6}>
                  <ScrollAnimation
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
                </Col>
              ))}
              <Col xl={6}></Col>
            </Row>
          </Col>
        </Row>
        <div className="flex-all-center skill-button-wrap mt-120">
          <Button size="large" secondary>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillSets;
