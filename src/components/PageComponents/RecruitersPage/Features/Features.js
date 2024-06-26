import React from 'react';
import { Row, Col } from 'antd';
import slider1 from '../../../../assets/images/recruiters/skill-slider-1.png'
import slider2 from '../../../../assets/images/recruiters/skill-slider-2.png'
import slider3 from '../../../../assets/images/recruiters/skill-slider-3.png'
import './Features.scss';

const Features = () => {
    return (
        <section className="ieq-recruiters-features section-padding-y bg-surface">
            <div className="container flex-all-center flex-column">
                <div className="ieq-recruiters-featureTitle">
                    <h3 className="h3 text-center text-white">
                        A critical feature of your hiring process
                    </h3>
                    <p className="h6r text-center text-secondary">
                        Adding human aptitude to your workflow couldn't be easier.
                    </p>
                </div>
                <Row className="mt-80">
                    <Col xl={{ span: 20, offset: 2 }}>
                        <Row gutter={24}>
                            <Col xl={8}>
                                <div className="feature-card flex-all-center">
                                    <img src={slider1} alt="gen ai" />
                                    <h3 className="text-primary-l text-center">Ready to integrate</h3>
                                    <p className="h6r text-center">
                                    Compatible with all major ATS platforms.
                                    </p>
                                </div>
                            </Col>
                            <Col xl={8}>
                                <div className="feature-card flex-all-center">
                                    <img src={slider2} alt="gen ai" />
                                    <h3 className="text-primary-l text-center">Fast results</h3>
                                    <p className="h6r text-center">
                                    Receive scoring results instantly.
                                    </p>
                                </div>
                            </Col>
                            <Col xl={8}>
                                <div className="feature-card flex-all-center">
                                    <img src={slider3} alt="gen ai" />
                                    <h3 className="text-primary-l text-center">Accurate identification</h3>
                                    <p className="h6r text-center">
                                    Hire with greater confidence.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>

    )
}

export default Features;
