import React from 'react';
import './TopCandidate.scss';
import Button from '../../../UIComponents/Buttons/Buttons';
import TopCandidateImg from '../../../../assets/images/solutions/top-candidate.jpg';

const TopCandidate = () => {
    return (
        <section className='top-candidate-section section-padding-y'>
            <div className='container'>
                <div className='tc-img-wrapper'>
                    <img src={TopCandidateImg} alt='Top Candidate' />
                </div>
                <div className='flex-all-center mt-80'>
                    <p className='tc-description subtitle-3'>
                        Ensure every new colleague you hire fits in right away by
                        measuring their human aptitude before you make a job offer.
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