import React from "react";
import { Col, Row } from "antd";
import SimulationImg from "../../../../assets/images/company/company-simulation.png";
import "./BusinessSimualtion.scss";

const BusinessSimulation = () => {
  return (
    <section className="ieq-product-simulation section-padding-y bg-surface">
      <div className="container">
        <Row align={"middle"} gutter={[{ xl: 24 }, { xs: 80, sm: 80, md: 80 }]}>
          <Col xs={{ span: 24 }} md={{ span: 20, offset: 2 }} xl={{ span: 7, offset: 2 }}>
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
          <Col xs={{ span: 24 }} md={{ span: 20, offset: 2 }} xl={{ span: 10, offset: 3 }} className="flex-all-center">
          <div className="simulationImg-wrapper">
            <img
              className="w-100 h-100"
              src={SimulationImg}
              alt="First-person business simulation"
            />
          </div>
          </Col>
        </Row>
        <Row className="mt-80">
        <Col xl={{ offset: 2, span: 20 }}>
            <Row gutter={[{ xl: 24 }, { xs: 24, md: 24, sm: 24 }]}>
              <Col xs={24} md={{ span: 20, offset: 2 }} xl={{ span: 8, offset: 0 }}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">
                    Backed by years of experience
                  </h4>
                </div>
              </Col>
              <Col xs={24} md={{ span: 20, offset: 2 }} xl={{ span: 8, offset: 0 }}>
                <div className="simulation-card">
                  <h4 className="h4r text-primary">
                    Validated by industry leaders
                  </h4>
                </div>
              </Col>
              <Col xs={24} md={{ span: 20, offset: 2 }} xl={{ span: 8, offset: 0 }}>
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
