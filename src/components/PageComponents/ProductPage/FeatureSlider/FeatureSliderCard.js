import React from "react";

import "./FeatureSlider.scss";
import Button from "../../../UIComponents/Buttons/Buttons";

const SliderCard = (props) => {
  return (
    <div className="slider-card">
      <div className="slider-card__text">
        <h1 className="display-3 text-primary-l">{props.title}</h1>
        <p className="h6r text-secondary-l">{props.desc}</p>
        {props.isButton ? (
          <div className="flex-align-center buttons-wrap">
            <Button size="large" secondary>
              Success Stories
            </Button>
            <Button size="large" primary>
              Request Demo
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="slider-card__img">
        <img src={props.imgUrl} alt={props.title} />
      </div>
    </div>
  );
};

export default SliderCard;
