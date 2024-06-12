import React from "react";

import "./SoftSkillsCard.scss";

const SoftSkillsCard = (props) => {
  return (
    <div
      className={`soft-skills-card bg-variant1-l direction-${
        props.direction || "default"
      }`}
    >
      <div className="soft-skills-card__content ">
        <h6 className=" bg-surface-l text-primary-l">{props.id}</h6>

        <h4 className="text-primary-l fw-400">{props.title}</h4>

        <p className="subtitle-1 text-secondary-l">{props.desc}</p>
      </div>
      <div className="soft-skills-card__icon bg-variant1-l">
        <video autoPlay loop muted className="icon-animation">
          <source src={props.iconUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SoftSkillsCard;
