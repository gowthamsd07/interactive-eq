import React from "react";
import SliderCard from "../../ProductPage/FeatureSlider/FeatureSliderCard";
import Button from "../../../UIComponents/Buttons/Buttons";
import AgencyImg from '../../../../assets/images/recruiters/agency.png';
import "./Agency.scss";

const Agency = () => {
  return (
    <section className="ieq-auto-slider bg-surface section-padding-y">
      <div className="container flex-align-center flex-column">
        <SliderCard
          key={1}
          id={1}
          title="For agencies too"
          desc="Include human aptitude assessments in your recruiting toolbox to impress your clients and differentiate yourself against the competition."
          imgUrl={AgencyImg}
        />
        <div className="agencyActions mt-40">
          <Button size="large" secondary>
            Learn More
          </Button>
          <Button size="large" primary>
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Agency;
