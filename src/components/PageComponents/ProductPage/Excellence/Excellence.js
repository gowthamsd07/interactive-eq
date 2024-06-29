import React, { useEffect, useLayoutEffect } from "react";

import CardIcon1 from "../../../../assets/images/product/card-icon-1.svg";
import CardIcon2 from "../../../../assets/images/product/card-icon-2.svg";
// import CardIcon3 from "../../../../assets/images/product/card-icon-3.svg";
import CardIcon4 from "../../../../assets/images/product/card-icon-4.svg";

import "./Excellence.scss";
import { Col, Row } from "antd";
import Button from "../../../UIComponents/Buttons/Buttons";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const Excellence = () => {
  useEffect(() => {
    const classExists = document.querySelector(".ieq-product-excel") !== null;
    if (!classExists) return;
    document.body.classList.add("inner-page");
  }, []);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    let cty = gsap.context(() => {
      mm.add("(min-width: 1200px)", () => {
        const cardStacks = gsap.utils.toArray(".cards-inner-wrapper");

        cardStacks.forEach((cardstack, i) => {
          gsap.set(cardstack, {
            opacity: 0.1,
            scale: 0.97,
            y: 40,
          });
          gsap.to(cardstack, {
            opacity: 1,
            scale: 1,

            y: 0,

            immediateRender: false,
            scrollTrigger: {
              trigger: cardstack,
              // markers: true,
              id: "cards-1" + i,
              scrub: true,
              start: "-40% center",
              end: "80% center",
            },
          });
        });
      });
    });
    return () => cty.revert();
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
                <div className="image-card content-card">
                  <img src={CardIcon2} alt="product icons" />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="content-card content-card">
                  <h4 className="text-primary h4r">Beyond film production</h4>
                  <p className="text-l text-secondary">
                    Exceptional film production brings iEQ assessments to life.
                    But our team goes even further, collaborating with industry
                    experts to bring on-the-job scenarios to life.
                  </p>
                </div>
              </Col>
            </Row>
            <Row gutter={[24, 24]} className="cards-inner-wrapper">
              <Col xs={24} md={{ span: 12, order: 2 }}>
                <div className="image-card content-card">
                  <img src={CardIcon4} alt="product icons" />
                </div>
              </Col>
              <Col xs={24} md={{ span: 12, order: 1 }}>
                <div className="content-card content-card">
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
                <div className="image-card content-card">
                  <img src={CardIcon1} alt="product icons" />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="content-card content-card">
                  <h4 className="text-primary h4r">GenAI scoring</h4>
                  <p className="text-l text-secondary">
                    Leaps in artificial intelligence make advanced soft skill
                    scoring on this scale possible. Our generative AI models
                    score your candidate’s EQ without bias.
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

export default Excellence;
