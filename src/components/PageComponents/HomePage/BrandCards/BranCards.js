import { Col, Row } from "antd";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import BrandCardIllustration from "../../../../assets/images/home/brand-card-illustration.png";
import "./BrandCards.scss";
import Button from "../../../UIComponents/Buttons/Buttons";

const BrandCards = () => {
  return (
    <section className="ieq-brand-cards section-padding-y">
      <div className="container">
        <Row>
          <Col xl={{ offset: 4, span: 16 }}>
            <Row gutter={[24, 24]}>
              <Col xl={12}>
                <ScrollAnimation
                  animateOnce={true}
                  offset={150}
                  duration={0.8}
                  animateIn="animate__fadeInLeft"
                >
                  <div className="brand-card-1">
                    <p className="display-3 text-white">No more wrong hires.</p>
                  </div>
                </ScrollAnimation>
              </Col>
              <Col xl={12}>
                <ScrollAnimation
                  animateOnce={true}
                  offset={150}
                  duration={0.8}
                  animateIn="animate__fadeInRight"
                >
                  <div className="brand-card-2 flex-all-center flex-column">
                    <h6 className="text-white text-center">
                      As per National Soft Skills Association
                    </h6>
                    <div className="skill-prop">
                      <div>
                        <h4 className="text-white">15%</h4>
                        <p className="text-s text-secondary">
                          of an employee’s success comes from technical skills
                        </p>
                      </div>
                      <div>
                        <h4 className="text-white">85%</h4>
                        <p className="text-s text-secondary">
                          of an employee’s success comes from soft skills
                        </p>
                      </div>
                    </div>
                    <img
                      src={BrandCardIllustration}
                      alt="Brand Card Illustration"
                    />
                    <Button size="small" secondary>
                      Hiring failures are costly?
                    </Button>
                  </div>
                </ScrollAnimation>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default BrandCards;
