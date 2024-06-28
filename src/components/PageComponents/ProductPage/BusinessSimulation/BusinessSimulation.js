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
                It's time to place your candidates in a first-person business
                simulation.
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
                  <h4 className="h4r text-primary">Film production</h4>
                  <p className="text-body text-secondary">
                    Image is everything. Our production team has over two
                    decades suspending disbelief.
                  </p>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">Layered writing </h4>
                  <p className="text-body text-secondary">
                    Working with business experts who are also writers ensures
                    our assessments are comprehensive and realistic.
                  </p>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">Real-life scenarios </h4>
                  <p className="text-body text-secondary">
                    First-person POV situations ripped from the boardroom are
                    played out by real actors.
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
