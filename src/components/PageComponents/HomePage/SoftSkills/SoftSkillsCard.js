import React from "react";

import "./SoftSkillsCard.scss";
import ScrollAnimation from "react-animate-on-scroll";

const SoftSkillsCard = (props) => {
  return (
    <div
      className={`soft-skills-card bg-variant1-l direction-${
        props.direction || "default"
      }`}
    >
      <div className="soft-skills-card__content ">
        <ScrollAnimation
          animateOnce={true}
          offset={200}
          duration={0.5}
          animateIn="animate__fadeIn"
        >
          <h6 className=" bg-surface-l text-primary-l">{props.id}</h6>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          offset={230}
          duration={0.5}
          animateIn="animate__fadeInUp"
          delay={0.2}
        >
          <h4 className="text-primary-l fw-400">{props.title}</h4>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          offset={230}
          duration={0.5}
          animateIn="animate__fadeInUp"
          delay={0.4}
        >
          <p className="subtitle-1 text-secondary-l">{props.desc}</p>
        </ScrollAnimation>
      </div>
      <div className="soft-skills-card__icon bg-variant1-l">
        <ScrollAnimation
          animateOnce={true}
          offset={150}
          duration={0.5}
          animateIn="animate__fadeInUp"
        >
          {/* <img className="main-icon" src={props.iconUrl} alt={props.title} /> */}
          <video autoPlay loop muted className="icon-animation">
            <source src={props.iconUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </ScrollAnimation>
        {/* <img src={props.animationElementUrl} alt={props.title} /> */}
      </div>
    </div>
  );
};

export default SoftSkillsCard;
