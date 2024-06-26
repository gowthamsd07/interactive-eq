import React from "react";

import "./SoftSkillsCard.scss";

const SoftSkillsCard = ({ listItems, direction, title, desc, iconUrl }) => {
  return (
    <div
      className={`soft-skills-card bg-variant1-l direction-${
        direction || "default"
      }`}
    >
      <div className="soft-skills-card__content ">
        <h4 className="text-primary-l fw-400">{title}</h4>

        <p className="subtitle-2 text-secondary-l">{desc}</p>
        <ul className="soft-skills-card__list">
          {listItems.map((item, index) => (
            <li key={index} className="flex-align-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="12"
                viewBox="0 0 9 12"
                fill="none"
              >
                <path
                  d="M8.3226 4.77257L2.36194 0.587489C1.36796 -0.110396 0 0.600612 0 1.81512L3.37175e-07 10.1853C3.37175e-07 11.3998 1.36796 12.1108 2.36194 11.4129L8.3226 7.22783C9.17336 6.6305 9.17336 5.3699 8.3226 4.77257Z"
                  fill="#666666"
                />
              </svg>
              <p className="text-s-bold text-secondary-l">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="soft-skills-card__icon bg-variant1-l">
        <video autoPlay loop muted className="icon-animation">
          <source src={iconUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SoftSkillsCard;
