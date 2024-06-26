import React from "react";

import "./FeatureSlider.scss";

const SliderCard = (props) => {
  return (
    <div className="slider-card">
      <div className="slider-card__text">
        <h3 className="display-3 text-primary-l">{props.title}</h3>
        <p className="h6r text-secondary-l">{props.desc}</p>
      </div>
      <div className="slider-card__img">
        <img src={props.imgUrl} alt={props.title} />
      </div>
    </div>
  );
};

export default SliderCard;
