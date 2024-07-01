import React from 'react';
import CompanyBannerVideo from '../../../../assets/images/company/company-hero-video.mp4';
import './Hero.scss';

const HeroPage = () => {
    return (
        <section className="ieq-company-banner bg-surface z-index-2 position-relative">
            <div className="ieq-company-banner__bg">
                <video className="w-100" autoPlay muted loop={false}>
                    <source src={CompanyBannerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
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
