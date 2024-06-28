import SliderCard from "../../ProductPage/FeatureSlider/FeatureSliderCard";
import Slider from "infinite-react-carousel";

import "./CandidatesSlider.scss";

const CandidatesSlider = (props) => {
  return (
    <section className="ieq-candidate-slider section-padding-top bg-surface">
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

export default CandidatesSlider;
