import { Col, Row } from "antd";
import React from "react";
import Button from "../../../UIComponents/Buttons/Buttons";

import StereotypeIcon1 from "../../../../assets/images/auto-dealer/stereotype-icon-1.png";
import StereotypeIcon2 from "../../../../assets/images/auto-dealer/stereotype-icon-2.png";

import "./StereoType.scss";

const StereoType = () => {
  return (
    <section className="ieq-auto-stereo z-index-2 position-relative section-padding-y bg-surface-l">
      <div className="container">
        <Row gutter={[24, { xs: 24, md: 80, xl: 24 }]}>
          <Col md={24} xl={{ span: 8, offset: 2 }} className="content-wrap">
            <h3 className="text-primary-l display-3">Avoid the stereotype</h3>
            <p className="h6r text-secondary-l">
              We all hate the slimy car salesman stereotype. iEQ ensures you
              keep them out of your store.
            </p>
            <Button size="large" primary>
              Request Demo
            </Button>
          </Col>
          <Col md={12} xl={6} className="d-flex">
            <div className="stereotype-card">
              <img src={StereotypeIcon1} alt="Stereotype icon" />
              <p className="h6r text-primary-l text-center">
                Identify salespeople that can sense when a deal is slipping.
              </p>
            </div>
          </Col>
          <Col md={12} xl={6} className="d-flex">
            <div className="stereotype-card">
              <img src={StereotypeIcon2} alt="Stereotype icon" />
              <p className="h6r text-primary-l text-center">
                Choose managers who act decisively.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default StereoType;
