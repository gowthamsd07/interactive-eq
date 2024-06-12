import { Col, Row } from "antd";

// import IconSet from "../../../UIComponents/IconSet/IconSet";
// import Button from "../../../UIComponents/Buttons/Buttons";

import "./DataDriverPrecision.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
// import { noop } from "antd/es/_util/warning";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const ImageItem = (props) => {
  return (
    <div className={`slider-image-item ${props.groupClassImg || "default"}`}>
      <img className="w-100" src={props.imgUrl} alt={props.AltText} />
    </div>
  );
};

const ContentItem = (props) => {
  return (
    <div className={`slider-content-item ${props.groupClass || "default"}`}>
      <h6 className="fw-400 text-secondary">{props.description1}</h6>
      <h6 className="fw-400 text-secondary">{props.description2}</h6>
    </div>
  );
};

const DataDrivenPrecision = (props) => {
  let mm = gsap.matchMedia();

  useLayoutEffect(() => {
    mm.add("(min-width: 1200px)", () => {
      gsap.set(".slider-content-item-wrap", {
        y: "250px",
        duration: 0.3,
      });
    });
    mm.add("(max-width: 1199px)", () => {
      gsap.set(".slider-content-item-wrap", {
        y: "0px",
        duration: 0.3,
      });
    });
    gsap.set(".group-item-2", {
      opacity: 0.3,
      duration: 0.3,
    });
    gsap.set(".group-item-3", {
      opacity: 0.3,
      duration: 0.3,
    });

    gsap.set(".image-group-2", {
      opacity: 0.8,
      yPercent: -93,
      duration: 0.3,
      scale: 0.92,
    });
    gsap.set(".image-group-3", {
      opacity: 0.5,
      yPercent: -187,
      duration: 0.3,
      scale: 0.86,
    });

    let ctx = gsap.context(() => {
      mm.add("(max-width: 1199px)", () => {
        ScrollTrigger.create({
          trigger: ".ieq-datadriven",
          id: "pin-sec1",
          // markers: true,
          scrub: true,
          start: "25% top",
          end: "175% top",
          pinSpacing: true,
          pinSpacer: true,
          anticipatePin: 1,
          pin: true,
        });
      });
      mm.add("(min-width: 1200px)", () => {
        ScrollTrigger.create({
          trigger: ".ieq-datadriven",
          id: "pin-sec1",
          // markers: true,
          scrub: true,
          start: "0% top",
          end: "200% top",
          pinSpacing: true,
          pinSpacer: true,
          anticipatePin: 1,
          pin: true,
        });
      });
      // image animation

      gsap.to(".image-group-1", {
        scale: 1.01,
        yPercent: -2,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".group-item-1",
          // markers: true,
          id: "img-1",
          scrub: true,
          start: "top top",
          end: "400% top",
        },
      });
      gsap.to(".image-group-2", {
        scale: 1.01,
        yPercent: -104,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".group-item-2",
          // markers: true,
          id: "img-2",
          scrub: true,
          start: "top top",
          end: "400% top",
        },
      });
      gsap.to(".image-group-3", {
        scale: 1.01,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".group-item-2",
          // markers: true,
          id: "img-3",
          scrub: true,
          start: "450% top",
          end: "750% top",
        },
      });

      // content animation
      ScrollTrigger.create({
        trigger: ".group-item-2",
        id: "cont-1",
        // markers: true,
        scrub: 2,
        start: "0% top",
        end: "400% top",
        pinSpacing: false,
        pinSpacer: false,
        pin: false,
        onEnter: () => {
          mm.add("(min-width: 1200px)", () => {
            gsap.fromTo(
              ".slider-content-item-wrap",
              {
                y: "250px",
                duration: 0.3,
              },
              {
                y: 0,
                duration: 0.5,
                ease: "power1.out",
              }
            );
          });
          mm.add("(max-width: 1199px)", () => {
            gsap.fromTo(
              ".slider-content-item-wrap",
              {
                y: 0,
                duration: 0.3,
              },
              {
                y: "-237px",
                duration: 0.5,
                ease: "power1.out",
              }
            );
          });
          gsap.fromTo(
            ".group-item-2",
            {
              opacity: 0.3,
              duration: 0.3,
            },
            {
              opacity: 1,
              duration: 0.3,
            }
          );
          gsap.fromTo(
            ".group-item-1",
            {
              opacity: 1,
              duration: 0.3,
            },
            {
              opacity: 0.3,
              duration: 0.3,
              delay: 0.1,
            }
          );
          gsap.to(".image-group-1", {
            // opacity: 0,
            duration: 0.3,
            autoAlpha: 0,
          });

          gsap.to(".image-group-2", {
            opacity: 1,
            // yPercent: -100,
            duration: 0.3,
            // scale: 1,
          });
          gsap.to(".image-group-3", {
            yPercent: -190,
            duration: 0.3,
            // scale: 1,
          });
        },
        onLeave: () => {},
        onLeaveBack: () => {
          gsap.fromTo(
            ".group-item-2",
            {
              opacity: 1,
              duration: 0.3,
            },
            {
              opacity: 0.3,
              duration: 0.3,
            }
          );
          gsap.fromTo(
            ".group-item-1",
            {
              opacity: 0.3,
              duration: 0.3,
            },
            {
              opacity: 1,
              duration: 0.3,
              delay: 0.2,
            }
          );
          mm.add("(min-width: 1200px)", () => {
            gsap.fromTo(
              ".slider-content-item-wrap",
              {
                y: 0,
                duration: 0.3,
              },
              {
                y: "250px",
                duration: 0.5,
                ease: "power1.out",
              }
            );
          });
          mm.add("(max-width: 1199px)", () => {
            gsap.fromTo(
              ".slider-content-item-wrap",
              {
                y: "-237px",
                duration: 0.3,
              },
              {
                y: 0,
                duration: 0.5,
                ease: "power1.out",
              }
            );
          });
          gsap.to(".image-group-1", {
            // opacity: 0,
            duration: 0.3,
            autoAlpha: 1,
          });
          gsap.to(".image-group-2", {
            duration: 0.3,
            autoAlpha: 0.8,
          });
          gsap.to(".image-group-3", {
            // opacity: 0,
            yPercent: -186,
          });
        },
        onEnterBack: () => {
          gsap.fromTo(
            ".group-item-2",
            {
              opacity: 0.3,
              duration: 0.3,
            },
            {
              opacity: 1,
              duration: 0.3,
            }
          );
        },
      });
      ScrollTrigger.create({
        trigger: ".group-item-2",
        id: "cont-2",
        // markers: true,
        scrub: 2,
        start: "450% top",
        end: "750% top",
        pinSpacing: false,
        pinSpacer: false,
        pin: false,
        onEnter: () => {
          mm.add("(min-width: 1200px)", () => {
            gsap.fromTo(
              ".slider-content-item-wrap",
              {
                y: 0,
                duration: 0.3,
              },
              {
                y: "-250px",
                duration: 0.5,
                ease: "power1.out",
              }
            );
          });
          mm.add("(max-width: 1199px)", () => {
            gsap.fromTo(
              ".slider-content-item-wrap",
              {
                y: "-237px",
                duration: 0.3,
              },
              {
                y: "-474px",
                duration: 0.5,
                ease: "power1.out",
              }
            );
          });
          gsap.fromTo(
            ".group-item-3",
            {
              opacity: 0.3,
              duration: 0.3,
            },
            {
              opacity: 1,
              duration: 0.3,
              delay: 0.1,
            }
          );
          gsap.fromTo(
            ".group-item-2",
            {
              opacity: 1,
              duration: 0.3,
            },
            {
              opacity: 0.3,
              duration: 0.3,
            }
          );

          gsap.to(".image-group-2", {
            // opacity: 0,
            duration: 0.3,
            autoAlpha: 0,
          });
          gsap.to(".image-group-3", {
            opacity: 1,
            yPercent: -197,
            duration: 0.3,
            // scale: 1,
          });
        },
        onLeave: () => {
          gsap.fromTo(
            ".group-item-3",
            {
              opacity: 1,
              duration: 0.3,
            },
            {
              opacity: 1,
              duration: 0.3,
            }
          );
        },
        onLeaveBack: () => {
          mm.add("(min-width: 1200px)", () => {
            gsap.fromTo(
              ".slider-content-item-wrap",
              {
                y: "-250px",
                duration: 0.3,
              },
              {
                y: 0,
                duration: 0.5,
                ease: "power1.out",
              }
            );
          });
          mm.add("(max-width: 1199px)", () => {
            gsap.fromTo(
              ".slider-content-item-wrap",
              {
                y: "-474px",
                duration: 0.3,
              },
              {
                y: "-237px",
                duration: 0.5,
                ease: "power1.out",
              }
            );
          });
          gsap.fromTo(
            ".group-item-3",
            {
              opacity: 1,
              duration: 0.3,
            },
            {
              opacity: 0.3,
              duration: 0.3,
            }
          );
          gsap.to(".image-group-2", {
            // opacity: 0,
            duration: 0.3,
            autoAlpha: 1,
          });
          gsap.to(".image-group-3", {
            // opacity: 0,
            duration: 0.3,
            autoAlpha: 0.8,
            yPercent: -192,
          });
        },
        onEnterBack: () => {
          gsap.fromTo(
            ".group-item-3",
            {
              opacity: 1,
              duration: 0.3,
            },
            {
              opacity: 1,
              duration: 0.3,
            }
          );
        },
      });
    });

    return () => ctx.revert();
  });
  return (
    <section className="ieq-datadriven section-padding-y">
      <div className="container pin-container">
        <Row gutter={{ md: 40, xl: 80 }}>
          <Col md={12} xl={{ span: 8, offset: 2 }}>
            <h1 className="text-white ">Ultimate candidate scoring</h1>
          </Col>
          <Col md={12} xl={{ span: 12 }}>
            <p className="text-secondary subtitle-1 ">
              iEQ offers the missing piece in recruiting. We close the hiring
              blind spot by using an immersive assessment unlike any other on
              the market to score a candidate’s human aptitude.
            </p>
          </Col>
        </Row>
        <Row className="mt-120 slider-wrapper">
          <Col md={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 2 }}>
            <div className="w-100  slider-image-wrapper">
              {props.items.map((item) => (
                <ImageItem
                  key={item.id}
                  id={item.id}
                  imgUrl={item.imgUrl}
                  AltText={item.AltText}
                  groupClassImg={item.groupClassImg}
                />
              ))}
            </div>
          </Col>
          <Col
            md={{ span: 20, offset: 2 }}
            xl={{ span: 6 }}
            className="slider-contents"
          >
            <div className="slider-content-item-wrap">
              {props.items.map((item) => (
                <ContentItem
                  key={item.id}
                  id={item.id}
                  contentTitle={item.contentTitle}
                  description1={item.description1}
                  description2={item.description2}
                  ButtonText={item.ButtonText}
                  groupClass={item.groupClass}
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
