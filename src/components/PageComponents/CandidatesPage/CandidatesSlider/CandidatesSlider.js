import SliderCard from "../../ProductPage/FeatureSlider/FeatureSliderCard";

import "./CandidatesSlider.scss";

const CandidatesSlider = (props) => {
  return (
    <section className="ieq-candidate-slider section-padding-y bg-surface">
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

export default CandidatesSlider;
