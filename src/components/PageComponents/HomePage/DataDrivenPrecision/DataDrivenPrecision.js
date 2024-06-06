import { Col, Row } from "antd";

// import IconSet from "../../../UIComponents/IconSet/IconSet";
// import Button from "../../../UIComponents/Buttons/Buttons";

import "./DataDriverPrecision.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

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
      {/* <Button size="large" tertiary>
        {props.ButtonText}
        <IconSet bg="bg" iconName="plus" />
      </Button> */}
    </div>
  );
};

const DataDrivenPrecision = (props) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".ieq-datadriven",
        id: "pin-sec1",
        // markers: true,
        scrub: true,
        start: "23% top",
        end: "100% top",
        pinSpacing: true,
        pinSpacer: true,
        anticipatePin: 1,
        pin: true,
      });
    });

    return () => ctx.revert();
  });
  return (
    <section className="ieq-datadriven section-padding-top">
      <div className="container pin-container">
        <Row gutter={80}>
          <Col xl={{ span: 8, offset: 1 }}>
            <h1 className="text-white ">Ultimate candidate scoring</h1>
          </Col>
          <Col xl={{ span: 12 }}>
            <p className="text-secondary subtitle-1 ">
              iEQ offers the missing piece in recruiting. We close the hiring
              blind spot by using an immersive assessment unlike any other on
              the market to score a candidate’s human aptitude.
            </p>
          </Col>
        </Row>
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
