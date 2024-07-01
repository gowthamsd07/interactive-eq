import React, { useLayoutEffect } from 'react';
import './TopCandidate.scss';
import Button from '../../../UIComponents/Buttons/Buttons';
import TopCandidateImg from '../../../../assets/images/solutions/top-candidate.jpg';
import TopCandidateStarImg from '../../../../assets/images/solutions/top-candidate-star.png';
import { Row, Col } from 'antd';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TopCandidate = (props) => {
    const { items } = props;
    let mm = gsap.matchMedia();

    useLayoutEffect(() => {
        let cty = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".top-candidate-section",
                // markers: true,
                id: "top-candidate",
                scrub: false,
                start: "top",
                end: "10 top",
                once: true,
                onEnter: () => {
                    // mm.add("(min-width: 1200px)", () => {
                        gsap.to(
                            ".star-animation",
                            {   
                                opacity: 1,
                                transform: 'translateY(0)',
                                duration: 1.2,
                            },
                        );
                        gsap.to(
                            ".progress-1",
                            {
                                background:
                                    'radial-gradient(closest-side, #150E12 79%, transparent 80% 100%), conic-gradient(rgb(255, 255, 255) 95%, #848484ad 0)',
                                duration: 1.2,
                            },
                        );
                        gsap.to(
                            ".progress-2",
                            {
                                background:
                                    'radial-gradient(closest-side, #150E12 79%, transparent 80% 100%), conic-gradient(rgb(255, 255, 255) 85%, #848484ad 0)',
                                duration: 1.2,
                            },
                        );
                        gsap.to(
                            ".progress-3",
                            {
                                background:
                                    'radial-gradient(closest-side, #150E12 79%, transparent 80% 100%), conic-gradient(rgb(255, 255, 255) 96%, #848484ad 0)',
                                duration: 1.2,
                            },
                        );
                        gsap.to(
                            ".progress-4",
                            {
                                background:
                                    'radial-gradient(closest-side, #150E12 79%, transparent 80% 100%), conic-gradient(rgb(255, 255, 255) 94%, #848484ad 0)',
                                duration: 1.2,
                            },
                        );

                        function updateNumber(currentNumber, className) {
                            const numberElement = document.querySelector(`.${className}`);
                            numberElement.textContent = `${currentNumber}%`;
                        }

                        function animateNumbers(start, end, duration, elementToUpdate) {
                            const range = end - start;
                            const stepTime = Math.abs(Math.floor(duration / range));
                            let currentNumber = start;

                            const interval = setInterval(() => {
                                updateNumber(currentNumber, elementToUpdate);
                                if (currentNumber >= end) {
                                    clearInterval(interval);
                                } else {
                                    currentNumber++;
                                }
                            }, stepTime);
                        }

                        items.forEach(({ id, to }) => {
                            animateNumbers(0, to, 1000, id);
                        });
                    // });
                },
            });
        });
        return () => cty.revert();
    });

    return (
        <section className='top-candidate-section section-padding-y z-index-2 position-relative'>
            <div className='container'>
                <Row className='tc-img-wrapper'>
                    <Col span={24}>
                        <div className='position-relative w-100 h-100'>
                            <img className='w-100 h-100 candidate-banner-img' src={TopCandidateImg} alt='Top Candidate' />
                            <div className='star-candidateImg-wrapper star-animation'>
                                <img className='w-100 h-100' src={TopCandidateStarImg} alt='Top Candidate' />
                            </div>
                            <div className='top-candidate-section__progress-container'>
                                <div className='progressWrapper'>
                                    <div className="progress-bar progress-1">
                                        <progress id="progress-bar" min="0" max="100" value="20"></progress>
                                    </div>
                                    <div className='progressPercentage-wrapper'>
                                        <p className='pText subtitle-1 text-white'>Overall Percentage</p>
                                        <p className='pNum percentageNum-1 h3 text-white'>0</p>
                                    </div>
                                </div>
                                <div className='progressWrapper'>
                                    <div className="progress-bar progress-2">
                                        <progress id="progress-bar" min="0" max="100" value="20"></progress>
                                    </div>
                                    <div className='progressPercentage-wrapper'>
                                        <p className='pText subtitle-1 text-white'>Culture Add</p>
                                        <p className='pNum percentageNum-2 h3 text-white'>0</p>
                                    </div>
                                </div>
                                <div className='progressWrapper'>
                                    <div className="progress-bar progress-3">
                                        <progress id="progress-bar" min="0" max="100" value="20"></progress>
                                    </div>
                                    <div className='progressPercentage-wrapper'>
                                        <p className='pText subtitle-1 text-white'>Programming</p>
                                        <p className='pNum percentageNum-3 h3 text-white'>0</p>
                                    </div>
                                </div>
                                <div className='progressWrapper'>
                                    <div className="progress-bar progress-4">
                                        <progress id="progress-bar" min="0" max="100" value="20"></progress>
                                    </div>
                                    <div className='progressPercentage-wrapper'>
                                        <p className='pText subtitle-1 text-white'>Communication</p>
                                        <p className='pNum percentageNum-4 h3 text-white'>0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='top-candidate-desc flex-all-center w-100 mt-80'>
                    <p className='h6r text-center'>
                        Ensure every new colleague you hire fits in right away
                        by measuring their human aptitude before you make a job offer.
                        You can’t afford to dilute your talent pool.
                    </p>
                </div>
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