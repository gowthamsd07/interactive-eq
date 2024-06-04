import { Col, Row } from "antd";

import IconSet from "../../../UIComponents/IconSet/IconSet";
import Button from "../../../UIComponents/Buttons/Buttons";

import "./DataDriverPrecision.scss";

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
  return (
    <section className="ieq-datadriven section-padding-top">
      <div className="container">
        <h1 className="text-white text-center">
          Breaking barriers with data-driven precision
        </h1>
        <Row gutter={[80, 24]} className="mt-120">
          <Col xl={{ span: 12, offset: 2 }}>
            <div>
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
