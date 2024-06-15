import { Col, Row } from "antd";
import React, { Fragment, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import BrandCardIllustration from "../../../../assets/images/home/brand-card-illustration.png";
import "./BrandCards.scss";
import Button from "../../../UIComponents/Buttons/Buttons";
import Modal from "../../../UIComponents/Modal/Modal";

const BrandCards = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
    document.body.style.overflow = "hidden";
  };

  const closeMapHandler = () => {
    setShowMap(false);
    document.body.style.overflow = "unset";
  };

  return (
    <Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        contentClass="hire-metrics__modal-content"
        className="brand-card-modal"
      >
        <div className="metric-container">
          <h5 className="h5r text-primary-l modal-title">
            Do you keep swinging and missing on your hires? Disappointment isn’t
            the only loss
          </h5>
          <Row
            gutter={[
              { xs: 24, md: 56, xl: 24 },
              { xs: 40, md: 56, xl: 72 },
            ]}
            className="metrics-wrap"
          >
            <Col xs={24} md={12} xl={8} className="metrics-info">
              <div>
                <h4 className="text-primary-l">$17k</h4>
                <p className="text-secondary-l text-s">
                  The avg cost of hiring the wrong employee.
                </p>
              </div>
              <p className="text-body text-primary-l">-Career Builder</p>
            </Col>
            <Col xs={24} md={12} xl={8} className="metrics-info">
              <div>
                <h4 className="text-primary-l">17%</h4>
                <p className="text-secondary-l text-s">
                  Time wasted on underperformers
                </p>
              </div>
              <p className="text-body text-primary-l">-US Dept of Labor</p>
            </Col>
            <Col xs={24} md={12} xl={8} className="metrics-info">
              <div>
                <h4 className="text-primary-l">$100m</h4>
                <p className="text-secondary-l text-s">
                  Spent by Zappos on bad hires
                </p>
              </div>
              <p className="text-body text-primary-l">-Brandon Hall Group</p>
            </Col>
            <Col xs={24} md={12} xl={8} className="metrics-info">
              <div>
                <h4 className="text-primary-l">6mo</h4>
                <p className="text-secondary-l text-s">
                  New hire costs before profitability
                </p>
              </div>
              <p className="text-body text-primary-l">
                -Harvard Business School
              </p>
            </Col>
            <Col xs={24} md={12} xl={8} className="metrics-info">
              <div>
                <h4 className="text-primary-l">69%</h4>
                <p className="text-secondary-l text-s">
                  Flawed interviews in most companies
                </p>
              </div>
              <p className="text-body text-primary-l">-Brandon Hall Group</p>
            </Col>
            <Col xs={24} md={12} xl={8} className="metrics-info">
              <div>
                <h4 className="text-primary-l">$450b+</h4>
                <p className="text-secondary-l text-s">
                  Annual productivity loss
                </p>
              </div>
              <p className="text-body text-primary-l">-US Dept of Labor</p>
            </Col>
          </Row>
        </div>
      </Modal>

      <section className="ieq-brand-cards section-padding-y bg-surface">
        <div className="container">
          {/* <div className="ieq-brand-cards__title">
            <ScrollAnimation
              animateOnce={true}
              offset={300}
              duration={0.8}
              animateIn="animate__fadeInUp"
            >
              <h3 className=" text-white text-center">
                Get the right fit every time
              </h3>
            </ScrollAnimation>
          </div> */}
          <Row className="mt-80">
            <Col xl={{ offset: 4, span: 16 }}>
              <Row gutter={[24, 24]}>
                <Col
                  xs={24}
                  md={{ span: 16, offset: 4 }}
                  xl={{ span: 12, offset: 0 }}
                >
                  <ScrollAnimation
                    animateOnce={true}
                    offset={250}
                    duration={0.8}
                    animateIn="animate__fadeInLeft"
                  >
                    <div className="brand-card-1">
                      <p className="display-3 text-white">
                        No more wrong hires.
                      </p>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col
                  xs={24}
                  md={{ span: 16, offset: 4 }}
                  xl={{ span: 12, offset: 0 }}
                >
                  <ScrollAnimation
                    animateOnce={true}
                    offset={250}
                    duration={0.8}
                    delay={400}
                    animateIn="animate__fadeInRight"
                  >
                    <div className="brand-card-2  flex-all-center flex-column">
                      <h6 className="text-primary-l text-center">
                        As per National Soft Skills Association
                      </h6>
                      <div className="skill-prop">
                        <div>
                          <h4 className="text-white">15%</h4>
                          <p className="text-s text-secondary-l">
                            of an employee’s success comes from technical skills
                          </p>
                        </div>
                        <div>
                          <h4 className="text-white">85%</h4>
                          <p className="text-s text-secondary-l">
                            of an employee’s success comes from soft skills
                          </p>
                        </div>
                      </div>
                      <img
                        className="w-100"
                        src={BrandCardIllustration}
                        alt="Brand Card Illustration"
                      />
                      <Button size="small" secondary onClick={openMapHandler}>
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
    </Fragment>
  );
};

export default BrandCards;
