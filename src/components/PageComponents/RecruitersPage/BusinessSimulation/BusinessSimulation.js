import React from "react";
import { Col, Row } from "antd";
import SimulationImg from "../../../../assets/images/product/business-simulation.png";
import "./BusinessSimualtion.scss";
import Button from "../../../UIComponents/Buttons/Buttons";

const BusinessSimulation = () => {
  return (
    <section className="ieq-product-simulation section-padding-y bg-surface">
      <div className="container">
        <Row>
          <Col xl={{ span: 7, offset: 2 }}>
            <div className="simulation-content">
              <h3 className="display-3 text-white">
                For all hiring needs
              </h3>
              <p className="h6r text-secondary">
                iEQ equips talent acquisition managers to build cohesive,
                high-performing workforces.
              </p>
              <Button size="large" primary>
                Request Demo
              </Button>
            </div>
          </Col>
          <Col xl={{ span: 10, offset: 3 }}>
            <img
              className="w-100"
              src={SimulationImg}
              alt="First-person business simulation"
            />
          </Col>
        </Row>
        <Row className="mt-80">
          <Col xl={{ offset: 2, span: 20 }}>
            <Row gutter={24}>
              <Col xl={8}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">Leadership roles</h4>
                  <p className="text-body text-secondary">
                    Identify born leaders: VPs, directors, and managers.
                  </p>
                </div>
              </Col>
              <Col xl={8}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">Internal collaborators</h4>
                  <p className="text-body text-secondary">
                    Find your workhorses: Admins, specialists, and associates.
                  </p>
                </div>
              </Col>
              <Col xl={8}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">Client specialists</h4>
                  <p className="text-body text-secondary">
                    Spot "people people": Account managers and business development staff.
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
