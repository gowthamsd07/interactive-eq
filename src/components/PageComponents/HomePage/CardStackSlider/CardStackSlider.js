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

function ListItemImage({
  openMapHandler,
  itemId,
  imgUrl,
  AltText,
  imgItemclass,
  title,
  desc,
  buttonText,
}) {
  const triggerPopupHandler = () => {
    openMapHandler(itemId);
  };
  return (
    <li
      className={`image-list__item image-list__item-${
        imgItemclass || "default"
      }`}
    >
      <div className="image-wrapper">
        <img src={imgUrl} alt={AltText} />
      </div>
      <div className="mobile-content">
        <h3 className="text-white">{title}</h3>
        <p className="h6r text-white">{desc}</p>
        <div onClick={triggerPopupHandler} className="w-100">
          <Button size="large" tertiary>
            {buttonText}
            <IconSet bg="bg" iconName="plus" />
          </Button>
        </div>
      </div>
    </li>
  );
}

function ListItemContent({
  openMapHandler,
  itemId,
  contentItemclass,
  title,
  desc,
  buttonText,
}) {
  const triggerPopupHandler = () => {
    openMapHandler(itemId);
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
        <div onClick={triggerPopupHandler}>
          <Button size="large" tertiary>
            {buttonText}
            <IconSet bg="bg" iconName="plus" />
          </Button>
        </div>
      </div>
    </li>
  );
}

const CardStackSlider = (props) => {
  let mm = gsap.matchMedia();
  const [showmodal, setShowmodal] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const openMapHandler = (id) => {
    setShowmodal(true);
    setCurrentModal(id);
    console.log(id, "clicked");
    document.body.style.overflow = "hidden";
  };

  const closeMapHandler = () => {
    setShowmodal(false);
    // setSelectedItem(null);
    setCurrentModal(null);

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
        // gsap.timeline({
        //   scrollTrigger: {
        //     trigger: ".ieq-cardslider",
        //     start: "0px top",
        //     end: "350% top",
        //     pin: true,
        //     scrub: true,
        //     // markers: true,
        //     id: "new",
        //   },
        // });
        ScrollTrigger.create({
          trigger: ".ieq-cardslider",
          id: "pin-mark",
          // markers: true,
          scrub: 3,
          start: "0px top",
          end: "350% top",
          pinSpacing: true,
          pinSpacer: true,
          anticipatePin: 1,
          pin: true,
          invalidateOnRefresh: true,
          onToggle: ({ isActive }) => {
            console.log("ScrollTrigger toggle", isActive);
            // Handle ScrollTrigger logic
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
  }, []);

  return (
    <Fragment>
      {props.items.map((item) => (
        <Modal
          key={item.id}
          show={showmodal && currentModal === item.id}
          onCancel={closeMapHandler}
          className="card-stack-modal"
          contentClass="card-stack-modal__content"
        >
          <div>
            <p className="text-body-bold text-primary-l"> {item.modalTitle}</p>
            <p className="text-body text-primary-l"> {item.modalDesc}</p>
            <Button size="small" secondary>
              Learn More
            </Button>
          </div>
        </Modal>
      ))}
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
                    itemId={item.id}
                    openMapHandler={openMapHandler}
                  />
                ))}
              </ul>
            </Col>
            <Col xl={{ span: 10 }} className="content-list-wrapper">
              <ul className="content-list">
                {props.items.map((item) => (
                  <Fragment>
                    <ListItemContent
                      key={item.id}
                      id={item.id}
                      contentItemclass={item.imgItemclass}
                      title={item.title}
                      desc={item.desc}
                      buttonText={item.buttonText}
                      itemId={item.id}
                      openMapHandler={openMapHandler}
                    />
                  </Fragment>
                ))}
                {/* <li className={`content-list__item content-list__item-1`}>
                  <div onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-white">title</h3>
                    <p onClick={(e) => showModal(e)} className="h6r text-white">
                      desc
                    </p>
                    <div>
                      <Button size="large" tertiary>
                        buttonText
                        <IconSet bg="bg" iconName="plus" />
                      </Button>
                    </div>
                  </div>
                  <div onClick={(e) => e.stopPropagation()}>
                    <Modal
                      title="Basic Modal"
                      open={showmodal}
                      onCancel={(e) => handleCancel(e)}
                    >
                      <div onClick={(e) => e.stopPropagation()}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={`content-list__item content-list__item-1`}>
                  <div>
                    <h3 className="text-white">title</h3>
                    <p className="h6r text-white">desc</p>
                    <div>
                      <Button size="large" tertiary>
                        buttonText
                        <IconSet bg="bg" iconName="plus" />
                      </Button>
                    </div>
                  </div>
                </li>
                <li className={`content-list__item content-list__item-1`}>
                  <div>
                    <h3 className="text-white">title</h3>
                    <p className="h6r text-white">desc</p>
                    <div>
                      <Button size="large" tertiary>
                        buttonText
                        <IconSet bg="bg" iconName="plus" />
                      </Button>
                    </div>
                  </div>
                </li> */}
              </ul>
            </Col>
          </Row>
        </div>
      </section>
    </Fragment>
  );
};

export default CardStackSlider;
