import React from 'react';
import Button from "../../../UIComponents/Buttons/Buttons";
import RecruiterBanner from '../../../../assets/images/recruiters/recruitershero.jpg';
import './Hero.scss';

const HeroPage = () => {
    return (
        <section className="ieq-recruiters-banner bg-surface">
            <img
                className="ieq-recruiters-banner__bg"
                src={RecruiterBanner}
                alt="recruiters banner background"
            />
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
