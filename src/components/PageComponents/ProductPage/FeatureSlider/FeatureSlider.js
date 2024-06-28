import React from "react";
import Slider from "infinite-react-carousel";

import "./FeatureSlider.scss";
import SliderCard from "./FeatureSliderCard";

const FeatureSlider = (props) => {
  return (
    <section className="ieq-product-slider bg-surface-l section-padding-y">
      <div className="container position-relative">
        <div className="slider-wrapper">
          <Slider adaptiveHeight={true}>
            {props.items.map((item) => (
              <SliderCard
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.desc}
                imgUrl={item.imgUrl}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeatureSlider;
