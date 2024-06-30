import React, { useLayoutEffect } from "react";
import { Col, Row } from "antd";

import AIIcon1 from "../../../../assets/images/product/ai-tech-icon-1.svg";
import AIIcon2 from "../../../../assets/images/product/ai-tech-icon-2.svg";
import AIIcon3 from "../../../../assets/images/product/ai-tech-icon-3.svg";

import "./AITech.scss";
import Button from "../../../UIComponents/Buttons/Buttons";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const AITech = () => {
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    let cty = gsap.context(() => {
      mm.add("(min-width: 1200px)", () => {
        gsap.set(".ai-card", {
          opacity: 0,
          scale: 0.97,
          y: 40,
        });
        gsap.to(".ai-card", {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.3,
          duration: 1,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".ieq-product-ai",
            // markers: true,
            id: "cards-1",
            scrub: false,
            start: "-40% top",
            end: "80% top",
          },
        });
      });
    });
    return () => cty.revert();
  }, []);
  return (
    <section className="ieq-product-ai section-padding-bottom z-index-2 position-relative bg-surface-l">
      <div className="container">
        <div className="ieq-product-ai__title">
          <h3 className="text-primary-l text-center">AI-powered</h3>
          <p className="h6r text-secondary text-center">
            The transformative ways that we harness AI technologies sets us
            apart.
          </p>
        </div>
        <Row className="mt-80">
          <Col xl={{ span: 20, offset: 2 }}>
            <Row gutter={[24, 24]}>
              <Col className="d-flex" xs={24} md={12} xl={8}>
                <div className="ai-card flex-all-center">
                  <img src={AIIcon1} alt="gen ai" />
                  <h3 className="text-primary-l text-center">Gen AI</h3>
                  <p className="h6r text-center">
                    Quick, objective candidate scoring
                  </p>
                </div>
              </Col>
              <Col className="d-flex" xs={24} md={12} xl={8}>
                <div className="ai-card flex-all-center">
                  <img src={AIIcon2} alt="gen ai" />
                  <h3 className="text-primary-l text-center">NLP</h3>
                  <p className="h6r text-center">
                    Real human language interpretation
                  </p>
                </div>
              </Col>
              <Col className="d-flex" xs={24} md={12} xl={8}>
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
