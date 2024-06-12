import React, { createRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "../Backdrop/Backdrop";
import "./Modal.scss";
import IconSet from "../IconSet/IconSet";

const ModalOverlay = React.forwardRef((props, ref) => {
  const content = (
    <div ref={ref} className={`modal ${props.className}`} style={props.style}>
      <div className={`modal__content ${props.contentClass}`}>
        {props.children}
        <IconSet bg="bg" iconName="cross" onClick={props.onCancel} />
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
});

const Modal = (props) => {
  const nodeRef = createRef(null);
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={600}
        classNames="modal"
        nodeRef={nodeRef}
      >
        <ModalOverlay ref={nodeRef} {...props} />
        {/* <div
          ref={nodeRef}
          className={`modal ${props.className}`}
          style={props.style}
        >
          <div className={`modal__content ${props.contentClass}`}>
            {props.children}
          </div>
        </div> */}
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
