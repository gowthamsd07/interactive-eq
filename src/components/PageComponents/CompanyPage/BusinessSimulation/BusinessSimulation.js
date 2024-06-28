import React from "react";
import { Col, Row } from "antd";
import SimulationImg from "../../../../assets/images/company/company-simulation.png";
import "./BusinessSimualtion.scss";

const BusinessSimulation = () => {
  return (
    <section className="ieq-product-simulation section-padding-y bg-surface">
      <div className="container">
        <Row align={"middle"}>
          <Col xl={{ span: 7, offset: 2 }}>
            <div className="simulation-content">
              <h3 className="display-3 text-white">
                Creating a holistic solution
              </h3>
              <p className="h6r text-secondary">
                Interactive EQ was created to fill the missing piece in the
                hiring process. We developed assessments that provide a complete
                picture of the people you're hiring.
              </p>
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
                  <h4 className="h4r text-primary">
                    Backed by years of experience
                  </h4>
                </div>
              </Col>
              <Col xl={8}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">
                    Validated by industry leaders
                  </h4>
                </div>
              </Col>
              <Col xl={8}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">
                    Compliant with evolving AI standards
                  </h4>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default BusinessSimulation;
