import React from 'react'
import './SaasAog.scss';
import AogImage from '../../../../assets/images/solutions/aog-img.jpg';
import { Row, Col } from 'antd';

const SaasAog = () => {
    return (
        <section className='saas-aog bg-surface z-index-2 position-relative'>
            <div className='container flex-all-center flex-column'>
                <h6>SaaS</h6>
                <h1 className='saas-aog__heading display-3 text-center'>
                    Achieve operational greatness
                </h1>
                <Row className='img-wrapper mt-80'>
                    <Col span={24}>
                        <img className='w-100 h-100' src={AogImage} alt="Achieve operational greatness" />
                    </Col>
                </Row>
                <div className='saas-desc flex-all-center w-100 mt-80'>
                    <p className='h6r'>
                        SaaS teams are full of brilliant,
                        talented people. Your top performers leverage 
                        their EQ every day to solve complex challenges.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SaasAog;
