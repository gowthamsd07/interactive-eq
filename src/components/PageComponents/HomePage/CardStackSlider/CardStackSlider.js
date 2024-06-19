import { Col, Row } from "antd";
import React, { Fragment, useLayoutEffect, useState } from "react";
import Button from "../../../UIComponents/Buttons/Buttons";
import IconSet from "../../../UIComponents/IconSet/IconSet";

import "./CardStackSlider.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Modal from "../../../UIComponents/Modal/Modal";
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

const ListItemContent = ({ contentItemclass, title, desc, buttonText }) => {
  const triggerClick = (event) => {
    event.stopPropagation();

    // Call handleClick function with itemId as argument
    // handleClick();
  };
  return (
    <li
      className={`content-list__item content-list__item-${
        contentItemclass || "default"
      }`}
    >
      <div>
        <h3 className="text-white">{title}</h3>
        <p className="h6r text-white">{desc}</p>
        <Button size="large" tertiary onClick={triggerClick}>
          {buttonText}
          <IconSet bg="bg" iconName="plus" />
        </Button>
      </div>
    </li>
  );
};

const CardStackSlider = (props) => {
  let mm = gsap.matchMedia();
  const [showmodal, setShowmodal] = useState(false);

  // const handleClick = (e) => {
  //   e.stopPropagation();

  //   setShowmodal(true);
  //   document.body.style.overflow = "hidden";
  // };

  const closeMapHandler = (e) => {
    e.stopPropagation();
    setShowmodal(false);
    // setSelectedItem(null);
    document.documentElement.style.overflow = "unset";
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      mm.add("(min-width: 1200px)", () => {
        const images = gsap.utils.toArray(".image-list__item");
        const rightElements = gsap.utils.toArray(".content-list__item");
        // gsap.set(".content-list__item", {
        // gsap.timeline({
        //   scrollTrigger: {
        //     trigger: ".ieq-cardslider",
        //     start: "-50% top",
        //     end: "0px top",
        //     pin: true,
        //     scrub: true,
        //     markers: true,
        //     id: "new",
        //   },
        // });
        //   opacity: 0.3,
        //   duration: 0.3,
        // });
        gsap.timeline({
          scrollTrigger: {
            trigger: ".ieq-cardslider",
            start: "0px top",
            end: "350% top",
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
            id: "card-2-in",
            scrub: 3,
            start: "180% top",
            end: "280% top",
            snap: 0.1,
          },
        });
        gsap.to(".image-list__item-1", {
          opacity: 0.4,
          scale: 0.8,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".image-list__item-1",
            // markers: true,
            id: "card-1-out",
            scrub: 3,
            start: "190% top",
            end: "290% top",
          },
        });
        gsap.to(".image-list__item-3", {
          marginTop: -685,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".image-list__item-2",
            // markers: true,
            id: "card-3-in",
            scrub: 3,
            start: "190% top",
            end: "290% top",
            snap: 0.1,
          },
        });
        gsap.to(".image-list__item-2", {
          opacity: 0.4,
          scale: 0.8,
          immediateRender: false,
          scrollTrigger: {
            trigger: ".image-list__item-2",
            // markers: true,
            id: "card-2-out",
            scrub: 3,
            start: "230% top",
            end: "330% top",
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
              id: "cont" + i,
              scrub: false,
              start: "160% center",
              end: "170% center",
              toggleActions: "play none none reverse",
            },
          });
        });
      });
    });
    return () => ctx.revert();
  });

  return (
    <Fragment>
      <Modal
        show={showmodal}
        onCancel={closeMapHandler}
        className=""
        contentClass=""
      >
        <div>modal</div>
      </Modal>

      <section className="ieq-cardslider bg-surface">
        <div className="container ">
          <Row className="slider-wrapper">
            <Col
              md={{ span: 20, offset: 2 }}
              xl={{ span: 10, offset: 2 }}
              className="image-list-wrapper"
            >
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
                    // openMapHandler={openMapHandler}
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
                    contentItemclass={item.contentItemclass}
                    title={item.title}
                    desc={item.desc}
                    buttonText={item.buttonText}
                    // handleClick={handleClick}
                  />
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </section>
    </Fragment>
  );
};

export default CardStackSlider;
