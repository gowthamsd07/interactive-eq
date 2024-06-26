import React from "react";

import "./FeatureSlider.scss";
import SliderCard from "./FeatureSliderCard";

const FeatureSlider = (props) => {
  return (
    <section className="ieq-product-slider bg-surface-l section-padding-top">
      <div className="slider-wrapper">
        {props.items.map((item) => (
          <SliderCard
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSlider;
