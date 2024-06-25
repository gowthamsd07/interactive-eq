import React from 'react'
import './SaasAog.scss';
import AogImage from '../../../../assets/images/solutions/aog-img.jpg'

const SaasAog = () => {
    return (
        <section className='saas-aog bg-surface'>
            <div className='container flex-all-center flex-column '>
                <h6>SaaS</h6>
                <h1 className='saas-aog__heading display-3 text-center'>
                    Achieve operational greatness
                </h1>
                <div className="img-wrapper">
                    <img className='"w-100' src={AogImage} alt="Achieve operational greatness" />
                </div>
                <div className='saas-desc subtitle-3'>
                    SaaS teams are full of brilliant, talented people. Your top performers leverage their EQ every day to solve complex challenges.
                </div>
            </div>
        </section>
    )
}

export default SaasAog;
