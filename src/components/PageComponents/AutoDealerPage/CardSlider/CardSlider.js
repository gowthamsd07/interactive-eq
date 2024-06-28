import React from "react";
import SliderCard from "../../ProductPage/FeatureSlider/FeatureSliderCard";
import Slider from "infinite-react-carousel";

import "./CardSlider.scss";

const DealerCardSlider = (props) => {
  const settings = {
    adaptiveHeight: true,
    gutter: 40,
  };
  return (
    <section className="ieq-auto-slider section-padding-top bg-surface">
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
