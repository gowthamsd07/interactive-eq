import React from "react";
import { Col, Row } from "antd";
import SimulationImg from "../../../../assets/images/product/business-simulation.png";
import "./BusinessSimualtion.scss";

const BusinessSimulation = () => {
  return (
    <section className="ieq-product-simulation section-padding-y bg-surface">
      <div className="container">
        <Row>
          <Col xl={{ span: 7, offset: 2 }}>
            <div className="simulation-content">
              <h3 className="display-3 text-white">
                Creating a holistic solution
              </h3>
              <p className="h6r text-secondary">
                Interactive EQ was created to fill the missing piece in the hiring process.
                We developed assessments that provide a complete picture of the people you're hiring.
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
                  {/* <h4 className="h4r text-primary">Leadership roles</h4> */}
                  <p className="h4r text-secondary">
                    Backed by years of experience
                  </p>
                </div>
              </Col>
              <Col xl={8}>
                <div className="simulation-card">
                  {/* <h4 className="h4r text-primary">Internal collaborators</h4> */}
                  <p className="h4r text-secondary">
                    Validated by industry leaders
                  </p>
                </div>
              </Col>
              <Col xl={8}>
                <div className="simulation-card">
                  {/* <h4 className="h4r text-primary">Client specialists</h4> */}
                  <p className="h4r text-secondary">
                    Compliant with evolving AI standards
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
