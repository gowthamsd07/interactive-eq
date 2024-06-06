import { Col, Row } from "antd";

import IconSet from "../../../UIComponents/IconSet/IconSet";
import Button from "../../../UIComponents/Buttons/Buttons";

import "./DataDriverPrecision.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const ImageItem = (props) => {
  return (
    <div className="slider-image-item">
      <img className="w-100" src={props.imgUrl} alt={props.AltText} />
    </div>
  );
};

const ContentItem = (props) => {
  return (
    <div className="slider-content-item">
      <h4 className="text-white">{props.contentTitle}</h4>
      <p className="subtitle-2 text-secondary">{props.description}</p>
      <Button size="large" tertiary>
        {props.ButtonText}
        <IconSet bg="bg" iconName="plus" />
      </Button>
    </div>
  );
};

const DataDrivenPrecision = (props) => {
  useEffect(() => {
    // min width 1200px
    // gsap.set(".slider-content-item > *", {
    //   opacity: 0,
    //   duration: 0.3,
    // });
    //  set pin testimonial section
    // ScrollTrigger.create({
    //   trigger: ".pin-container",
    //   id: "pin-sec",
    //   // markers: true,
    //   scrub: true,
    //   start: "20% top",
    //   end: "100% top",
    //   pinSpacing: true,
    //   pinSpacer: true,
    //   anticipatePin: 1,
    //   pin: true,
    // });
  });
  return (
    <section className="ieq-datadriven section-padding-top">
      <div className="container pin-container">
        <h1 className="text-white text-center">
          Breaking barriers with data-driven precision
        </h1>
        <Row gutter={[80, 24]} className="mt-120">
          <Col xl={{ span: 12, offset: 2 }}>
            <div className="w-100 h-100">
              {props.items.map((item) => (
                <ImageItem
                  key={item.id}
                  id={item.id}
                  imgUrl={item.imgUrl}
                  AltText={item.AltText}
                />
              ))}
            </div>
          </Col>
          <Col xl={{ span: 8 }}>
            <div className="slider-content-item-wrap">
              {props.items.map((item) => (
                <ContentItem
                  key={item.id}
                  id={item.id}
                  contentTitle={item.contentTitle}
                  description={item.description}
                  ButtonText={item.ButtonText}
                />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default DataDrivenPrecision;
