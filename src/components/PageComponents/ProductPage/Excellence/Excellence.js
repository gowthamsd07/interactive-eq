import React, { useEffect } from "react";

import CardIcon1 from "../../../../assets/images/product/card-icon-1.svg";
import CardIcon2 from "../../../../assets/images/product/card-icon-2.svg";
import CardIcon3 from "../../../../assets/images/product/card-icon-3.svg";
import CardIcon4 from "../../../../assets/images/product/card-icon-4.svg";

import "./Excellence.scss";
import { Col, Row } from "antd";
import Button from "../../../UIComponents/Buttons/Buttons";

const Excellence = () => {
  useEffect(() => {
    const classExists = document.querySelector(".ieq-product-excel") !== null;
    if (!classExists) return;
    document.body.classList.add("inner-page");
  }, []);
  return (
    <section className="section-padding-y ieq-product-excel bg-surface">
      <div className="container">
        <h3 className="text-white text-center ieq-product-excel__title">
          Future employee success, measured
        </h3>
        <Row className="mt-80 cards-wrapper">
          <Col xl={{ span: 16, offset: 4 }}>
            <Row gutter={[24, 24]} className="cards-inner-wrapper">
              <Col xs={24} md={12}>
                <div className="image-card">
                  <img src={CardIcon2} alt="product icons" />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="content-card">
                  <h4 className="text-primary h4r">
                    Full-motion film production
                  </h4>
                  <p className="text-l text-secondary">
                    Our seasoned film production team brings on-the-job topics
                    to life by naturally and accurately challenging candidates.
                  </p>
                </div>
              </Col>
            </Row>
            <Row gutter={[24, 24]} className="cards-inner-wrapper">
              <Col xs={24} md={{ span: 12, order: 2 }}>
                <div className="image-card">
                  <img src={CardIcon4} alt="product icons" />
                </div>
              </Col>
              <Col xs={24} md={{ span: 12, order: 1 }}>
                <div className="content-card">
                  <h4 className="text-primary h4r">Measurable insight</h4>
                  <p className="text-l text-secondary">
                    Immersion, expert-validated content, and generative AI
                    models uncover layered candidate analysis and scoring across
                    a range of powerful factors.
                  </p>
                </div>
              </Col>
            </Row>
            <Row gutter={[24, 24]} className="cards-inner-wrapper">
              <Col xs={24} md={12}>
                <div className="image-card">
                  <img src={CardIcon1} alt="product icons" />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="content-card">
                  <h4 className="text-primary h4r">Human aptitude</h4>
                  <p className="text-l text-secondary">
                    Challenge your candidate to read the room by observing real
                    people who emote, change tone, and present complex scenarios
                    in business environments.
                  </p>
                </div>
              </Col>
            </Row>
            {/* <Row gutter={[24, 24]} className="cards-inner-wrapper">
              <Col xs={24} md={{ span: 12, order: 2 }}>
                <div className="image-card">
                  <img src={CardIcon4} alt="product icons" />
                </div>
              </Col>
              <Col xs={24} md={{ span: 12, order: 1 }}>
                <div className="content-card">
                  <h4 className="text-primary h4r">Measurable insight</h4>
                  <p className="text-l text-secondary">
                    Immersion, expert-validated content, and generative AI
                    models uncover layered candidate analysis and scoring across
                    a range of powerful factors.
                  </p>
                </div>
              </Col>
            </Row> */}
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

export default Excellence;
