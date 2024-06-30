import React from "react";
import "./Agency.scss";

const AgentCard = (props) => {
    const { title, desc, imgUrl } = props;
  return (
    <div className="slider-card d-flex">
    <div className="slider-card__text">
      <h1 className="text-primary-l text-center">{title}</h1>
      <p className="h6r text-secondary-l text-center">{desc}</p>
    </div>
    <div className="slider-card__img">
      <img src={imgUrl} alt={title} />
    </div>
  </div>
  );
};

export default AgentCard;
