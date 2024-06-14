import { Col, Row } from "antd";
import React, { useLayoutEffect } from "react";
import Button from "../../../UIComponents/Buttons/Buttons";
import IconSet from "../../../UIComponents/IconSet/IconSet";

import "./CardStackSlider.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { noop } from "antd/es/_util/warning";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const ListItemImage = (props) => {
  return (
    <li
      className={`image-list__item image-list__item-${
        props.imgItemclass || "default"
      }`}
    >
      <div className="image-wrapper">
        <img src={props.imgUrl} alt={props.AltText} />
      </div>
      <div className="mobile-content">
        <h3 className="text-white">{props.title}</h3>
        <p className="h6r text-white">{props.desc}</p>
        <Button size="large" tertiary>
          {props.buttonText}
          <IconSet bg="bg" iconName="plus" />
        </Button>
      </div>
    </li>
  );
};

const ListItemContent = (props) => {
  return (
    <li
      className={`content-list__item content-list__item-${
        props.contentItemclass || "default"
      }`}
    >
      <div>
        <h3 className="text-white">{props.title}</h3>
        <p className="h6r text-white">{props.desc}</p>
        <Button size="large" tertiary>
          {props.buttonText}
          <IconSet bg="bg" iconName="plus" />
        </Button>
      </div>
    </li>
  );
};

const CardStackSlider = (props) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".image-list__item");
      const rightElements = gsap.utils.toArray(".content-list__item");
      // gsap.set(".content-list__item", {
      //   opacity: 0.3,
      //   duration: 0.3,
      // });
      gsap.timeline({
        scrollTrigger: {
          trigger: ".ieq-cardslider",
          start: "0px top",
          end: "300% top",
          pin: true,
          scrub: true,
          // markers: true,
          id: "new",
        },
      });

      gsap.to(".image-list__item-2", {
        marginTop: -685,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".image-list__item-1",
          // markers: true,
          id: "img-1",
          scrub: 3,
          start: "50% top",
          end: "150% top",
        },
      });
      gsap.to(".image-list__item-1", {
        opacity: 0.4,
        scale: 0.8,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".image-list__item-1",
          // markers: true,
          id: "img-1",
          scrub: 3,
          start: "60% top",
          end: "160% top",
        },
      });
      gsap.to(".image-list__item-3", {
        marginTop: -685,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".image-list__item-2",
          // markers: true,
          id: "img-1",
          scrub: 3,
          start: "100% top",
          end: "200% top",
        },
      });
      gsap.to(".image-list__item-2", {
        opacity: 0.4,
        scale: 0.8,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".image-list__item-2",
          // markers: true,
          id: "img-1",
          scrub: 3,
          start: "100% top",
          end: "200% top",
        },
      });

      images.forEach((img, i) => {
        gsap.to(rightElements, {
          yPercent: -(100 * i),
          ease: "none",
          // delay: 0.2,
          immediateRender: false,
          scrollTrigger: {
            trigger: img,
            // markers: true,
            id: "cont",
            scrub: false,
            start: "60% center",
            end: "80% center",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
    return () => ctx.revert();
  });
  return (
    <section className="ieq-cardslider bg-surface">
      <div className="container ">
        <Row className="slider-wrapper">
          <Col xl={{ span: 10, offset: 2 }} className="image-list-wrapper">
            <ul className="image-list">
              {props.items.map((item) => (
                <ListItemImage
                  key={item.id}
                  id={item.id}
                  imgItemclass={item.imgItemclass}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  desc={item.desc}
                  buttonText={item.buttonText}
                />
              ))}
            </ul>
          </Col>
          <Col xl={{ span: 10 }} className="content-list-wrapper">
            <ul className="content-list">
              {props.items.map((item) => (
                <ListItemContent
                  key={item.id}
                  id={item.id}
                  contentItemclass={item.imgItemclass}
                  title={item.title}
                  desc={item.desc}
                  buttonText={item.buttonText}
                />
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CardStackSlider;
