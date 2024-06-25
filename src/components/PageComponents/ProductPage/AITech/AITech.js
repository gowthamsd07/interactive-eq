import React from "react";
import { Col, Row } from "antd";

import AIIcon1 from "../../../../assets/images/product/ai-tech-icon-1.svg";
import AIIcon2 from "../../../../assets/images/product/ai-tech-icon-2.svg";
import AIIcon3 from "../../../../assets/images/product/ai-tech-icon-3.svg";

import "./AITech.scss";
import Button from "../../../UIComponents/Buttons/Buttons";

const AITech = () => {
  return (
    <section className="ieq-product-ai section-padding-bottom bg-surface-l">
      <div className="container">
        <div className="ieq-product-ai__title">
          <h3 className="text-primary-l text-center">AI Technology</h3>
          <p className="h6r text-secondary text-center">
            The transformative ways that we harness AI technologies sets us
            apart.
          </p>
        </div>
        <Row className="mt-80">
          <Col xl={{ span: 20, offset: 2 }}>
            <Row gutter={24}>
              <Col xl={8}>
                <div className="ai-card flex-all-center">
                  <img src={AIIcon1} alt="gen ai" />
                  <h3 className="text-primary-l text-center">Gen AI</h3>
                  <p className="h6r text-center">
                    Quick, objective candidate scoring
                  </p>
                </div>
              </Col>
              <Col xl={8}>
                <div className="ai-card flex-all-center">
                  <img src={AIIcon2} alt="gen ai" />
                  <h3 className="text-primary-l text-center">NLP</h3>
                  <p className="h6r text-center">
                    Real human language interpretation
                  </p>
                </div>
              </Col>
              <Col xl={8}>
                <div className="ai-card flex-all-center">
                  <img src={AIIcon3} alt="gen ai" />
                  <h3 className="text-primary-l text-center">LLM</h3>
                  <p className="h6r text-center">
                    Massive soft skill data processing
                  </p>
                </div>
              </Col>
            </Row>
            <div className="flex-all-center mt-80">
              <Button size="large" primary>
                Request Demo
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AITech;
