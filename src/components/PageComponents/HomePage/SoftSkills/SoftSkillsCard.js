import React from "react";

import "./SoftSkillsCard.scss";

const SoftSkillsCard = (props) => {
  return (
    <div
      className={`soft-skills-card direction-${props.direction || "default"}`}
    >
      <div className="soft-skills-card__content bg-variant1">
        <h6 className="text-white bg-variant2">{props.id}</h6>
        <h4 className="text-primary">{props.title}</h4>
        <p className="subtitle-1 text-placeholder">{props.desc}</p>
      </div>
      <div className="soft-skills-card__icon bg-variant1">
        <img className="main-icon" src={props.iconUrl} alt={props.title} />
        {/* <img src={props.animationElementUrl} alt={props.title} /> */}
      </div>
    </div>
  );
};

export default SoftSkillsCard;
