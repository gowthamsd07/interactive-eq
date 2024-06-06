import { Col, Row } from "antd";
import React from "react";

import "./Assessment.scss";
import ScrollAnimation from "react-animate-on-scroll";

const AssessmentItem = (props) => {
  return (
    <div className="assessment-item">
      <img src={props.IconUrl} alt={props.title} />
      <h6 className="text-white">{props.title}</h6>
      <p className="text-l text-center text-secondary">{props.desc}</p>
    </div>
  );
};

const Assessment = (props) => {
  return (
    <section className="ieq-assessment section-padding-top">
      <div className="container">
        <h6 className="text-secondary text-center section-title">
          A rich, experiential assessment from Interactive EQ measures:
        </h6>
        <div className="ieq-assessment__content-wrap">
          <ScrollAnimation
            animateOnce={true}
            offset={200}
            duration={0.8}
            delay={100}
            animateIn="animate__fadeInUp"
          >
            <Row gutter={[24, 112]} className="ieq-assessment__content">
              {props.items.map((item) => (
                <Col xl={8} key={item.id}>
                  <AssessmentItem
                    id={item.id}
                    IconUrl={item.IconUrl}
                    title={item.title}
                    desc={item.desc}
                  />
                </Col>
              ))}
            </Row>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            offset={200}
            duration={0.8}
            delay={100}
            animateIn="animate__fadeInUp"
          >
            <Row gutter={[24, 112]} className="ieq-assessment__content">
              {props.items.map((item) => (
                <Col xl={8} key={item.id}>
                  <AssessmentItem
                    id={item.id}
                    IconUrl={item.IconUrl}
                    title={item.title}
                    desc={item.desc}
                  />
                </Col>
              ))}
            </Row>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Assessment;
