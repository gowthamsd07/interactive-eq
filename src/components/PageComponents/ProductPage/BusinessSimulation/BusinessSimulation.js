import React from "react";
import { Col, Row } from "antd";

import SimulationImg from "../../../../assets/images/product/business-simulation.png";

import "./BusinessSimualtion.scss";
import Button from "../../../UIComponents/Buttons/Buttons";

function BusinessSimulation() {
  return (
    <section className="ieq-product-simulation section-padding-y bg-surface">
      <div className="container">
        <Row gutter={[24, { xs: 80, xl: 0 }]}>
          <Col xs={24} xl={{ span: 8, offset: 2 }}>
            <div className="simulation-title">
              <h3 className="display-3 text-white">
                First-person business simulation
              </h3>
              <p className="h6r text-secondary">
                Full-motion film productions created by iEQ’s creative and
                professional script writers, cast, and crew immerse candidates
                into real-life business scenarios ripped straight from the
                boardroom.
              </p>
              <Button size="large" primary>
                Request Demo
              </Button>
            </div>
          </Col>
          <Col xs={24} xl={{ span: 10, offset: 2 }}>
            <img
              className="w-100"
              src={SimulationImg}
              alt="First-person business simulation"
            />
          </Col>
        </Row>
        <Row className="mt-80">
          <Col xl={{ offset: 2, span: 20 }}>
            <Row gutter={[24, 24]} className="simulation-content">
              <Col xs={24} md={12} xl={8}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">Deeply researched topics</h4>
                  <p className="text-body text-secondary">
                    Realistic storylines are crafted by professional script
                    writers in collaboration with industry experts and vetted by
                    an advisory council.
                  </p>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">
                    Dedicated film production{" "}
                  </h4>
                  <p className="text-body text-secondary">
                    Our film production capabilities are unrivaled. Our team has
                    been bringing business scenarios to life for more than two
                    decades.
                  </p>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">A real pressure test</h4>
                  <p className="text-body text-secondary">
                    Know what your candidate is made of. Place them in an
                    immersive world to gain insight into their full
                    problem-solving capabilities.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default BusinessSimulation;
