import { Col, Row } from "antd";
import React from "react";

import "./Assessment.scss";

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
      </div>
    </section>
  );
};

export default Assessment;
