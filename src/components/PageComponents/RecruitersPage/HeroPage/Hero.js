import React from 'react';
import Button from "../../../UIComponents/Buttons/Buttons";
import RecruiterBannerVideo from '../../../../assets/images/recruiters/recruiter-page-video.mp4';
import './Hero.scss';

const HeroPage = () => {
    return (
        <section className="ieq-recruiters-banner bg-surface">
                        <div className="ieq-recruiters-banner__bg">
              <video className="w-100 h-100" autoPlay muted loop={false}>
                <source src={RecruiterBannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* <img
                className="ieq-recruiters-banner__bg"
                src={RecruiterBanner}
                alt="recruiters banner background"
            /> */}
            <div className="ieq-recruiters-banner__content">
                <h1 className="display-3 text-center text-white">
                    Become a hiring superstar
                </h1>
                <p className="h6r text-center text-secondary">
                    iEQ turns you into the go-to resource for finding candidates who excel,
                    contribute to positive work environments,
                    and contribute to company success.
                </p>
                <Button size="large" primary>
                    Request Demo
                </Button>
            </div>
        </section>
    )
}

export default HeroPage;
