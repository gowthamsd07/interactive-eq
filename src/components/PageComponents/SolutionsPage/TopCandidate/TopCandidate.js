import React from 'react';
import './TopCandidate.scss';
import Button from '../../../UIComponents/Buttons/Buttons';
import TopCandidateImg from '../../../../assets/images/solutions/top-candidate.jpg';
import { Row, Col } from 'antd';

const TopCandidate = () => {
    return (
        <section className='top-candidate-section section-padding-y'>
            <div className='container'>
                <Row className='tc-img-wrapper'>
                    <Col span={24}>
                        <img className='w-100 h-100' src={TopCandidateImg} alt='Top Candidate' />
                    </Col>
                </Row>
                <Row justify="center" className='mt-80'>
                    <Col span={10}>
                        <p className='tc-description h6r'>
                            Ensure every new colleague you hire fits in right away
                            by measuring their human aptitude before you make a job offer.
                            You can’t afford to dilute your talent pool.
                        </p>
                    </Col>
                </Row>
                <div className='flex-all-center mt-40'>
                    <div>
                        <Button size="large" primary>
                            Request Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopCandidate