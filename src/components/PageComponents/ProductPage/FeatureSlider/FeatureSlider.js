import React from "react";
import Slider from "infinite-react-carousel";

import "./FeatureSlider.scss";
import SliderCard from "./FeatureSliderCard";

const FeatureSlider = (props) => {
  const settings = {
    adaptiveHeight: true,
    gutter: 40,
  };
  return (
    <section className="ieq-product-slider z-index-2 position-relative bg-surface-l section-padding-top">
      <div className="container position-relative">
        <div className="slider-wrapper">
          <Slider {...settings}>
            {props.items.map((item) => (
              <SliderCard
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.desc}
                imgUrl={item.imgUrl}
                isCta={item.isCta}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeatureSlider;
