import React from "react";
import SliderCard from "../../ProductPage/FeatureSlider/FeatureSliderCard";
import Slider from "infinite-react-carousel";

import "./CardSlider.scss";

const DealerCardSlider = (props) => {
  return (
    <section className="ieq-auto-slider section-padding-top bg-surface">
      <div className="container position-relative">
        <div className="slider-wrapper w-100">
          <Slider adaptiveHeight={true}>
            {props.items.map((item) => (
              <SliderCard
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.desc}
                imgUrl={item.imgUrl}
                isButton={item.isButton}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default DealerCardSlider;
