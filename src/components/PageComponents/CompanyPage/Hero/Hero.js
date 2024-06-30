import React from 'react';
import CompanyBanner from '../../../../assets/images/company/Companyhero.png';
import './Hero.scss';

const HeroPage = () => {
    return (
        <section className="ieq-company-banner bg-surface z-index-2 position-relative">
            <img
                className="ieq-company-banner__bg"
                src={CompanyBanner}
                alt="company banner background"
            />
            <div className="ieq-company-banner__content">
                <h1 className="display-3 text-center text-white">
                Have you ever asked yourself
                </h1>
                <p className="h6r text-center text-secondary">
                “How did this candidate make it so far into the evaluation process?”
                </p>
            </div>
        </section>
    )
}

export default HeroPage;
