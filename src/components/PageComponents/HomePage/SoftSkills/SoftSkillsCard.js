import React from "react";

import "./SoftSkillsCard.scss";
import ScrollAnimation from "react-animate-on-scroll";

const SoftSkillsCard = (props) => {
  return (
    <div
      className={`soft-skills-card direction-${props.direction || "default"}`}
    >
      <div className="soft-skills-card__content bg-variant1">
        <ScrollAnimation
          animateOnce={true}
          offset={200}
          duration={0.5}
          animateIn="animate__fadeIn"
        >
          <h6 className="text-white bg-variant2">{props.id}</h6>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          offset={150}
          duration={0.5}
          animateIn="animate__fadeInUp"
          delay={0.2}
        >
          <h4 className="text-primary">{props.title}</h4>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          offset={150}
          duration={0.5}
          animateIn="animate__fadeInUp"
          delay={0.4}
        >
          <p className="subtitle-1 text-placeholder">{props.desc}</p>
        </ScrollAnimation>
      </div>
      <div className="soft-skills-card__icon bg-variant1">
        <ScrollAnimation
          animateOnce={true}
          offset={150}
          duration={0.5}
          animateIn="animate__fadeIn"
        >
          <img className="main-icon" src={props.iconUrl} alt={props.title} />
        </ScrollAnimation>
        {/* <img src={props.animationElementUrl} alt={props.title} /> */}
      </div>
    </div>
  );
};

export default SoftSkillsCard;
