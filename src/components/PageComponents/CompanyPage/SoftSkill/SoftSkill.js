import React from 'react';
import { Row, Col } from 'antd';
import SoftSkillImg from '../../../../assets/images/company/softSkill-img.png'
import './SoftSkill.scss';

const SoftSkill = () => {
  return (
    <section className="ieq-company-softskill section-padding-y bg-surface">
      <div className='container'>
        <Row>
          <Col xs={24} md={{ span: 20, offset: 2 }} xl={{ span: 10, offset: 2 }}>
            <div className='w-100 h-100'>
              <img className='softSkillImg w-100 h-100' src={SoftSkillImg} alt='Soft Skill' />
            </div>
          </Col>
          <Col xs={24} md={{ span: 20, offset: 2 }} xl={{ span: 8, offset: 2 }}>
            <div className='ieq-company-softskill__content w-100 h-100'>
              <h2 className='mt-40 display-3'>
                Acting on a hunch
              </h2>
              <p className='h6r'>
                We suspected that IQ was over-valued in recruiting.
                Research confirmed it: 85% of employee success comes from soft skills.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default SoftSkill