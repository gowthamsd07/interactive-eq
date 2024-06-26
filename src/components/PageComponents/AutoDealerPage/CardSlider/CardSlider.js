import React from "react";
import SliderCard from "../../ProductPage/FeatureSlider/FeatureSliderCard";

import "./CardSlider.scss";

const DealerCardSlider = (props) => {
  return (
    <section className="ieq-auto-slider section-padding-y bg-surface">
      <div className="container">
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

export default DealerCardSlider;
